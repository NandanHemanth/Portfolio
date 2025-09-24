import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Header: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3
  });

  return (
    <motion.section
      ref={ref}
      className="header-section"
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.8 }}
      style={{
        padding: '100px 50px',
        background: 'linear-gradient(45deg, #1a1a2e, #16213e)',
        color: 'white',
        textAlign: 'center'
      }}
    >
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={inView ? { y: 0, opacity: 1 } : { y: 50, opacity: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <h2 style={{ fontSize: '2.5rem', marginBottom: '30px', color: '#4f46e5' }}>
          The ML Pipeline in Motion
        </h2>

        <p style={{ fontSize: '1.2rem', lineHeight: '1.8', maxWidth: '800px', margin: '0 auto', opacity: 0.9 }}>
          Welcome to my portfolio - a Rube Goldberg machine of Machine Learning innovations.
          Each component connects to create intelligent solutions, from data ingestion to model deployment.
        </p>

        <motion.div
          className="scroll-indicator"
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          style={{ marginTop: '50px' }}
        >
          <div style={{
            width: '2px',
            height: '30px',
            background: '#4f46e5',
            margin: '0 auto',
            borderRadius: '1px'
          }} />
        </motion.div>
      </motion.div>
    </motion.section>
  );
};

export default Header;