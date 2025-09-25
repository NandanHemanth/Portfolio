import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import GameBoard from './components/GameBoard';
import IntroScreen from './components/IntroScreen';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [currentLevel, setCurrentLevel] = useState(0);

  const handleBackToHome = () => {
    setGameStarted(false);
    setCurrentLevel(0);
  };

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Rajdhani:wght@300;400;500;600;700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  return (
    <div className="App">
      <Header />
      {!gameStarted ? (
        <IntroScreen onStartGame={() => setGameStarted(true)} />
      ) : (
        <GameBoard
          currentLevel={currentLevel}
          setCurrentLevel={setCurrentLevel}
          onBackToHome={handleBackToHome}
        />
      )}
    </div>
  );
}

export default App;
