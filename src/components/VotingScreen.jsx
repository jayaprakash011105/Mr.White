import { useState } from 'react';

function VotingScreen({ gameState, onVote, onCancel }) {
  const { players, eliminated_players, current_round } = gameState;
  const activePlayers = players.filter(p => !eliminated_players.includes(p));
  const [selected, setSelected] = useState(null);
  const [confirming, setConfirming] = useState(false);

  const handleConfirm = () => {
    if (!selected) return;
    if (!confirming) {
      setConfirming(true);
      return;
    }
    onVote(selected);
  };

  return (
    <div className="pop-in" style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
      <div className="glass-card" style={{ textAlign: 'center' }}>
        <span className="label-caps" style={{ background: 'var(--pink)' }}>Step 4: The Vote</span>
        <h2 className="title-large" style={{ fontSize: '2rem', marginTop: 15 }}>WHO IS MR. WHITE? 🕵️‍♂️</h2>
        <p style={{ fontWeight: 600, marginTop: 10 }}>
          Discuss with the group. When you're ready, pick a suspect!
        </p>
      </div>

      <div className="glass-card">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 15 }}>
          <span className="label-caps">The Suspects</span>
        </div>
        
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {activePlayers.map((p, i) => (
            <div
              key={p}
              className={`player-vote-card stagger-item stagger-${(i % 5) + 1} ${selected === p ? 'selected' : ''}`}
              onClick={() => { setSelected(p); setConfirming(false); }}
              style={{ cursor: 'pointer' }}
            >
              <span style={{ fontSize: '1.1rem' }}>{p}</span>
              <div style={{ width: 24, height: 24, borderRadius: '50%', border: '3px solid var(--black)', background: selected === p ? 'var(--pink)' : 'white' }} />
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', gap: 12 }}>
        <button className="btn btn-white" style={{ flex: 1 }} onClick={onCancel}>
          BACK
        </button>
        <button
          className={`btn btn-danger ${!selected ? 'btn-disabled' : ''}`}
          style={{ flex: 2 }}
          onClick={handleConfirm}
        >
          {confirming ? `CONFIRM ${selected}! ✅` : 'VOTE OUT! 🗳️'}
        </button>
      </div>
    </div>
  );
}

export default VotingScreen;
