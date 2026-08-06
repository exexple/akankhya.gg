import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExperience } from '../../context/ExperienceContext';
import { Starfield } from './Starfield';
import { Fireflies } from './Fireflies';
import { DustMotes } from './DustMotes';
import { Lanterns } from './Lanterns';
import { ShootingStar } from './ShootingStar';

export const AtmosphereBackground = () => {
  const { environment } = useExperience();
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({
        x: e.clientX / window.innerWidth,
        y: e.clientY / window.innerHeight,
      });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getBackgroundGradient = (timeOfDay) => {
    switch (timeOfDay) {
      case 'deep-night':
        return 'bg-gradient-to-b from-[#050608] via-[#090b10] to-[#0d1017]';
      case 'dusk':
        return 'bg-gradient-to-b from-[#0c0d14] via-[#151724] to-[#1a1221]';
      case 'morning-gold':
        return 'bg-gradient-to-b from-[#141824] via-[#241e2a] to-[#1f1924]';
      case 'golden-afternoon':
        return 'bg-gradient-to-b from-[#1c1825] via-[#261d28] to-[#15121b]';
      case 'sunset-purple':
        return 'bg-gradient-to-b from-[#110d1c] via-[#1c1226] to-[#0c0914]';
      case 'cozy-lounge':
        return 'bg-gradient-to-b from-[#14121a] via-[#1d1824] to-[#0e0c14]';
      case 'starlit-night':
        return 'bg-gradient-to-b from-[#070a14] via-[#0c1020] to-[#060810]';
      case 'midnight-lanterns':
        return 'bg-gradient-to-b from-[#0b0c16] via-[#141528] to-[#0a0a14]';
      case 'deep-space':
        return 'bg-gradient-to-b from-[#060913] via-[#0b1022] to-[#05070e]';
      case 'birthday-warmth':
        return 'bg-gradient-to-b from-[#18131d] via-[#251824] to-[#120d18]';
      case 'quiet-landing':
        return 'bg-gradient-to-b from-[#08090e] via-[#0d0f17] to-[#05060a]';
      default:
        return 'bg-gradient-to-b from-[#090b10] via-[#121622] to-[#090b10]';
    }
  };

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden transition-colors duration-1000">
      {/* Base Sky Gradient */}
      <div className={`absolute inset-0 transition-all duration-1000 ${getBackgroundGradient(environment.timeOfDay)}`} />

      {/* Dynamic Mouse Cursor Light Bloom */}
      <div
        className="absolute inset-0 transition-all duration-500 opacity-40"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x * 100}% ${mousePos.y * 100}%, rgba(251, 191, 36, 0.08), transparent 80%)`,
        }}
      />

      {/* Shooting Stars */}
      <ShootingStar />

      {/* Particle Layers */}
      <AnimatePresence mode="wait">
        {environment.particleType === 'stars' && (
          <motion.div key="stars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Starfield count={75} />
          </motion.div>
        )}
        {environment.particleType === 'fireflies' && (
          <motion.div key="fireflies" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Fireflies count={35} />
          </motion.div>
        )}
        {environment.particleType === 'dust' && (
          <motion.div key="dust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <DustMotes count={40} />
          </motion.div>
        )}
        {environment.particleType === 'lanterns' && (
          <motion.div key="lanterns" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Lanterns count={22} />
          </motion.div>
        )}
        {environment.particleType === 'light-motes' && (
          <motion.div key="light-motes" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <DustMotes count={50} />
          </motion.div>
        )}
        {environment.particleType === 'warm-sparks' && (
          <motion.div key="warm-sparks" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Fireflies count={40} />
            <DustMotes count={25} />
          </motion.div>
        )}
        {environment.particleType === 'paper-dust' && (
          <motion.div key="paper-dust" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <DustMotes count={30} />
          </motion.div>
        )}
        {environment.particleType === 'minimal-stars' && (
          <motion.div key="minimal-stars" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }}>
            <Starfield count={35} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
