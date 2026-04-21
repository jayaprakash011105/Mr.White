import React from 'react';

function IntroScreen({ onEnter }) {
  return (
    <div className="pop-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div style={{ textAlign: 'center' }}>
          <h1 className="title-large">MR.<br/>WHITE</h1>
          <p style={{ fontWeight: 800, fontSize: '1.2rem', color: 'var(--purple)', marginTop: -5 }}>
            THE PARTY GAME OF LIES! 🤫
          </p>
      </div>

      <div className="glass-card">
        <h3 className="title-medium" style={{ fontSize: '1.4rem' }}>HOW TO WIN 🏆</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15, marginTop: 10 }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{ fontSize: '1.5rem' }}>👨‍👩‍👧</span>
            <p><strong>HUMANS:</strong> Find and vote out Mr. White before it's too late!</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{ fontSize: '1.5rem' }}>👾</span>
            <p><strong>MR. WHITE:</strong> Blend in! Pretend you know the word to survive.</p>
          </div>
          <div style={{ display: 'flex', gap: 12 }}>
            <span style={{ fontSize: '1.5rem' }}>🌀</span>
            <p><strong>MUTATION:</strong> Every round, words might change! Keep checking your word.</p>
          </div>
        </div>
      </div>

      <button className="btn btn-primary" onClick={onEnter}>
        LET'S GO! 🎮
      </button>

      <div style={{ textAlign: 'center', opacity: 0.6, fontSize: '0.8rem' }}>
        A Face-to-Face Social Game • 4-10 Players
      </div>
    </div>
  );
}

export default IntroScreen;
