import { useState, useEffect } from 'react';

const PSYCH_LINES = [
  "Are you sure your word didn't change?",
  "Someone lied in the last round. Can you feel it?",
  "Your memory might be compromised.",
  "Mr. White is listening. Choose your clue carefully.",
  "Trust no one — not even yourself.",
  "Did your clue give too much away?",
  "The Infected don't know they've changed.",
];

function HostControlScreen({ gameState, discussionTime, onStartVoting, onNextRound }) {
  const { players, eliminated_players, current_round } = gameState;
  const activePlayers = players.filter(p => !eliminated_players.includes(p));
  const [psychLine, setPsychLine] = useState(PSYCH_LINES[0]);
  const [timeLeft, setTimeLeft] = useState(discussionTime);

  useEffect(() => {
    const line = PSYCH_LINES[Math.floor(Math.random() * PSYCH_LINES.length)];
    setPsychLine(line);
    setTimeLeft(discussionTime); // Reset timer each round
  }, [current_round]);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const interval = setInterval(() => {
      setTimeLeft(t => Math.max(0, t - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  return (
    <div className="pop-in">
      <div className="glass-card" style={{ transform: 'none', display: 'flex', flexDirection: 'column', gap: 20, padding: '35px 25px' }}>
        
        {/* Unified Header */}
        <div style={{ textAlign: 'center', marginBottom: 5 }}>
          <span className="label-caps" style={{ background: 'var(--orange)', color: 'var(--white)' }}>Step 3: Discussion</span>
          <h1 className="title-large" style={{ fontSize: '3.5rem', margin: '15px 0', color: 'var(--black)', filter: 'none', WebkitTextStroke: '0' }}>ROUND {current_round}</h1>
          <div style={{ display: 'inline-block', background: 'rgba(131, 56, 236, 0.1)', padding: '8px 20px', borderRadius: '99px', border: '2px solid var(--purple)' }}>
            <p style={{ color: 'var(--purple)', fontWeight: 800, fontSize: '0.95rem', margin: 0 }}>
              🕯️ {psychLine}
            </p>
          </div>
        </div>

        {/* Players Section */}
        <div style={{ borderTop: '3px solid var(--black)', borderBottom: '3px solid var(--black)', padding: '20px 0' }}>
          <p style={{ fontSize: '0.75rem', fontWeight: 900, marginBottom: 12, textAlign: 'center', letterSpacing: 1, opacity: 0.6 }}>ACTIVE RECRUITS ({activePlayers.length})</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, justifyContent: 'center' }}>
            {activePlayers.map(p => (
              <div key={p} className="player-bubble" style={{ background: 'var(--yellow)', fontSize: '0.85rem' }}>{p}</div>
            ))}
          </div>
        </div>

        {/* Instructions */}
        <div>
          <h3 style={{ 
            fontFamily: 'Outfit, sans-serif', 
            fontWeight: 900, 
            fontSize: '1.3rem', 
            marginBottom: 10, 
            display: 'flex', 
            alignItems: 'center', 
            gap: 10,
            color: 'var(--black)'
          }}>
            🎙️ THE RIDDLE PHASE
          </h3>
          <p style={{ fontWeight: 600, marginBottom: 15, lineHeight: 1.5, fontSize: '0.95rem', color: 'rgba(0,0,0,0.7)' }}>
            Each player must say <b>one word</b> as a clue to their secret word. 
            Keep it mysterious! If you're too obvious, Mr. White will catch on.
          </p>

          {gameState.gameMode === 'mutation' && (
            <div style={{
              background: 'var(--yellow)',
              border: '3px solid var(--black)',
              borderRadius: 16,
              padding: '12px 18px',
              display: 'flex',
              gap: 12,
              alignItems: 'center',
              boxShadow: '4px 4px 0 var(--black)'
            }}>
              <span style={{ fontSize: '1.6rem' }}>⚠️</span>
              <div>
                <p style={{ fontWeight: 900, fontSize: '0.8rem' }}>MUTATION ALERT</p>
                <p style={{ fontWeight: 600, fontSize: '0.75rem', marginTop: 1, opacity: 0.8 }}>
                  Next round may secretly shift words for Infected players!
                </p>
              </div>
            </div>
          )}
          
          {gameState.gameMode === 'normal' && (
            <div style={{
              background: 'rgba(131, 56, 236, 0.1)',
              border: '3px solid var(--purple)',
              borderRadius: 16,
              padding: '12px 18px',
              display: 'flex',
              gap: 12,
              alignItems: 'center',
            }}>
              <span style={{ fontSize: '1.6rem' }}>👤</span>
              <div>
                <p style={{ fontWeight: 900, fontSize: '0.8rem', color: 'var(--purple)' }}>STABLE MODE</p>
                <p style={{ fontWeight: 600, fontSize: '0.75rem', marginTop: 1, opacity: 0.8, color: 'var(--purple)' }}>
                  Words remain locked for the entire session. No shifts.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Timer Feature */}
        <div style={{ marginTop: 5 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>
            <span style={{ fontSize: '0.8rem', fontWeight: 900, color: 'var(--black)', opacity: 0.7 }}>TIME TO CLUE</span>
            <span style={{ 
              fontSize: '1.1rem', 
              fontWeight: 900, 
              color: timeLeft < 10 ? 'var(--pink)' : 'var(--blue)',
              animation: timeLeft < 10 ? 'pop 0.5s infinite alternate' : 'none'
            }}>
              00:{timeLeft < 10 ? `0${timeLeft}` : timeLeft} ⏱️
            </span>
          </div>
          <div className="timer-bar-wrap">
            <div className="timer-bar" style={{ 
              width: `${(timeLeft / discussionTime) * 100}%`,
              backgroundColor: timeLeft < 10 ? 'var(--pink)' : 'var(--blue)' 
            }}></div>
          </div>
        </div>

        {/* Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 15, marginTop: 10 }}>
          <button className="btn btn-primary" onClick={onNextRound} style={{ padding: '18px 5px', fontSize: '1rem' }}>
            🌀 NEXT ROUND
          </button>
          <button className="btn btn-danger" onClick={onStartVoting} style={{ padding: '18px 5px', fontSize: '1rem' }}>
            🗳️ VOTE NOW
          </button>
        </div>

      </div>
    </div>
  );
}

export default HostControlScreen;
