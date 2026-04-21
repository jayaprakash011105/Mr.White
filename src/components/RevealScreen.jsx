import { useState, useEffect } from 'react';

const REVEAL_SECONDS = 2;

function RevealScreen({ gameState, onComplete }) {
  const { players, current_round, eliminated_players } = gameState;
  const activePlayers = players.filter(p => !eliminated_players.includes(p));
  const [idx, setIdx]               = useState(0);
  const [phase, setPhase]           = useState('wait'); // 'wait' | 'showing' | 'hidden'
  const [timeLeft, setTimeLeft]     = useState(REVEAL_SECONDS);

  /* countdown while showing */
  useEffect(() => {
    if (phase !== 'showing') return;
    if (timeLeft <= 0) {
      setPhase('hidden');
      return;
    }
    const t = setTimeout(() => setTimeLeft(t => t - 1), 1000);
    return () => clearTimeout(t);
  }, [phase, timeLeft]);

  const handleReveal = () => {
    setPhase('showing');
    setTimeLeft(REVEAL_SECONDS);
  };

  const handleNext = () => {
    if (idx < activePlayers.length - 1) {
      setIdx(i => i + 1);
      setPhase('wait');
    } else {
      onComplete();
    }
  };

  const currentPlayer = activePlayers[idx];
  const currentWord   = gameState.words[currentPlayer];
  const barWidth      = phase === 'showing' ? `${(timeLeft / REVEAL_SECONDS) * 100}%` : '100%';
  const isLast        = idx === activePlayers.length - 1;

  /* ─── WAIT PHASE ─── */
  if (phase === 'wait') return (
    <div className="pop-in">
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <span className="label-caps" style={{ background: current_round > 1 ? 'var(--orange)' : 'var(--blue)' }}>
          {current_round > 1 ? '🌀 ROUND SYNC' : 'Step 2: The Reveal'}
        </span>
        <h2 className="title-medium" style={{ fontSize: '2.5rem', marginTop: 10 }}>{currentPlayer}</h2>
        <p style={{ fontWeight: 600, marginBottom: 30 }}>
          {current_round > 1 
            ? 'A new round started! Has your word shifted? Check now.' 
            : `Grab the device, ${currentPlayer}! Keep it secret.`}
        </p>
        <button className="btn btn-primary" onClick={handleReveal}>
          SEE MY WORD 👁️
        </button>
      </div>
      <div style={{ textAlign: 'center', marginTop: 15, fontWeight: 800, opacity: 0.5 }}>
        Player {idx + 1} of {activePlayers.length}
      </div>
    </div>
  );

  /* ─── SHOWING PHASE ─── */
  if (phase === 'showing') return (
    <div className="pop-in">
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <span className="label-caps" style={{ background: 'var(--green)' }}>Your Secret Word</span>
        <div className="word-reveal">{currentWord}</div>
        <div className="timer-bar-wrap">
          <div className="timer-bar" style={{ width: barWidth }} />
        </div>
        <p style={{ marginTop: 20, fontWeight: 900, color: 'var(--black)' }}>MEMORIZE IT! {timeLeft}s</p>
      </div>
    </div>
  );

  /* ─── HIDDEN PHASE ─── */
  return (
    <div className="pop-in">
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '4rem' }}>⭐</span>
        <h2 className="title-medium" style={{ marginTop: 10 }}>WORD SECURED!</h2>
        <p style={{ fontWeight: 600 }}>
          Hand the device to the next player or give it back to the Host.
        </p>
        <div style={{ marginTop: 30 }}>
          <button className="btn btn-primary" onClick={handleNext}>
            {isLast ? 'START PLAYING! 🚀' : `Next Player ➜`}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RevealScreen;
