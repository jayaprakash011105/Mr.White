import React from 'react';

function SettingsModal({ isOpen, onClose, settings, onUpdate, onResetScores }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.85)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px',
      backdropFilter: 'blur(10px)'
    }} onClick={onClose}>
      <div className="glass-card pop-in" style={{
        maxWidth: '450px',
        width: '100%',
        position: 'relative',
        border: '3px solid var(--black)',
        transform: 'rotate(0deg)'
      }} onClick={e => e.stopPropagation()}>
        
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 15,
            right: 15,
            background: 'none',
            border: 'none',
            color: 'var(--black)',
            fontSize: '1.5rem',
            cursor: 'pointer',
            fontWeight: 900
          }}
        >✕</button>

        <h2 className="title-medium" style={{ textAlign: 'center', marginBottom: 25 }}>⚙️ GAME SETTINGS</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 25 }}>
          
          {/* Memorize Timer */}
          <div className="setting-row">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <label style={{ fontWeight: 800, fontSize: '0.9rem' }}>MEMORIZE TIMER</label>
              <span style={{ fontWeight: 900, color: 'var(--purple)' }}>{settings.revealTime}s</span>
            </div>
            <input 
              type="range" 
              min="1" 
              max="10" 
              value={settings.revealTime} 
              onChange={(e) => onUpdate('revealTime', parseInt(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--purple)' }}
            />
          </div>

          {/* Discussion Timer */}
          <div className="setting-row">
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 8 }}>
              <label style={{ fontWeight: 800, fontSize: '0.9rem' }}>DISCUSSION TIMER</label>
              <span style={{ fontWeight: 900, color: 'var(--blue)' }}>{settings.discussionTime}s</span>
            </div>
            <input 
              type="range" 
              min="10" 
              max="120" 
              step="10"
              value={settings.discussionTime} 
              onChange={(e) => onUpdate('discussionTime', parseInt(e.target.value))}
              style={{ width: '100%', cursor: 'pointer', accentColor: 'var(--blue)' }}
            />
          </div>

          {/* Theme/Visual Options */}
          <div style={{ display: 'flex', gap: 15 }}>
             <button 
                className={`btn ${settings.highContrast ? 'btn-secondary' : 'btn-white'}`}
                style={{ padding: '12px', fontSize: '0.8rem', flex: 1 }}
                onClick={() => onUpdate('highContrast', !settings.highContrast)}
             >
               {settings.highContrast ? 'CONTRAST: ON' : 'CONTRAST: OFF'}
             </button>
             <button 
                className={`btn ${settings.animations ? 'btn-secondary' : 'btn-white'}`}
                style={{ padding: '12px', fontSize: '0.8rem', flex: 1 }}
                onClick={() => onUpdate('animations', !settings.animations)}
             >
               ANIMATIONS: {settings.animations ? 'ON' : 'OFF'}
             </button>
          </div>

          {/* Danger Zone */}
          <div style={{ borderTop: '2px dashed #00000022', pt: 20 }}>
             <button 
                className="btn btn-danger" 
                style={{ padding: '15px', fontSize: '0.9rem', width: '100%', background: '#dc3545', color: 'white' }}
                onClick={() => {
                   if(window.confirm("Reset all session scores to zero?")) {
                      onResetScores();
                      alert("Scores reset!");
                   }
                }}
             >
               🔥 RESET SESSION SCORES
             </button>
          </div>

        </div>

        <button 
          className="btn btn-primary" 
          onClick={onClose} 
          style={{ marginTop: 25, width: '100%' }}
        >
          SAVE & CLOSE
        </button>
      </div>
    </div>
  );
}

export default SettingsModal;
