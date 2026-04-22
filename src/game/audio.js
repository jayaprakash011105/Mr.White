/**
 * Web Audio API based Synthesizer for Arcade Sounds & Ambient Drone
 * Provides Haptic and Audio immersion without needing external assets (Offline-ready).
 */

class SoundManager {
  constructor() {
    this.ctx = null;
    this.isMuted = false;
    this.bgmNode = null;
    this.ambientNodes = [];
    this.currentPhase = null;

    // Reliability Patch: Initialize on first interaction anywhere
    const initOnFirstTouch = () => {
      this.init();
      window.removeEventListener('click', initOnFirstTouch);
      window.removeEventListener('touchstart', initOnFirstTouch);
    };
    window.addEventListener('click', initOnFirstTouch);
    window.addEventListener('touchstart', initOnFirstTouch);
  }

  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  setMuted(mute) {
    this.isMuted = mute;
    this.stopAmbient();
    if (!mute && this.currentPhase) {
      this.playBgm(this.currentPhase);
    }
  }

  /** Play a synthesized arcade sound effect */
  playSfx(type) {
    if (this.isMuted || !this.ctx) return;
    
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);

    const now = this.ctx.currentTime;

    switch(type) {
      case 'click':
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800, now);
        osc.frequency.exponentialRampToValueAtTime(400, now + 0.1);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
        osc.start(now);
        osc.stop(now + 0.1);
        break;
      
      case 'mutation':
        osc.type = 'sawtooth';
        osc.frequency.setValueAtTime(150, now);
        osc.frequency.linearRampToValueAtTime(600, now + 0.1);
        osc.frequency.linearRampToValueAtTime(200, now + 0.2);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.exponentialRampToValueAtTime(0.01, now + 0.3);
        osc.start(now);
        osc.stop(now + 0.3);
        this.vibrate([50, 30, 50]);
        break;

      case 'win':
        [440, 554.37, 659.25].forEach((freq, i) => {
          const o = this.ctx.createOscillator();
          const g = this.ctx.createGain();
          o.type = 'triangle';
          o.frequency.setValueAtTime(freq, now + i * 0.1);
          g.gain.setValueAtTime(0.1, now + i * 0.1);
          g.gain.exponentialRampToValueAtTime(0.01, now + i * 0.1 + 0.4);
          o.connect(g);
          g.connect(this.ctx.destination);
          o.start(now + i * 0.1);
          o.stop(now + i * 0.1 + 0.4);
        });
        this.vibrate([100, 50, 100]);
        break;

      case 'eliminate':
        osc.type = 'square';
        osc.frequency.setValueAtTime(200, now);
        osc.frequency.exponentialRampToValueAtTime(50, now + 0.8);
        gain.gain.setValueAtTime(0.1, now);
        gain.gain.linearRampToValueAtTime(0, now + 0.8);
        osc.start(now);
        osc.stop(now + 0.8);
        this.vibrate(200);
        break;
    }
  }

  vibrate(pattern) {
    if (window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(pattern);
    }
  }

  /** 
   * Play background music synthesized perfectly in code.
   * No external files needed.
   */
  playBgm(phase) {
    this.currentPhase = phase;
    if (this.isMuted || !this.ctx) return;
    this.stopAmbient();

    const now = this.ctx.currentTime;

    if (phase === 'HOME') {
      this.createDrone([110, 164.81], 'sine', 0.05); // low A & E
    } else if (phase === 'GAME') {
      this.createDrone([123.47, 185.00], 'triangle', 0.03); // low B & F#
    } else if (phase === 'VOTING') {
      this.createDrone([87.31, 92.5], 'sawtooth', 0.02, true); // low F & F# (dissonance)
    }
  }

  createDrone(frequencies, type, volume, pulse = false) {
    frequencies.forEach(freq => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
      
      gain.gain.setValueAtTime(volume, this.ctx.currentTime);
      
      if (pulse) {
        // Ticking effect for voting
        gain.gain.setValueAtTime(volume, this.ctx.currentTime);
        for(let i=0; i<600; i++) {
          gain.gain.setValueAtTime(volume * 1.5, this.ctx.currentTime + i);
          gain.gain.setValueAtTime(volume * 0.5, this.ctx.currentTime + i + 0.1);
        }
      }

      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start();
      
      this.ambientNodes.push({ osc, gain });
    });
  }

  stopAmbient() {
    this.ambientNodes.forEach(node => {
      try {
        node.osc.stop();
        node.osc.disconnect();
      } catch(e) {}
    });
    this.ambientNodes = [];
  }
}

export const sounds = new SoundManager();

export const BGM_URLS = {
  HOME: 'HOME',
  GAME: 'GAME',
  VOTING: 'VOTING',
};
