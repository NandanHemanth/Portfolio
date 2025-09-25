import React, { useState, useEffect } from 'react';
import './GameBoard.css';
import JourneyLevel from './JourneyLevel';

interface GameBoardProps {
  currentLevel: number;
  setCurrentLevel: (level: number) => void;
  onBackToHome: () => void;
}

export interface LevelData {
  id: number;
  title: string;
  subtitle: string;
  period: string;
  type: 'education' | 'work' | 'project' | 'achievement';
  icon: string;
  description: string;
  highlights: string[];
  technologies?: string[];
  links?: { label: string; url: string }[];
  unlocked: boolean;
  completed: boolean;
}

const GameBoard: React.FC<GameBoardProps> = ({ currentLevel, setCurrentLevel, onBackToHome }) => {
  const [unlockedLevels, setUnlockedLevels] = useState<number[]>([0]);
  const [selectedLevel, setSelectedLevel] = useState<number | null>(null);

  const levels: LevelData[] = [
    {
      id: 0,
      title: "The Beginning",
      subtitle: "Bachelor's Journey Starts",
      period: "2020 - 2024",
      type: "education",
      icon: "🎓",
      description: "Started the journey at PES University, focusing on Computer Science with Machine Learning & Data Science specialization.",
      highlights: [
        "Graduated with B.Tech in CS Engineering (ML & Data Science)",
        "Built strong foundation in algorithms and mathematics",
        "Discovered passion for AI and machine learning"
      ],
      unlocked: true,
      completed: true
    },
    {
      id: 1,
      title: "First Deep Dive",
      subtitle: "DRDO Internship",
      period: "Jun 2023 - Jul 2023",
      type: "work",
      icon: "🚀",
      description: "Deep Learning Intern at Centre for Airborne Systems (CABS), DRDO - developed WANI, an offline multilingual Text-to-Speech Transformer.",
      highlights: [
        "Developed WANI - offline multilingual TTS system",
        "Worked with Transformers for speech synthesis",
        "Achieved expressive, emotionally nuanced output",
        "Optimized for resource-constrained environments"
      ],
      technologies: ["Python", "Transformers", "Deep Learning", "TTS", "PyTorch"],
      unlocked: false,
      completed: false
    },
    {
      id: 2,
      title: "Capstone Achievement",
      subtitle: "Blabber - Call Translator",
      period: "Feb 2023 - Dec 2023",
      type: "project",
      icon: "🌐",
      description: "Built a real-time bi-directional call translation system supporting 200+ languages with adaptive voice cloning.",
      highlights: [
        "Real-time translation for 200+ languages",
        "High-fidelity vocoder implementation",
        "Adaptive voice cloning technology",
        "6-8 seconds latency optimization",
        "Published in IEEE conference"
      ],
      technologies: ["Transformers", "Voice Cloning", "Real-time Processing", "Python", "AI"],
      links: [
        { label: "IEEE Publication", url: "#" }
      ],
      unlocked: false,
      completed: false
    },
    {
      id: 3,
      title: "Full-Stack Evolution",
      subtitle: "Boltcode Development",
      period: "Mar 2024 - Apr 2024",
      type: "work",
      icon: "💻",
      description: "Full-Stack Developer role building React front-end infrastructure and contributing to back-end services.",
      highlights: [
        "Built front-end infrastructure in React",
        "Contributed to back-end services",
        "Implemented comprehensive testing",
        "Optimized web performance",
        "Ensured seamless integration"
      ],
      technologies: ["React", "JavaScript", "Backend Development", "Testing", "Web Optimization"],
      unlocked: false,
      completed: false
    },
    {
      id: 4,
      title: "AI Pipeline Mastery",
      subtitle: "Channel-AI Internship",
      period: "May 2024 - Jun 2024",
      type: "work",
      icon: "🔄",
      description: "ML Intern developing AI-driven pipelines using LangChain for automated business news collection and RAG systems.",
      highlights: [
        "Engineered AI-driven pipeline with LangChain",
        "Automated business news collection",
        "Implemented vector database storage",
        "Built RAG (Retrieval-Augmented Generation) system",
        "Web scraping and data processing"
      ],
      technologies: ["LangChain", "Python", "Vector Databases", "RAG", "Web Scraping", "AI Agents"],
      unlocked: false,
      completed: false
    },
    {
      id: 5,
      title: "Graduate Level Up",
      subtitle: "Stevens Institute",
      period: "Aug 2024 - Present",
      type: "education",
      icon: "🏛️",
      description: "Currently pursuing Master's in Applied Artificial Intelligence, working as Research Assistant on AI-powered career platforms.",
      highlights: [
        "MS in Applied Artificial Intelligence",
        "Research/Graduate Assistant role",
        "Working on AI-powered career platform",
        "Mentoring hackathons and initiatives",
        "Contributing to podcasts and accessibility"
      ],
      technologies: ["AI Research", "Career Platforms", "Mentoring", "Academic Research"],
      unlocked: false,
      completed: false
    },
    {
      id: 6,
      title: "Hackathon Champion",
      subtitle: "MacroMind & Flexa Victories",
      period: "Feb 2025 - Mar 2025",
      type: "achievement",
      icon: "🏆",
      description: "Won 1st place in multiple tracks with innovative AI applications for fitness and payments.",
      highlights: [
        "MacroMind: AI fitness platform with MediaPipe",
        "Real-time posture analysis using Computer Vision",
        "Flexa: AI-powered bill splitting with Stripe & Solana",
        "1st place in two tracks at HackRU 2025",
        "Combined AI, blockchain, and computer vision"
      ],
      technologies: ["MediaPipe", "Computer Vision", "AI", "Stripe", "Solana", "React", "Blockchain"],
      links: [
        { label: "MacroMind Demo", url: "#" },
        { label: "Flexa Demo", url: "#" }
      ],
      unlocked: false,
      completed: false
    },
    {
      id: 7,
      title: "Research Frontier",
      subtitle: "Master's Thesis",
      period: "In Progress - Dec 2025",
      type: "achievement",
      icon: "📚",
      description: "Currently working on 'Teacher to Student Knowledge Transfer in LLMs' under Prof. Hao Wang's supervision.",
      highlights: [
        "Advanced research in LLM knowledge transfer",
        "Supervised by Prof. Hao Wang at Stevens",
        "Exploring teacher-student learning paradigms",
        "Contributing to AI education methodology",
        "Expected completion: December 2025"
      ],
      technologies: ["LLMs", "Knowledge Transfer", "Research", "Academic Writing", "AI Education"],
      unlocked: false,
      completed: false
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => {
      if (unlockedLevels.length < levels.length) {
        setUnlockedLevels(prev => [...prev, prev.length]);
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [unlockedLevels.length, levels.length]);

  const handleLevelClick = (levelId: number) => {
    if (unlockedLevels.includes(levelId)) {
      setSelectedLevel(levelId);
      setCurrentLevel(levelId);
    }
  };

  const handleCloseLevel = () => {
    setSelectedLevel(null);
  };

  const getProgressPercentage = () => {
    return (unlockedLevels.length / levels.length) * 100;
  };

  return (
    <div className="game-board">
      <div className="progress-container">
        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: `${getProgressPercentage()}%` }}
          ></div>
        </div>
        <div className="progress-text">
          Journey Progress: {unlockedLevels.length}/{levels.length} Milestones Unlocked
        </div>
      </div>

      <div className="journey-map">
        <div className="journey-path">
          {levels.map((level, index) => (
            <div key={level.id} className="level-container">
              <div
                className={`level-node ${level.type} ${
                  unlockedLevels.includes(level.id) ? 'unlocked' : 'locked'
                } ${selectedLevel === level.id ? 'selected' : ''}`}
                onClick={() => handleLevelClick(level.id)}
              >
                <div className="level-icon">{level.icon}</div>
                <div className="level-info">
                  <h3 className="level-title">{level.title}</h3>
                  <p className="level-subtitle">{level.subtitle}</p>
                  <span className="level-period">{level.period}</span>
                </div>
                {!unlockedLevels.includes(level.id) && (
                  <div className="lock-overlay">
                    <span className="lock-icon">🔒</span>
                  </div>
                )}
              </div>

              {index < levels.length - 1 && (
                <div className={`journey-connector ${
                  unlockedLevels.includes(level.id + 1) ? 'unlocked' : 'locked'
                }`}></div>
              )}
            </div>
          ))}
        </div>
      </div>

      {selectedLevel !== null && (
        <JourneyLevel
          level={levels[selectedLevel]}
          onClose={handleCloseLevel}
          onComplete={() => {
            const updatedLevels = [...levels];
            updatedLevels[selectedLevel].completed = true;
          }}
          onBackToHome={onBackToHome}
          isJourneyComplete={unlockedLevels.length === levels.length}
        />
      )}
    </div>
  );
};

export default GameBoard;