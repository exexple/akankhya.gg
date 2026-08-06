import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const Lanterns = ({ count = 18 }) => {
  const lanterns = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 90 + 5,
      startY: 110 + Math.random() * 20,
      size: Math.random() * 24 + 16,
      duration: Math.random() * 20 + 15,
      delay: Math.random() * 10,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {lanterns.map((l) => (
        <motion.div
          key={l.id}
          className="absolute flex items-center justify-center"
          style={{
            left: `${l.x}%`,
            width: `${l.size}px`,
            height: `${l.size * 1.3}px`,
          }}
          initial={{ y: `${l.startY}vh`, opacity: 0 }}
          animate={{
            y: ['110vh', '-20vh'],
            x: [0, Math.sin(l.id) * 30, Math.cos(l.id) * -20, 0],
            opacity: [0, 0.85, 0.85, 0],
          }}
          transition={{
            duration: l.duration,
            repeat: Infinity,
            delay: l.delay,
            ease: "easeInOut",
          }}
        >
          <div className="relative w-full h-full rounded-b-md rounded-t-lg bg-gradient-to-t from-amber-600/80 via-amber-400/90 to-amber-200/90 shadow-[0_0_20px_rgba(251,191,36,0.8)] border border-amber-300/40">
            <div className="absolute inset-x-1 bottom-1 h-2 bg-amber-100 rounded-full blur-[1px] animate-pulse-subtle" />
          </div>
        </motion.div>
      ))}
    </div>
  );
};
