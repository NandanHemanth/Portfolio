import React, { useEffect, useState } from 'react';
import './JourneyLevel.css';
import { LevelData } from './GameBoard';

interface JourneyLevelProps {
  level: LevelData;
  onClose: () => void;
  onComplete: () => void;
  onBackToHome: () => void;
  isJourneyComplete: boolean;
}

const JourneyLevel: React.FC<JourneyLevelProps> = ({ level, onClose, onComplete, onBackToHome, isJourneyComplete }) => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentHighlight, setCurrentHighlight] = useState(0);

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setCurrentHighlight(prev => (prev + 1) % level.highlights.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [level.highlights.length]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(onClose, 300);
  };

  const handleComplete = () => {
    onComplete();
    handleClose();
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'education': return '#4CAF50';
      case 'work': return '#2196F3';
      case 'project': return '#FF9800';
      case 'achievement': return '#E91E63';
      default: return '#00ffff';
    }
  };

  const getTypeLabel = (type: string) => {
    switch (type) {
      case 'education': return 'EDUCATION';
      case 'work': return 'WORK EXPERIENCE';
      case 'project': return 'PROJECT';
      case 'achievement': return 'ACHIEVEMENT';
      default: return 'MILESTONE';
    }
  };

  return (
    <div className={`journey-level-overlay ${isVisible ? 'visible' : ''}`} onClick={handleClose}>
      <div className="journey-level-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={handleClose}>
          ✕
        </button>

        <div className="level-header">
          <div className="level-type-badge" style={{ borderColor: getTypeColor(level.type) }}>
            <span className="type-label">{getTypeLabel(level.type)}</span>
          </div>

          <div className="level-main-info">
            <div className="level-icon-large">{level.icon}</div>
            <div className="level-details">
              <h2 className="level-title-large">{level.title}</h2>
              <h3 className="level-subtitle-large">{level.subtitle}</h3>
              <div className="level-period-large">{level.period}</div>
            </div>
          </div>
        </div>

        <div className="level-content">
          <div className="level-description">
            <p>{level.description}</p>
          </div>

          <div className="highlights-section">
            <h4 className="section-title">Key Highlights</h4>
            <div className="highlights-container">
              {level.highlights.map((highlight, index) => (
                <div
                  key={index}
                  className={`highlight-item ${
                    index === currentHighlight ? 'active' : ''
                  }`}
                >
                  <div className="highlight-bullet">•</div>
                  <span className="highlight-text">{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {level.technologies && level.technologies.length > 0 && (
            <div className="technologies-section">
              <h4 className="section-title">Technologies & Skills</h4>
              <div className="tech-tags">
                {level.technologies.map((tech, index) => (
                  <span key={index} className="tech-tag">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          )}

          {level.links && level.links.length > 0 && (
            <div className="links-section">
              <h4 className="section-title">Related Links</h4>
              <div className="link-buttons">
                {level.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="link-button"
                  >
                    {link.label}
                    <span className="link-arrow">→</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="level-footer">
          <button className="complete-btn" onClick={handleComplete}>
            <span className="btn-text">EXPLORE COMPLETE</span>
            <div className="btn-glow"></div>
          </button>
          {isJourneyComplete && (
            <button className="back-to-home-btn" onClick={onBackToHome}>
              <span className="btn-text">← BACK TO HOME</span>
              <div className="btn-glow"></div>
            </button>
          )}
        </div>

        <div className="modal-bg-pattern">
          <div className="pattern-grid"></div>
        </div>
      </div>
    </div>
  );
};

export default JourneyLevel;