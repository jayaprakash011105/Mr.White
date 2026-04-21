import React from 'react';

function EliminationResultScreen({ player, role, onContinue }) {
  const isHuman = role !== "mrWhite";

  return (
    <div className="modal-overlay" style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      background: 'rgba(0,0,0,0.9)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 2000,
      padding: '20px',
      backdropFilter: 'blur(10px)'
    }}>
      <div className="glass-card animate-winner" style={{
        maxWidth: '450px',
        width: '100%',
        textAlign: 'center',
        padding: '40px 20px',
        border: `5px solid ${isHuman ? 'var(--blue)' : 'var(--pink)'}`,
        transform: 'rotate(0deg)'
      }}>
        <div style={{ fontSize: '5rem', marginBottom: 20 }}>
          {isHuman ? "🛡️" : "👾"}
        </div>
        
        <h2 className="title-medium" style={{ fontSize: '2rem', marginBottom: 10 }}>
            {player.toUpperCase()}
        </h2>
        
        <div style={{ 
          background: isHuman ? 'rgba(58, 134, 255, 0.1)' : 'rgba(255, 0, 110, 0.1)',
          padding: '15px',
          borderRadius: '15px',
          marginBottom: 25,
          border: `2px dashed ${isHuman ? 'var(--blue)' : 'var(--pink)'}`
        }}>
          <p style={{ fontWeight: 800, fontSize: '1.2rem', color: isHuman ? 'var(--blue)' : 'var(--pink)' }}>
              {isHuman ? "IS A HUMAN!" : "WAS MR. WHITE!"}
          </p>
          <p style={{ fontSize: '0.9rem', marginTop: 5, fontWeight: 600 }}>
              {isHuman ? "The Imposter is still among you..." : "Mission accomplished, Humans."}
          </p>
        </div>

        <button className="btn btn-primary animate-pulse" onClick={onContinue}>
          {isHuman ? "NEXT ROUND ➜" : "SEE RESULTS ➜"}
        </button>
      </div>
    </div>
  );
}

export default EliminationResultScreen;
