import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github, Calendar } from 'lucide-react';

const Projects: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const projects = [
    {
      title: 'MacroMind – Lifestyle SuperApp',
      period: 'Feb 2025',
      description: 'AI fitness platform using MediaPipe and Computer Vision for real-time posture analysis with personalized meal planning and curated shopping lists.',
      technologies: ['MediaPipe', 'Computer Vision', 'AI', 'React', 'Python'],
      achievements: ['🏆 1st place in two tracks at MLH HackRU 2025'],
      github: 'https://github.com',
      demo: 'https://macromind.demo',
      gradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
    },
    {
      title: 'Flexa – Secure AI Bill-Splitting',
      period: 'Mar 2025',
      description: 'Reimagined Splitwise with AI-powered image-based bill parsing, smart splitting algorithms, integrated Stripe payments, and secure Solana blockchain transactions.',
      technologies: ['AI/ML', 'Computer Vision', 'Stripe API', 'Solana', 'Blockchain'],
      achievements: ['💡 Innovation in FinTech AI'],
      github: 'https://github.com',
      demo: 'https://flexa.demo',
      gradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)'
    },
    {
      title: 'Blabber – Call Translator with Voice Cloning',
      period: 'Feb 2023 – Dec 2023',
      description: 'Real-time, bi-directional call translation supporting 200+ languages with high-fidelity vocoder and adaptive voice cloning that improves over time.',
      technologies: ['Transformers', 'NLP', 'Voice Synthesis', 'Real-time Processing'],
      achievements: [
        '📄 IEEE Publication - "Call Translator with Voice Cloning Using Transformers"',
        '⚡ 6-8 seconds typical latency buffer',
        '🎓 Capstone Project'
      ],
      github: 'https://github.com',
      paper: 'https://ieeexplore.ieee.org',
      gradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)'
    },
    {
      title: 'WANI – Multilingual Text-to-Speech',
      period: 'Jun 2023 – Jul 2023',
      description: 'Offline multilingual Text-to-Speech Transformer optimized for resource-constrained environments with expressive, emotionally nuanced speech synthesis.',
      technologies: ['Transformers', 'Deep Learning', 'Speech Synthesis', 'PyTorch'],
      achievements: [
        '🏢 Developed at DRDO (Defence Research)',
        '🌍 Multilingual support',
        '📱 Resource-constrained optimization'
      ],
      github: 'https://github.com',
      gradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)'
    }
  ];

  const publications = [
    {
      title: '"Call Translator with Voice Cloning Using Transformers"',
      venue: 'IEEE 9th International Conference for Convergence in Technology',
      location: 'India',
      date: 'Apr 5–7, 2024',
      type: 'Co-author'
    },
    {
      title: '"Teacher to Student Knowledge Transfer in LLMs"',
      venue: 'Master\'s Thesis (In Progress)',
      location: 'Stevens Institute of Technology',
      date: 'Expected Dec 2025',
      supervisor: 'Prof. Hao Wang'
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="projects-section"
      style={{
        padding: '100px 50px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        color: '#1a202c'
      }}
    >
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          style={{
            fontSize: '3rem',
            textAlign: 'center',
            marginBottom: '80px',
            color: '#2d3748',
            fontWeight: 'bold'
          }}
        >
          Featured Projects & Research
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))', gap: '40px', marginBottom: '100px' }}>
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              style={{
                background: 'white',
                borderRadius: '20px',
                padding: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                border: '1px solid #e2e8f0',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '4px',
                  background: project.gradient
                }}
              />

              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '1.6rem', color: '#2d3748', marginBottom: '8px', fontWeight: 'bold' }}>
                    {project.title}
                  </h3>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#718096' }}>
                    <Calendar size={16} style={{ marginRight: '8px' }} />
                    <span>{project.period}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '12px' }}>
                  {project.github && (
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.1 }}
                      style={{
                        color: '#4f46e5',
                        textDecoration: 'none',
                        padding: '8px',
                        borderRadius: '8px',
                        background: '#f1f5f9'
                      }}
                    >
                      <Github size={20} />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.1 }}
                      style={{
                        color: '#4f46e5',
                        textDecoration: 'none',
                        padding: '8px',
                        borderRadius: '8px',
                        background: '#f1f5f9'
                      }}
                    >
                      <ExternalLink size={20} />
                    </motion.a>
                  )}
                </div>
              </div>

              <p style={{ fontSize: '1.1rem', lineHeight: '1.7', marginBottom: '25px', color: '#4a5568' }}>
                {project.description}
              </p>

              <div style={{ marginBottom: '25px' }}>
                <h4 style={{ fontSize: '1rem', color: '#2d3748', marginBottom: '12px', fontWeight: 'semibold' }}>
                  Technologies Used:
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        background: '#f1f5f9',
                        color: '#475569',
                        padding: '6px 12px',
                        borderRadius: '16px',
                        fontSize: '0.85rem',
                        border: '1px solid #cbd5e1'
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <h4 style={{ fontSize: '1rem', color: '#2d3748', marginBottom: '12px', fontWeight: 'semibold' }}>
                  Key Achievements:
                </h4>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                  {project.achievements.map((achievement, idx) => (
                    <li
                      key={idx}
                      style={{
                        marginBottom: '6px',
                        fontSize: '0.95rem',
                        color: '#4a5568',
                        display: 'flex',
                        alignItems: 'center'
                      }}
                    >
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 style={{ fontSize: '2.5rem', textAlign: 'center', marginBottom: '50px', color: '#2d3748' }}>
            Publications & Research
          </h2>

          <div style={{ display: 'grid', gap: '30px' }}>
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                transition={{ delay: 1 + index * 0.2, duration: 0.6 }}
                style={{
                  background: 'white',
                  padding: '25px',
                  borderRadius: '16px',
                  boxShadow: '0 6px 20px rgba(0,0,0,0.08)',
                  border: '1px solid #e2e8f0',
                  borderLeft: '4px solid #4f46e5'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                  <div style={{ flex: 1 }}>
                    <h3 style={{ fontSize: '1.3rem', color: '#2d3748', marginBottom: '8px' }}>
                      {pub.title}
                    </h3>
                    <p style={{ fontSize: '1.1rem', color: '#4f46e5', marginBottom: '5px' }}>
                      {pub.venue}
                    </p>
                    <p style={{ color: '#718096', fontSize: '0.95rem' }}>
                      {pub.location} • {pub.date}
                      {pub.supervisor && ` • Supervised by ${pub.supervisor}`}
                    </p>
                  </div>
                  <span
                    style={{
                      background: '#f1f5f9',
                      color: '#4f46e5',
                      padding: '4px 12px',
                      borderRadius: '12px',
                      fontSize: '0.85rem',
                      border: '1px solid #cbd5e1'
                    }}
                  >
                    {pub.type || 'Author'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Projects;