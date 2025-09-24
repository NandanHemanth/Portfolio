import React, { useRef, useEffect, useState } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sphere, Box, Cylinder, Torus } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

const AnimatedSphere: React.FC<{ position: [number, number, number]; delay: number }> = ({ position, delay }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  useFrame((state) => {
    if (meshRef.current && isAnimating) {
      meshRef.current.rotation.x += 0.02;
      meshRef.current.rotation.y += 0.02;
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime + delay) * 0.5 + position[1];
    }
  });

  useEffect(() => {
    const timer = setTimeout(() => setIsAnimating(true), delay * 1000);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <Sphere ref={meshRef} position={position} args={[0.5, 32, 32]}>
      <meshStandardMaterial color="#4f46e5" wireframe />
    </Sphere>
  );
};

const MLPipeline: React.FC = () => {
  return (
    <group>
      <AnimatedSphere position={[-4, 2, 0]} delay={0} />
      <Cylinder position={[-2, 0, 0]} args={[0.1, 0.1, 3, 8]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#06b6d4" />
      </Cylinder>

      <Box position={[0, 0, 0]} args={[1, 1, 1]}>
        <meshStandardMaterial color="#10b981" />
      </Box>

      <Cylinder position={[2, 0, 0]} args={[0.1, 0.1, 3, 8]} rotation={[0, 0, Math.PI / 2]}>
        <meshStandardMaterial color="#06b6d4" />
      </Cylinder>

      <Torus position={[4, 0, 0]} args={[0.8, 0.3, 16, 32]}>
        <meshStandardMaterial color="#f59e0b" />
      </Torus>
    </group>
  );
};

const RubeGoldbergMachine: React.FC = () => {
  return (
    <motion.div
      className="rube-goldberg-container"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      style={{
        height: '400px',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        position: 'relative',
        overflow: 'hidden'
      }}
    >
      <Canvas camera={{ position: [0, 2, 8] }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} />
        <pointLight position={[-10, -10, -10]} color="#4f46e5" intensity={0.5} />

        <MLPipeline />

        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={1} />
      </Canvas>

      <div className="machine-overlay">
        <motion.h1
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          style={{
            position: 'absolute',
            top: '50px',
            left: '50px',
            color: 'white',
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
            zIndex: 10
          }}
        >
          Nandan Hemanth
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          style={{
            position: 'absolute',
            top: '130px',
            left: '50px',
            color: 'rgba(255,255,255,0.9)',
            fontSize: '1.5rem',
            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
            zIndex: 10
          }}
        >
          Machine Learning Engineer
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          style={{
            position: 'absolute',
            bottom: '30px',
            left: '50px',
            zIndex: 10
          }}
        >
          <div className="ml-tags">
            {['Deep Learning', 'Computer Vision', 'NLP', 'RAG Systems', 'Transformers'].map((tag, index) => (
              <motion.span
                key={tag}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.2 + index * 0.1 }}
                style={{
                  background: 'rgba(255,255,255,0.2)',
                  backdropFilter: 'blur(10px)',
                  color: 'white',
                  padding: '8px 16px',
                  margin: '5px',
                  borderRadius: '20px',
                  display: 'inline-block',
                  fontSize: '0.9rem',
                  border: '1px solid rgba(255,255,255,0.3)'
                }}
              >
                {tag}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default RubeGoldbergMachine;