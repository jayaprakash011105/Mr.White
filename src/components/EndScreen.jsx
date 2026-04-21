import React from 'react';

function EndScreen({ gameState, onRestart }) {
  const { players, roles, winner, eliminated_players, words, current_round } = gameState;
  
  const isMrWhiteWin = winner === "mrWhite";

  return (
    <div className="pop-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className={`outcome-banner ${isMrWhiteWin ? 'mrwhite-win' : 'players-win'}`} style={{ textAlign: 'center' }}>
        <span style={{ fontSize: '5rem' }}>{isMrWhiteWin ? "👾" : "🛡️"}</span>
        <h2 className="title-medium" style={{ color: 'white', fontSize: '2.5rem', marginBottom: 10 }}>
          {isMrWhiteWin ? "MR. WHITE WINS!" : "HUMANS WIN!"}
        </h2>
        <p style={{ fontWeight: 800 }}>
          {isMrWhiteWin ? "The anomaly survived and conquered!" : "Mr. White was successfully purged!"}
        </p>
      </div>

      <div className="glass-card">
        <span className="label-caps">Final Results</span>
        <div className="results-list" style={{ marginTop: 15 }}>
          {players.map(p => {
              const isEliminated = eliminated_players.includes(p);
              const role = roles[p];
              let roleColor = 'var(--blue)'; // Stable
              if (role === 'mrWhite') roleColor = 'var(--pink)';
              if (role === 'infected') roleColor = 'var(--orange)';

              return (
                <div key={p} className="result-row" style={{ opacity: isEliminated ? 0.4 : 1, padding: '12px 0', borderBottom: '2px solid var(--black)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div className="result-info">
                    <div style={{ fontWeight: 900, fontSize: '1.2rem' }}>
                        {p} {isEliminated && "💀"}
                    </div>
                    <div style={{ color: 'var(--black)', fontSize: '0.9rem', fontWeight: 700 }}>
                        WORD: {words[p]}
                    </div>
                  </div>
                  <span style={{ background: roleColor, color: 'white', padding: '4px 12px', borderRadius: '8px', border: '2px solid var(--black)', fontSize: '0.8rem', fontWeight: 900 }}>
                    {role.toUpperCase()}
                  </span>
                </div>
              );
          })}
        </div>
      </div>

      <button className="btn btn-primary" onClick={onRestart}>
        PLAY AGAIN! 🔄
      </button>
    </div>
  );
}
export default EndScreen;
