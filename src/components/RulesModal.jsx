import React from 'react';

function RulesModal({ isOpen, onClose }) {
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
      zIndex: 1000,
      padding: '20px',
      backdropFilter: 'blur(5px)'
    }} onClick={onClose}>
      <div className="glass-card pop-in" style={{
        maxWidth: '500px',
        width: '100%',
        maxHeight: '85vh',
        overflowY: 'auto',
        position: 'relative',
        border: '1px solid var(--purple-light)'
      }} onClick={e => e.stopPropagation()}>
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 15,
            right: 15,
            background: 'none',
            border: 'none',
            color: 'white',
            fontSize: '1.5rem',
            cursor: 'pointer'
          }}
        >✕</button>

        <h2 className="title-medium" style={{ textAlign: 'center', marginBottom: 20 }}>📜 GAME RULES</h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          
          <section>
            <h3 style={{ color: 'var(--yellow)', borderBottom: '1px solid #ffffff33', paddingBottom: 5 }}>🏠 NORMAL MODE</h3>
            <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Objective:</strong> Humans must find <strong>Mr. White</strong>. Mr. White must survive.</li>
              <li><strong>The Word:</strong> Humans receive a secret word. Mr. White receives a <i>related</i> word, the category, or nothing!</li>
              <li><strong>Clues:</strong> Players take turns giving a 1-word clue about their word.</li>
              <li><strong>Voting:</strong> After discussion, vote for the most suspicious player.</li>
              <li><strong>Ending:</strong> If Mr. White is voted out, Humans win. If only 2 players remain and Mr. White is one of them, Mr. White wins!</li>
            </ul>
          </section>

          <section>
            <h3 style={{ color: 'var(--cyan)', borderBottom: '1px solid #ffffff33', paddingBottom: 5 }}>🧬 MUTATION MODE</h3>
            <ul style={{ paddingLeft: 20, marginTop: 10, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <li><strong>Infected Players:</strong> 1-2 players are "Infected". They start with the Human word.</li>
              <li><strong>Mutation:</strong> Every round, there is a chance the Infected player's word will change to the next word in the chain!</li>
              <li><strong>The Twist:</strong> Infected players will slowly start giving clues for a different word, making them look suspicious like Mr. White.</li>
              <li><strong>Humans:</strong> Must distinguish between the true Mr. White and an Infected human whose word is simply mutating.</li>
            </ul>
          </section>

          <section style={{ background: '#ffffff11', padding: 15, borderRadius: 12 }}>
            <h4 style={{ color: 'var(--purple)' }}>💡 TIPS</h4>
            <p style={{ fontSize: '0.9rem', marginTop: 5 }}> Don't be too obvious with your clues! If Mr. White guesses the exact Human word, they might still win (depending on house rules)!</p>
          </section>
        </div>

        <button 
          className="btn btn-primary" 
          onClick={onClose} 
          style={{ marginTop: 25, width: '100%' }}
        >
          GOT IT! 👍
        </button>
      </div>
    </div>
  );
}

export default RulesModal;
