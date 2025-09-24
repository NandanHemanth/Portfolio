import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Mail, MapPin, Linkedin, Github, Award, ExternalLink } from 'lucide-react';

const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      label: 'Email',
      value: 'nhemanth@stevens.edu',
      link: 'mailto:nhemanth@stevens.edu',
      color: '#4f46e5'
    },
    {
      icon: <MapPin size={24} />,
      label: 'Location',
      value: 'Jersey City, NJ 07306, USA',
      color: '#10b981'
    },
    {
      icon: <Linkedin size={24} />,
      label: 'LinkedIn',
      value: 'Connect on LinkedIn',
      link: 'https://linkedin.com',
      color: '#0077b5'
    },
    {
      icon: <Github size={24} />,
      label: 'GitHub',
      value: 'View Projects',
      link: 'https://github.com',
      color: '#333'
    }
  ];

  const achievements = [
    {
      title: 'AWS Educate Certified: Cloud Learning 101',
      type: 'Certification',
      icon: '☁️'
    },
    {
      title: '1st place in Solo Track & AI Track',
      subtitle: 'HackRU (MLH @ Rutgers, 2025)',
      type: 'Award',
      icon: '🥇'
    },
    {
      title: '2nd place',
      subtitle: 'British Telecom Hackathon (2023)',
      type: 'Award',
      icon: '🥈'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="contact-section"
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
          Let's Connect
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px', alignItems: 'start' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#4f46e5' }}>
              Get in Touch
            </h3>

            <p style={{ fontSize: '1.2rem', lineHeight: '1.8', marginBottom: '40px', opacity: 0.9 }}>
              I'm always interested in discussing new opportunities, innovative projects,
              and collaborations in Machine Learning, AI, and emerging technologies.
            </p>

            <div style={{ display: 'grid', gap: '25px' }}>
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    padding: '20px',
                    background: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)',
                    cursor: info.link ? 'pointer' : 'default'
                  }}
                  onClick={() => info.link && window.open(info.link, '_blank')}
                >
                  <div style={{ color: info.color, marginRight: '20px' }}>
                    {info.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: '0.9rem', color: 'rgba(255, 255, 255, 0.7)', marginBottom: '5px' }}>
                      {info.label}
                    </div>
                    <div style={{ fontSize: '1.1rem', color: 'white' }}>
                      {info.value}
                    </div>
                  </div>
                  {info.link && (
                    <ExternalLink size={16} style={{ marginLeft: 'auto', color: 'rgba(255, 255, 255, 0.5)' }} />
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2.2rem', marginBottom: '30px', color: '#4f46e5' }}>
              Certifications & Awards
            </h3>

            <div style={{ display: 'grid', gap: '20px', marginBottom: '40px' }}>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  style={{
                    padding: '25px',
                    background: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '16px',
                    border: '1px solid rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: '15px' }}>
                    <div style={{ fontSize: '2rem' }}>
                      {achievement.icon}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px' }}>
                        <Award size={16} style={{ color: '#f59e0b', marginRight: '8px' }} />
                        <span style={{
                          background: 'rgba(245, 158, 11, 0.2)',
                          color: '#f59e0b',
                          padding: '4px 10px',
                          borderRadius: '12px',
                          fontSize: '0.8rem',
                          border: '1px solid rgba(245, 158, 11, 0.3)'
                        }}>
                          {achievement.type}
                        </span>
                      </div>
                      <h4 style={{ fontSize: '1.2rem', color: 'white', marginBottom: '5px' }}>
                        {achievement.title}
                      </h4>
                      {achievement.subtitle && (
                        <p style={{ fontSize: '0.95rem', color: 'rgba(255, 255, 255, 0.7)', margin: 0 }}>
                          {achievement.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.2, duration: 0.8 }}
              style={{
                textAlign: 'center',
                padding: '30px',
                background: 'rgba(79, 70, 229, 0.1)',
                backdropFilter: 'blur(10px)',
                borderRadius: '20px',
                border: '1px solid rgba(79, 70, 229, 0.3)'
              }}
            >
              <h4 style={{ fontSize: '1.5rem', color: '#4f46e5', marginBottom: '15px' }}>
                Ready to Innovate?
              </h4>
              <p style={{ fontSize: '1rem', opacity: 0.9, marginBottom: '25px' }}>
                Let's build the next generation of AI solutions together.
              </p>

              <motion.button
                whileHover={{ scale: 1.05, boxShadow: '0 10px 30px rgba(79, 70, 229, 0.4)' }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)',
                  color: 'white',
                  border: 'none',
                  padding: '15px 30px',
                  borderRadius: '50px',
                  fontSize: '1.1rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  boxShadow: '0 5px 15px rgba(79, 70, 229, 0.3)'
                }}
                onClick={() => window.open('mailto:nhemanth@stevens.edu', '_blank')}
              >
                Start the Conversation →
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 1.5, duration: 0.8 }}
          style={{
            textAlign: 'center',
            marginTop: '80px',
            paddingTop: '40px',
            borderTop: '1px solid rgba(255, 255, 255, 0.1)'
          }}
        >
          <p style={{ fontSize: '1rem', opacity: 0.7 }}>
            © 2025 Nandan Hemanth. Crafted with React, Three.js & Framer Motion.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;