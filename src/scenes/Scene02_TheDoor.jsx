import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useExperience } from '../context/ExperienceContext';
import { KeyRound, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audioSynth';

export const Scene02_TheDoor = () => {
  const { nextScene } = useExperience();
  const [isOpening, setIsOpening] = useState(false);

  const handleEnter = () => {
    soundFX.playChime(440, 1.2);
    setIsOpening(true);
    setTimeout(() => {
      nextScene();
    }, 1200);
  };

  return (
    <div className="relative min-h-screen w-full flex flex-col items-center justify-center px-6 overflow-hidden z-10">
      {/* Background Door Portal Frame */}
      <motion.div
        animate={{
          scale: isOpening ? 2.5 : 1,
          opacity: isOpening ? 0 : 1,
        }}
        transition={{ duration: 1.4, ease: [0.4, 0, 0.2, 1] }}
        className="relative flex flex-col items-center justify-center"
      >
        {/* Arching Wooden Door Silhouette */}
        <div className="relative w-72 h-96 sm:w-80 sm:h-[420px] rounded-t-full bg-gradient-to-b from-[#2a1e17] via-[#1a120d] to-[#0e0906] border-4 border-amber-800/40 shadow-[0_0_80px_rgba(251,191,36,0.25)] flex flex-col items-center justify-between p-8 overflow-hidden group">
          {/* Subtle Warm Door Light Bloom */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(251,191,36,0.25)_0%,transparent_80%)] group-hover:opacity-100 opacity-60 transition-opacity duration-700" />
          
          {/* Decorative Arch Lines & Ivy Accents */}
          <div className="w-full flex justify-between items-center text-amber-500/30 text-xs font-serif tracking-widest pt-2">
            <span>❖</span>
            <span>MEMORIES</span>
            <span>❖</span>
          </div>

          <div className="relative z-10 flex flex-col items-center text-center space-y-4 my-auto">
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 shadow-[0_0_20px_rgba(251,191,36,0.3)]">
              <KeyRound className="w-6 h-6 animate-pulse-subtle" />
            </div>
            <h2 className="font-serif text-2xl text-amber-100 font-light tracking-wide">
              The Gateway of Memories
            </h2>
            <p className="font-sans text-xs text-amber-200/60 max-w-[200px] leading-relaxed">
              Step through to walk along the path prepared for you.
            </p>
          </div>

          {/* Door Handle Glow */}
          <div className="w-full flex justify-end pr-4">
            <div className="w-3.5 h-3.5 rounded-full bg-amber-400/80 shadow-[0_0_12px_rgba(251,191,36,0.9)] animate-pulse" />
          </div>
        </div>

        {/* Action Button */}
        <motion.button
          onClick={handleEnter}
          disabled={isOpening}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-10 px-9 py-4 rounded-full bg-gradient-to-r from-amber-500/20 via-amber-400/30 to-amber-500/20 border border-amber-300/40 text-amber-100 font-serif text-lg tracking-wider shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_40px_rgba(212,175,55,0.4)] transition-all duration-500 flex items-center gap-2"
        >
          <Sparkles className="w-4 h-4 text-amber-300" />
          <span>Enter Her World</span>
        </motion.button>
      </motion.div>
    </div>
  );
};
