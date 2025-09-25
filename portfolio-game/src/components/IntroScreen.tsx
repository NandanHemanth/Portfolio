import React, { useState, useEffect } from 'react';
import './IntroScreen.css';

interface IntroScreenProps {
  onStartGame: () => void;
}

const IntroScreen: React.FC<IntroScreenProps> = ({ onStartGame }) => {
  const [textIndex, setTextIndex] = useState(0);
  const [showStart, setShowStart] = useState(false);

  const introTexts = [
    "Welcome to the ML Engineer's Journey",
    "Experience the career path of Nandan Hemanth",
    "Navigate through internships, projects, and achievements",
    "Unlock the story behind each breakthrough..."
  ];

  useEffect(() => {
    if (textIndex < introTexts.length - 1) {
      const timer = setTimeout(() => {
        setTextIndex(textIndex + 1);
      }, 2500);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        setShowStart(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [textIndex, introTexts.length]);

  return (
    <div className="intro-screen">
      <div className="intro-background">
        <div className="neural-network">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className={`node node-${i}`}></div>
          ))}
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className={`connection connection-${i}`}></div>
          ))}
        </div>
      </div>

      <div className="intro-content">
        <div className="game-title">
          <h1>ML JOURNEY</h1>
          <div className="title-glow"></div>
        </div>

        <div className="intro-text-container">
          {introTexts.map((text, index) => (
            <p
              key={index}
              className={`intro-text ${
                index === textIndex ? 'active' : index < textIndex ? 'completed' : 'pending'
              }`}
            >
              {text}
            </p>
          ))}
        </div>

        <div className="player-stats">
          <div className="stat">
            <span className="stat-label">LEVEL</span>
            <span className="stat-value">Graduate Student</span>
          </div>
          <div className="stat">
            <span className="stat-label">SPECIALIZATION</span>
            <span className="stat-value">Deep Learning & AI</span>
          </div>
          <div className="stat">
            <span className="stat-label">EXPERIENCE</span>
            <span className="stat-value">4+ Projects</span>
          </div>
        </div>

        {showStart && (
          <button className="start-game-btn" onClick={onStartGame}>
            <span className="btn-text">START JOURNEY</span>
            <div className="btn-glow"></div>
          </button>
        )}
      </div>

      <div className="scroll-indicator">
        <div className="scroll-text">Ready to explore?</div>
        <div className="scroll-arrow">▼</div>
      </div>
    </div>
  );
};

export default IntroScreen;