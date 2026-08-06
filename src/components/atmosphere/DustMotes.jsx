import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

export const DustMotes = ({ count = 35 }) => {
  const motes = useMemo(() => {
    return Array.from({ length: count }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 15 + 12,
      delay: Math.random() * 6,
    }));
  }, [count]);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden z-0">
      {motes.map((mote) => (
        <motion.div
          key={mote.id}
          className="absolute rounded-full bg-amber-100/30 blur-[0.5px]"
          style={{
            left: `${mote.x}%`,
            top: `${mote.y}%`,
            width: `${mote.size}px`,
            height: `${mote.size}px`,
          }}
          animate={{
            y: [`${mote.y}%`, `${mote.y - 25}%`, `${mote.y}%`],
            x: [`${mote.x}%`, `${mote.x + 5}%`, `${mote.x}%`],
            opacity: [0.1, 0.5, 0.1],
          }}
          transition={{
            duration: mote.duration,
            repeat: Infinity,
            delay: mote.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};
