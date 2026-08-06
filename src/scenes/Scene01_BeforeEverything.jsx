import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExperience } from '../context/ExperienceContext';

const SENTENCES = [
  "Every person has a story...",
  "Some stories quietly change the people around them...",
  "This one begins with you."
];

export const Scene01_BeforeEverything = () => {
  const { nextScene } = useExperience();
  const [lineIndex, setLineIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [showContinue, setShowContinue] = useState(false);

  useEffect(() => {
    let timeout;
    const currentFullSentence = SENTENCES[lineIndex];

    if (displayedText.length < currentFullSentence.length) {
      timeout = setTimeout(() => {
        setDisplayedText(currentFullSentence.slice(0, displayedText.length + 1));
      }, 70);
    } else {
      setIsTyping(false);
      if (lineIndex < SENTENCES.length - 1) {
        timeout = setTimeout(() => {
          setLineIndex((prev) => prev + 1);
          setDisplayedText("");
          setIsTyping(true);
        }, 1800);
      } else {
        timeout = setTimeout(() => {
          setShowContinue(true);
        }, 1200);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayedText, lineIndex]);

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 text-center z-10 selection:bg-amber-500/20">
      <div className="max-w-2xl min-h-[160px] flex items-center justify-center">
        <motion.p
          key={lineIndex}
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -5 }}
          transition={{ duration: 0.8 }}
          className="font-serif text-2xl sm:text-3xl md:text-4xl text-amber-100/95 tracking-wide leading-relaxed font-light"
        >
          {displayedText}
          <motion.span
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 0.9, repeat: Infinity }}
            className="inline-block w-0.5 h-7 ml-1 bg-amber-300/80 align-middle"
          />
        </motion.p>
      </div>

      <AnimatePresence>
        {showContinue && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="mt-16"
          >
            <button
              onClick={nextScene}
              className="px-8 py-3.5 rounded-full bg-amber-400/10 border border-amber-300/30 text-amber-200 hover:bg-amber-400/20 hover:border-amber-300/60 transition-all duration-500 font-sans text-sm tracking-widest uppercase backdrop-blur-md shadow-[0_0_25px_rgba(212,175,55,0.15)] group"
            >
              Begin Journey
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="inline-block ml-2 group-hover:translate-x-1 transition-transform"
              >
                →
              </motion.span>
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
