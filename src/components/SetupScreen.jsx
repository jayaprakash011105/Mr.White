import { useState } from 'react';

function SetupScreen({ onStart }) {
  const [name, setName] = useState('');
  const [players, setPlayers] = useState([]);
  const [difficulty, setDifficulty] = useState('medium');
  const [mrWhiteHint, setMrWhiteHint] = useState('mrWhite');

  const addPlayer = () => {
    const trimmed = name.trim();
    if (trimmed && players.length < 10 && !players.includes(trimmed)) {
      setPlayers([...players, trimmed]);
      setName('');
    }
  };

  const removePlayer = (playerName) => {
    setPlayers(players.filter(p => p !== playerName));
  };

  const handleStart = () => {
    if (players.length >= 4) {
      onStart(players, difficulty, mrWhiteHint);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') addPlayer();
  };

  return (
    <div className="pop-in" style={{ display: 'flex', flexDirection: 'column', gap: 15 }}>
      <div className="glass-card" style={{ padding: '30px 25px' }}>
        <span className="label-caps">LOBBY TERMINAL 🖋️</span>
        <h2 className="title-medium" style={{ fontSize: '1.8rem', marginBottom: 20 }}>Session Config</h2>
        
        {/* Config Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginBottom: 25 }}>
          {/* Difficulty Block */}
          <div style={{ background: 'rgba(0,0,0,0.03)', padding: 15, borderRadius: 18, border: '3px solid var(--black)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 900, marginBottom: 10, textAlign: 'center', letterSpacing: 1, color: 'var(--black)' }}>DIFFICULTY</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {['easy', 'medium', 'hard'].map(level => (
                <button
                  key={level}
                  className={`btn ${difficulty === level ? 'btn-secondary' : 'btn-white'}`}
                  style={{ padding: '10px', fontSize: '0.8rem', border: '2px solid var(--black)', borderRadius: 12 }}
                  onClick={() => setDifficulty(level)}
                >
                  {level.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          {/* Parasite Hint Block */}
          <div style={{ background: 'rgba(0,0,0,0.03)', padding: 15, borderRadius: 18, border: '3px solid var(--black)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.05)' }}>
            <p style={{ fontSize: '0.75rem', fontWeight: 900, marginBottom: 10, textAlign: 'center', letterSpacing: 1, color: 'var(--black)' }}>PARASITE HINT</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {[
                { key: 'imposter', label: 'IMPOSTER' },
                { key: 'category', label: 'CATEGORY' },
                { key: 'mrWhite', label: 'RELATED' },
              ].map(opt => (
                <button
                  key={opt.key}
                  className={`btn ${mrWhiteHint === opt.key ? 'btn-danger' : 'btn-white'}`}
                  style={{ padding: '10px', fontSize: '0.8rem', border: '2px solid var(--black)', borderRadius: 12 }}
                  onClick={() => setMrWhiteHint(opt.key)}
                >
                  {opt.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Player Input Area */}
        <div style={{ background: 'var(--yellow)', padding: '20px', borderRadius: '20px', border: '3px solid var(--black)', marginBottom: 20 }}>
          <p style={{ fontSize: '0.85rem', fontWeight: 800, marginBottom: 12 }}>JOIN THE SESSION ({players.length}/10)</p>
          <div style={{ display: 'flex', gap: 10 }}>
            <input 
              type="text" 
              className="input-field"
              placeholder="Enter name..." 
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyPress={handleKeyPress}
              style={{ marginBottom: 0, padding: '15px', fontSize: '1rem', borderRadius: 12 }}
            />
            <button 
              className="btn btn-secondary" 
              style={{ width: 'auto', padding: '0 20px', border: '3px solid var(--black)' }}
              onClick={addPlayer}
              disabled={!name.trim() || players.length >= 10}
            >
              ADD
            </button>
          </div>
        </div>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 10, minHeight: '60px', padding: '10px 5px' }}>
          {players.length === 0 && (
            <p style={{ opacity: 0.5, fontStyle: 'italic', fontSize: '0.9rem' }}>Waiting for recruits...</p>
          )}
          {players.map(p => (
            <div key={p} className="player-bubble" style={{ fontSize: '1rem', padding: '8px 16px' }}>
              {p}
              <button 
                className="remove-btn" 
                onClick={() => removePlayer(p)} 
                style={{ border: 'none', background: 'none', marginLeft: 8, fontWeight: 900, cursor: 'pointer', fontSize: '1.2rem', color: 'inherit' }}
              >
                ×
              </button>
            </div>
          ))}
        </div>
      </div>
      
      <div style={{ textAlign: 'center', marginTop: 10 }}>
        <button 
           className={`btn btn-primary ${players.length < 4 ? 'btn-disabled' : ''}`}
           onClick={handleStart}
           disabled={players.length < 4}
           style={{ width: '100%', fontSize: '1.4rem', padding: '25px' }}
        >
          {players.length < 4 ? `WAITING FOR ${4 - players.length} MORE...` : 'START GAME 🚀'}
        </button>
        {players.length >= 4 && (
          <p style={{ marginTop: 15, fontSize: '0.85rem', fontWeight: 600, color: 'var(--white)', opacity: 0.8 }}>
            Ready to identify the imposter?
          </p>
        )}
      </div>
    </div>
  );
}

export default SetupScreen;
