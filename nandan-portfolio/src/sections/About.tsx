import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Brain, Code, Database, Cpu } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2
  });

  const skills = [
    {
      category: 'Languages',
      items: ['Python', 'Java', 'JavaScript', 'TypeScript', 'C', 'Julia', 'Mojo'],
      icon: <Code className="skill-icon" />
    },
    {
      category: 'ML/AI Technologies',
      items: ['LangChain', 'Transformers', 'LLMs', 'Computer Vision', 'RAG Systems'],
      icon: <Brain className="skill-icon" />
    },
    {
      category: 'Frameworks & Tools',
      items: ['React', 'Next.js', 'Flask', 'Django', 'Three.js', 'BabylonJS'],
      icon: <Cpu className="skill-icon" />
    },
    {
      category: 'Data & Cloud',
      items: ['SQL', 'Hadoop', 'AWS', 'Vector Databases', 'Big Data'],
      icon: <Database className="skill-icon" />
    }
  ];

  return (
    <motion.section
      ref={ref}
      className="about-section"
      style={{
        padding: '100px 50px',
        background: 'linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%)',
        color: '#1a202c'
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
            marginBottom: '50px',
            color: '#2d3748',
            fontWeight: 'bold'
          }}
        >
          About the Engineer
        </motion.h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', alignItems: 'center' }}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: '#4f46e5' }}>
              Professional Summary
            </h3>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '20px' }}>
              Machine Learning Engineer with expertise in <strong>deep learning</strong>, <strong>computer vision</strong>,
              and <strong>AI pipeline development</strong>. Currently pursuing Master's in Applied AI at Stevens Institute
              of Technology while building production-ready transformers, RAG systems, and real-time speech synthesis solutions.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
              Proven experience in end-to-end ML lifecycle management, big-data processing, and deploying scalable AI solutions
              that bridge the gap between research and real-world applications.
            </p>

            <motion.div
              style={{ marginTop: '30px' }}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <h4 style={{ fontSize: '1.5rem', color: '#2d3748', marginBottom: '15px' }}>
                Education
              </h4>
              <div style={{ marginBottom: '15px' }}>
                <strong>Stevens Institute of Technology</strong> (Expected May 2026)<br />
                Master of Science in Applied Artificial Intelligence
              </div>
              <div>
                <strong>PES University</strong> (May 2024)<br />
                B.Tech in Computer Science Engineering (ML & Data Science)
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <h3 style={{ fontSize: '2rem', marginBottom: '30px', color: '#4f46e5' }}>
              Technical Skills
            </h3>

            <div style={{ display: 'grid', gap: '25px' }}>
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ delay: 0.7 + index * 0.1, duration: 0.6 }}
                  style={{
                    background: 'white',
                    padding: '20px',
                    borderRadius: '12px',
                    boxShadow: '0 4px 6px rgba(0,0,0,0.1)',
                    border: '1px solid #e2e8f0'
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', marginBottom: '15px' }}>
                    <div style={{ color: '#4f46e5', marginRight: '10px' }}>
                      {skillGroup.icon}
                    </div>
                    <h4 style={{ fontSize: '1.3rem', color: '#2d3748', margin: 0 }}>
                      {skillGroup.category}
                    </h4>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                    {skillGroup.items.map((skill) => (
                      <span
                        key={skill}
                        style={{
                          background: '#f1f5f9',
                          color: '#475569',
                          padding: '6px 12px',
                          borderRadius: '16px',
                          fontSize: '0.9rem',
                          border: '1px solid #cbd5e1'
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;