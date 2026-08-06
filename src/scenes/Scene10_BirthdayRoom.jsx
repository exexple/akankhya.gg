import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExperience } from '../context/ExperienceContext';
import confetti from 'canvas-confetti';
import { Flame, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audioSynth';

export const Scene10_BirthdayRoom = () => {
  const { candleLit, setCandleLit, nextScene } = useExperience();
  const [showCard, setShowCard] = useState(false);

  const handleLightCandle = () => {
    if (candleLit) return;
    soundFX.playCandleIgnite();
    setCandleLit(true);

    // Launch elegant, restrained confetti burst
    confetti({
      particleCount: 90,
      spread: 75,
      origin: { y: 0.6 },
      colors: ['#f59e0b', '#fbbf24', '#fef08a', '#ec4899', '#c084fc']
    });

    setTimeout(() => {
      setShowCard(true);
    }, 800);
  };

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center z-10 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-3 mb-10"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter IX • Emotional Peak</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          The Birthday Room
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          A warm room prepared with love, candles, and fairy lights. One final candle is waiting for your touch.
        </p>
      </motion.div>

      {/* Birthday Sanctuary Visual Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative w-full max-w-2xl glass-panel rounded-3xl p-8 sm:p-12 border border-amber-400/30 shadow-[0_0_80px_rgba(251,191,36,0.25)] flex flex-col items-center justify-center space-y-8 overflow-hidden"
      >
        {/* Warm Candle Light Room Glow */}
        <div className={`absolute inset-0 transition-opacity duration-1000 ${candleLit ? 'bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.35)_0%,transparent_80%)]' : 'bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.15)_0%,transparent_80%)]'}`} />

        {/* Floating Fairy Lights Row */}
        <div className="flex items-center gap-3 text-amber-300/80 text-xs font-serif tracking-widest">
          <span>✨</span>
          <span>HAPPY BIRTHDAY AKANKHYA</span>
          <span>✨</span>
        </div>

        {/* Birthday Cake Illustration & Interactive Candle */}
        <div className="relative z-10 flex flex-col items-center my-4">
          <div className="relative w-48 h-44 sm:w-56 sm:h-52 bg-gradient-to-b from-amber-950/80 to-amber-900/60 border-2 border-amber-400/40 rounded-t-3xl rounded-b-xl flex flex-col items-center justify-end p-4 shadow-2xl overflow-hidden">
            {/* Icing Swirls */}
            <div className="absolute top-0 inset-x-0 h-6 bg-gradient-to-r from-amber-200 via-amber-100 to-amber-200 rounded-b-xl opacity-90 shadow-sm" />
            
            {/* Candle Container */}
            <div className="absolute top-[-30px] flex flex-col items-center cursor-pointer" onClick={handleLightCandle}>
              {/* Flame */}
              <AnimatePresence>
                {candleLit ? (
                  <motion.div
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="w-5 h-8 bg-gradient-to-t from-amber-500 via-amber-400 to-amber-100 rounded-full shadow-[0_0_20px_rgba(251,191,36,1)] animate-candle"
                  />
                ) : (
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="w-4 h-6 bg-amber-400/30 rounded-full border border-amber-300/50 flex items-center justify-center animate-pulse"
                  >
                    <span className="text-[10px] text-amber-200">Touch</span>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Candle Stick */}
              <div className="w-3 h-10 bg-amber-100 rounded-t-sm shadow-md mt-1" />
            </div>

            <span className="font-serif text-sm text-amber-200/90 font-medium z-10">Make a Wish</span>
          </div>

          {/* Action Prompt */}
          {!candleLit ? (
            <motion.button
              onClick={handleLightCandle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mt-8 px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-serif text-base font-medium shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all flex items-center gap-2"
            >
              <Flame className="w-5 h-5 fill-current" />
              <span>Light Your Birthday Candle</span>
            </motion.button>
          ) : (
            <div className="mt-6 flex items-center gap-2 text-amber-300 font-serif text-lg animate-pulse">
              <Sparkles className="w-5 h-5" />
              <span>Your wish is floating up into the stars...</span>
            </div>
          )}
        </div>

        {/* Revealed Heartfelt Birthday Message */}
        <AnimatePresence>
          {showCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full space-y-6 pt-4 border-t border-amber-400/20"
            >
              <h3 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
                Happy Birthday, Akankhya! 🌸
              </h3>
              <p className="font-serif text-lg text-amber-200/90 leading-relaxed max-w-lg mx-auto font-light">
                May this year bring you endless moments of laughter, peace that settles deep into your soul, and dreams that unfold even more beautifully than you imagined.
              </p>

              <button
                onClick={nextScene}
                className="px-8 py-3 rounded-full bg-amber-400/15 border border-amber-300/30 text-amber-200 hover:bg-amber-400/25 transition-all text-xs font-sans tracking-widest uppercase"
              >
                Proceed to Final Letter →
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};
