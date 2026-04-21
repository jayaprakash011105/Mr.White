import { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import SetupScreen from './components/SetupScreen';
import RevealScreen from './components/RevealScreen';
import HostControlScreen from './components/HostControlScreen';
import VotingScreen from './components/VotingScreen';
import EndScreen from './components/EndScreen';
import EliminationResultScreen from './components/EliminationResultScreen';
import SettingsModal from './components/SettingsModal';
import { wordChains, getRandomPair } from './game/words';
import RulesModal from './components/RulesModal';
import './index.css';

function App() {
  const [gameState, setGameState] = useState({
    players: [],
    roles: {}, // 'stable', 'infected', 'mrWhite'
    words: {}, // Current word for each player
    infectedChainIndexes: {}, // Tracks position in chain for infected players
    mainChainIdx: 0,
    difficulty: "medium", // 'easy', 'medium', 'hard'
    parasiteHint: "mrWhite", // 'imposter', 'category', 'mrWhite'
    currentCategory: "",
    eliminated_players: [],
    current_round: 1,
    game_status: "home", // 'home', 'setup', 'reveal', 'clue', 'voting', 'end', 'eliminated'
    winner: null, // 'mrWhite' or 'players'
    gameMode: "mutation", // 'mutation' or 'normal'
    lastEliminated: null
  });

  const [scores, setScores] = useState({ mrWhite: 0, players: 0 });
  const [isRulesOpen, setIsRulesOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [gameSettings, setGameSettings] = useState({
    revealTime: 2,
    discussionTime: 60,
    animations: true,
    highContrast: false
  });

  const updateSetting = (key, value) => {
    setGameSettings(prev => ({ ...prev, [key]: value }));
  };

  const resetSessionScores = () => {
    setScores({ mrWhite: 0, players: 0 });
  };

  /* Dynamic Background Handler */
  useEffect(() => {
    document.body.classList.remove('home-mode', 'lobby-mode', 'reveal-mode', 'discussion-mode', 'voting-mode');
    if (gameState.game_status === "home") {
      document.body.classList.add('home-mode');
    } else if (gameState.game_status === "setup") {
      document.body.classList.add('lobby-mode');
    } else if (gameState.game_status === "reveal") {
      document.body.classList.add('reveal-mode');
    } else if (gameState.game_status === "clue") {
      document.body.classList.add('discussion-mode');
    } else if (gameState.game_status === "voting") {
      document.body.classList.add('voting-mode');
    }
  }, [gameState.game_status]);

  /* Global Settings Handler */
  useEffect(() => {
    document.body.classList.toggle('high-contrast-mode', gameSettings.highContrast);
    document.body.classList.toggle('no-animations', !gameSettings.animations);
  }, [gameSettings.highContrast, gameSettings.animations]);

  const startGame = (playerNames, difficulty, parasiteHint, gameMode) => {
    const newPlayers = [...playerNames]; 
    const roles = {};
    const shuffledPlayers = [...newPlayers].sort(() => 0.5 - Math.random());
    const playerCount = newPlayers.length;

    roles[shuffledPlayers[0]] = "mrWhite";
    
    // In Normal mode, only Civilians and Mr White exist
    const numInfected = gameMode === "normal" ? 0 : (playerCount >= 6 ? 2 : 1);
    
    for (let i = 1; i <= numInfected; i++) {
        roles[shuffledPlayers[i]] = "infected";
    }
    for (let i = numInfected + 1; i < playerCount; i++) {
        roles[shuffledPlayers[i]] = "stable";
    }

    // Word assignment: PICK RELATED WORDS
    const [mainIdx, parasiteIdx] = getRandomPair(difficulty);
    const chains = wordChains[difficulty];
    const category = chains[mainIdx].cat;

    const words = {};
    const infectedChainIndexes = {};

    newPlayers.forEach(p => {
        if (roles[p] === "mrWhite") {
            if (parasiteHint === "imposter") {
                words[p] = "IMPOSTER";
            } else if (parasiteHint === "category") {
                words[p] = `CATEGORY: ${category.toUpperCase()}`;
            } else {
                words[p] = chains[parasiteIdx].items[0];
            }
        } else {
            words[p] = chains[mainIdx].items[0];
            if (roles[p] === "infected") {
                infectedChainIndexes[p] = 0;
            }
        }
    });

    setGameState({
        players: newPlayers,
        roles,
        words,
        infectedChainIndexes,
        mainChainIdx: mainIdx,
        difficulty,
        parasiteHint,
        currentCategory: category,
        eliminated_players: [],
        current_round: 1,
        game_status: "reveal",
        winner: null,
        gameMode: gameMode
    });
  };

  const advanceGameStatus = (newStatus) => {
      setGameState(prev => ({ ...prev, game_status: newStatus }));
  };

  const nextRound = () => {
    setGameState(prev => {
        const newWords = { ...prev.words };
        const newIndexes = { ...prev.infectedChainIndexes };
        const chains = wordChains[prev.difficulty];

        if (prev.gameMode === "mutation") {
            prev.players.forEach(p => {
                if (prev.roles[p] === "infected" && !prev.eliminated_players.includes(p)) {
                    const mutationChance = prev.current_round * 0.25; 
                    if (Math.random() < mutationChance) {
                        const chainLength = chains[prev.mainChainIdx].items.length;
                        if (newIndexes[p] < chainLength - 1) {
                            newIndexes[p]++;
                            newWords[p] = chains[prev.mainChainIdx].items[newIndexes[p]];
                        }
                    }
                }
            });
        }

        return {
            ...prev,
            words: newWords,
            infectedChainIndexes: newIndexes,
            current_round: prev.current_round + 1,
            game_status: "reveal"
        };
    });
  };

  const eliminatePlayer = (player) => {
      setGameState(prev => {
          const newEliminated = [...prev.eliminated_players, player];
          const activePlayersCount = prev.players.length - newEliminated.length;
          let winner = null;
          
          if (prev.roles[player] === "mrWhite") {
              // Mr White caught
              winner = "players";
              setScores(s => ({ ...s, players: s.players + 1 }));
          } else if (activePlayersCount <= 2) {
              // Too few humans left
              winner = "mrWhite";
              setScores(s => ({ ...s, mrWhite: s.mrWhite + 1 }));
          }

          return {
              ...prev,
              eliminated_players: newEliminated,
              game_status: "eliminated",
              winner,
              lastEliminated: player
          };
      });
  };

  const handleEliminationContinue = () => {
    setGameState(prev => ({
        ...prev,
        game_status: prev.winner ? "end" : "clue",
        lastEliminated: null
    }));
  };

  const restartGame = () => {
      setGameState(prev => ({ ...prev, game_status: "setup" }));
  };

  return (
    <>
      {gameState.game_status !== "home" && (
        <header className="app-header" style={{ textAlign: 'center', marginBottom: 10 }}>
           <h1 className="title-large" style={{ fontSize: '2rem' }}>MR. WHITE</h1>
        </header>
      )}

      {gameState.game_status === "home" && <IntroScreen onEnter={() => advanceGameStatus("setup")} />}
      {gameState.game_status === "setup" && <SetupScreen onStart={startGame} />}
      {gameState.game_status === "reveal" && <RevealScreen gameState={gameState} revealTime={gameSettings.revealTime} onComplete={() => advanceGameStatus("clue")} />}
      {gameState.game_status === "clue" && <HostControlScreen gameState={gameState} discussionTime={gameSettings.discussionTime} onStartVoting={() => advanceGameStatus("voting")} onNextRound={nextRound} />}
      {gameState.game_status === "voting" && <VotingScreen gameState={gameState} onVote={eliminatePlayer} onCancel={() => advanceGameStatus("clue")} />}
      {gameState.game_status === "end" && <EndScreen gameState={gameState} onRestart={restartGame} />}

      {gameState.game_status === "eliminated" && (
        <EliminationResultScreen 
          player={gameState.lastEliminated} 
          role={gameState.roles[gameState.lastEliminated]} 
          onContinue={handleEliminationContinue} 
        />
      )}

      {/* Header UI Controls */}
      {gameState.game_status === "home" && (
        <div className="header-controls">
          <button className="settings-btn" onClick={() => setIsSettingsOpen(true)} title="Settings">
            ⚙️
          </button>
          <button className="help-btn" onClick={() => setIsRulesOpen(true)} title="Rules">
            ?
          </button>
        </div>
      )}

      {/* Scoreboard - Visible during game flow but hidden on home to show settings */}
      {gameState.game_status !== "home" && (
        <div className="scoreboard">
          <div className="score-tag">⬜ {scores.mrWhite}</div>
          <div className="score-tag">👥 {scores.players}</div>
        </div>
      )}

      <RulesModal isOpen={isRulesOpen} onClose={() => setIsRulesOpen(false)} />
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        settings={gameSettings}
        onUpdate={updateSetting}
        onResetScores={resetSessionScores}
      />
    </>
  );
}

export default App;
