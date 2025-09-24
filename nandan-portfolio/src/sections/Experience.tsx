import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Calendar, MapPin, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const experiences = [
    {
      title: 'Research/Graduate Assistant',
      company: 'Stevens College of Professional Education',
      location: 'Jersey City, NJ',
      period: 'Nov 2024 – Present',
      highlights: [
        'Working on an AI-powered career platform for corporate companies',
        'Front-desk engagement with alumni, students, and staff',
        'Mentored and organized CPE\'s flagship hackathon',
        'Contributing to podcasts and accessibility initiatives'
      ],
      color: '#4f46e5'
    },
    {
      title: 'Machine Learning Intern',
      company: 'Channel-AI',
      location: 'Remote',
      period: 'May 2024 – Jun 2024',
      highlights: [
        'Engineered AI-driven pipeline leveraging LangChain\'s agent framework',
        'Automated collection and storage of business news in vector database',
        'Implemented RAG system for intelligent information retrieval',
        'Developed web scrapers for real-time data collection'
      ],
      color: '#06b6d4'
    },
    {
      title: 'Full-Stack Developer',
      company: 'Boltcode Private Limited',
      location: 'Bangalore, India',
      period: 'Mar 2024 – Apr 2024',
      highlights: [
        'Built front-end infrastructure using React',
        'Contributed to back-end services development',
        'Implemented testing and code optimizations',
        'Achieved seamless integration and improved web performance'
      ],
      color: '#10b981'
    },
    {
      title: 'Deep Learning Intern',
      company: 'Centre for Airborne Systems (CABS), DRDO',
      location: 'Bangalore, India',
      period: 'Jun 2023 – Jul 2023',
      highlights: [
        'Developed WANI: offline multilingual Text-to-Speech Transformer',
        'Optimized for resource-constrained environments',
        'Conducted rigorous experimentation for speech synthesis',
        'Achieved expressive, emotionally nuanced speech output'
      ],
      color: '#f59e0b'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="experience-section"
      style={{
        padding: '100px 50px',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 100%)',
        color: 'white'
      }}
    >
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '80px',
            color: 'white',
            fontWeight: 'bold'
          }}
        >
          Professional Journey
        </motion.h2>

        <div style={{ position: 'relative' }}>
          <div
            style={{
              position: 'absolute',
              left: '50%',
              top: 0,
              bottom: 0,
              width: '4px',
              background: 'linear-gradient(to bottom, #4f46e5, #06b6d4, #10b981, #f59e0b)',
              borderRadius: '2px',
              transform: 'translateX(-50%)'
            }}
          />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ delay: index * 0.3, duration: 0.8 }}
              style={{
                display: 'flex',
                alignItems: 'center',
                marginBottom: '60px',
                position: 'relative',
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse'
              }}
            >
              <div
                style={{
                  width: '45%',
                  padding: '30px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  borderRadius: '16px',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                  <Briefcase size={24} style={{ color: exp.color, marginRight: '10px' }} />
                  <h3 style={{ fontSize: '1.8rem', color: exp.color, margin: 0 }}>
                    {exp.title}
                  </h3>
                </div>

                <h4 style={{ fontSize: '1.4rem', color: 'white', marginBottom: '10px' }}>
                  {exp.company}
                </h4>

                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px', opacity: 0.8 }}>
                  <MapPin size={16} style={{ marginRight: '8px' }} />
                  <span style={{ marginRight: '20px' }}>{exp.location}</span>
                  <Calendar size={16} style={{ marginRight: '8px' }} />
                  <span>{exp.period}</span>
                </div>

                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {exp.highlights.map((highlight, idx) => (
                    <motion.li
                      key={idx}
                      initial={{ opacity: 0, x: -20 }}
                      animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                      transition={{ delay: index * 0.3 + 0.5 + idx * 0.1, duration: 0.6 }}
                      style={{
                        marginBottom: '8px',
                        paddingLeft: '20px',
                        position: 'relative',
                        fontSize: '1rem',
                        lineHeight: '1.6'
                      }}
                    >
                      <div
                        style={{
                          position: 'absolute',
                          left: 0,
                          top: '12px',
                          width: '6px',
                          height: '6px',
                          background: exp.color,
                          borderRadius: '50%'
                        }}
                      />
                      {highlight}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <div
                style={{
                  position: 'absolute',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: '20px',
                  height: '20px',
                  background: exp.color,
                  borderRadius: '50%',
                  border: '4px solid rgba(26, 26, 46, 1)',
                  zIndex: 2
                }}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Experience;