import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const Starfield = ({ count = 60 }) => {
  const stars = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.7 + 0.3
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full bg-amber-100/90 shadow-[0_0_8px_rgba(255,248,220,0.8)]"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [star.opacity * 0.2, star.opacity, star.opacity * 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
