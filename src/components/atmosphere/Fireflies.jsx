import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const Fireflies = ({ count = 25 }) => {
  const flies = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      durationX: Math.random() * 12 + 10,
      durationY: Math.random() * 10 + 8,
      delay: Math.random() * 4,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {flies.map((fly) => (
        <motion.div
          key={fly.id}
          className="absolute rounded-full bg-amber-300/80 shadow-[0_0_12px_rgba(251,191,36,0.9)]"
          style={{
            left: `${fly.x}%`,
            top: `${fly.y}%`,
            width: `${fly.size}px`,
            height: `${fly.size}px`,
          }}
          animate={{
            x: [0, Math.random() * 60 - 30, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * -50, Math.random() * 30 - 15, 0],
            opacity: [0.2, 0.9, 0.4, 0.9, 0.2],
            scale: [0.9, 1.3, 0.9],
          }}
          transition={{
            duration: fly.durationX,
            repeat: Infinity,
            delay: fly.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
