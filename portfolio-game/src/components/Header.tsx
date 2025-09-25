import React from 'react';
import './Header.css';

const Header: React.FC = () => {
  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = '/NandanHemanth_Resume.pdf';
    link.download = 'NandanHemanth_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <header className="game-header">
      <div className="header-content">
        <div className="player-info">
          <h1 className="player-name">NANDAN HEMANTH</h1>
          <p className="player-title">ML ENGINEER</p>
        </div>

        <nav className="action-bar">
          <button
            className="action-btn resume-btn"
            onClick={handleDownloadResume}
            title="Download Resume"
          >
            <i className="icon-download"></i>
            RESUME
          </button>

          <a
            href="https://github.com/NandanHemanth"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn github-btn"
            title="View GitHub"
          >
            <i className="icon-github"></i>
            GITHUB
          </a>

          <a
            href="https://www.linkedin.com/in/nandan-hemanth-a784811b8/"
            target="_blank"
            rel="noopener noreferrer"
            className="action-btn linkedin-btn"
            title="View LinkedIn"
          >
            <i className="icon-linkedin"></i>
            LINKEDIN
          </a>
        </nav>
      </div>

      <div className="header-glow"></div>
    </header>
  );
};

export default Header;