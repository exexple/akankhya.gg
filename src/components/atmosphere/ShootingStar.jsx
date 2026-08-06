import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const ShootingStar = () => {
  const [starKey, setStarKey] = useState(0);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (Math.random() > 0.4) {
        setStarKey((prev) => prev + 1);
        setActive(true);
        setTimeout(() => setActive(false), 1800);
      }
    }, 9000);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {active && (
        <motion.div
          key={starKey}
          initial={{
            x: `${Math.random() * 60 + 20}vw`,
            y: `${Math.random() * 20}vh`,
            opacity: 0,
            scale: 0.2,
          }}
          animate={{
            x: [`${Math.random() * 50 + 20}vw`, `${Math.random() * 30}vw`],
            y: [`${Math.random() * 20}vh`, `${Math.random() * 40 + 40}vh`],
            opacity: [0, 1, 0],
            scale: [0.2, 1, 0.4],
          }}
          transition={{ duration: 1.6, ease: "easeOut" }}
          className="pointer-events-none fixed z-20 w-36 h-0.5 bg-gradient-to-r from-transparent via-amber-200 to-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.9)] -rotate-[35deg]"
        />
      )}
    </AnimatePresence>
  );
};
