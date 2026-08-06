import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useExperience } from '../context/ExperienceContext';
import confetti from 'canvas-confetti';
import { Flame, Sparkles, Heart } from 'lucide-react';
import { soundFX } from '../utils/audioSynth';

export const Scene10_BirthdayRoom = () => {
  const { candleLit, setCandleLit, nextScene } = useExperience();
  const [showCard, setShowCard] = useState(candleLit);

  const handleLightCandle = () => {
    if (candleLit) return;
    soundFX.playCandleIgnite();
    setCandleLit(true);

    // Launch elegant, restrained confetti burst
    confetti({
      particleCount: 100,
      spread: 80,
      origin: { y: 0.55 },
      colors: ['#f59e0b', '#fbbf24', '#fef08a', '#ec4899', '#c084fc', '#e0e7ff']
    });

    setTimeout(() => {
      setShowCard(true);
    }, 700);
  };

  return (
    <div className="relative min-h-screen w-full py-16 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center z-10 text-center">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-2 mb-8"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter VIII • Emotional Peak</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          The Birthday Room
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          A room prepared with love, warm lights, and celebration. Touch the candle to ignite your birthday flame.
        </p>
      </motion.div>

      {/* Birthday Sanctuary Visual Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.9 }}
        className="relative w-full max-w-2xl glass-panel rounded-3xl p-6 sm:p-10 border border-amber-400/30 shadow-[0_0_80px_rgba(251,191,36,0.25)] flex flex-col items-center justify-center space-y-6 overflow-visible"
      >
        {/* Warm Candlelight Ambient Room Glow */}
        <div className={`absolute inset-0 rounded-3xl transition-opacity duration-1000 ${candleLit ? 'bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.35)_0%,transparent_80%)]' : 'bg-[radial-gradient(circle_at_center,rgba(251,191,36,0.12)_0%,transparent_80%)]'}`} />

        {/* Decorative Garland Banner */}
        <div className="flex items-center gap-3 text-amber-300/80 text-xs font-serif tracking-widest z-10">
          <span>✨</span>
          <span>HAPPY BIRTHDAY AKANKHYA</span>
          <span>✨</span>
        </div>

        {/* Beautiful Handcrafted Multi-Tier Birthday Cake & Candle */}
        <div className="relative z-20 flex flex-col items-center pt-8 pb-4 my-2">
          
          {/* Interactive Candle Unit */}
          <div
            onClick={handleLightCandle}
            className="relative flex flex-col items-center cursor-pointer group z-30 mb-[-4px]"
          >
            {/* Candle Flame & Glow */}
            <div className="h-14 flex items-end justify-center relative">
              {candleLit ? (
                <motion.div
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: [0.95, 1.1, 1], opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  className="relative flex flex-col items-center"
                >
                  {/* Outer Ambient Flame Aura */}
                  <div className="absolute -top-4 w-12 h-16 rounded-full bg-amber-400/30 blur-md animate-pulse" />
                  
                  {/* Layered Realistic Flame Body */}
                  <div className="w-5 h-9 rounded-full bg-gradient-to-t from-amber-600 via-amber-400 to-yellow-100 shadow-[0_0_25px_rgba(251,191,36,1)] animate-candle relative overflow-hidden">
                    <div className="absolute inset-x-1 bottom-1 h-4 rounded-full bg-amber-200 blur-[0.5px]" />
                    <div className="absolute inset-x-1.5 bottom-1.5 h-2 rounded-full bg-white blur-[0.3px]" />
                  </div>
                </motion.div>
              ) : (
                <motion.div
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.9 }}
                  className="flex flex-col items-center"
                >
                  <div className="w-4 h-6 rounded-full bg-amber-400/30 border border-amber-300/60 shadow-[0_0_15px_rgba(251,191,36,0.4)] animate-pulse flex items-center justify-center">
                    <Flame className="w-3 h-3 text-amber-200 fill-amber-300/60" />
                  </div>
                  <span className="text-[10px] font-sans font-medium text-amber-200/80 bg-slate-900/80 px-2 py-0.5 rounded-full border border-amber-400/30 mt-1 shadow-md whitespace-nowrap">
                    Touch to Light 🔥
                  </span>
                </motion.div>
              )}
            </div>

            {/* Candle Wick */}
            <div className="w-1 h-3 bg-neutral-800 rounded-t-sm" />

            {/* Pastel Striped Wax Candle Stick */}
            <div className="w-4 h-12 rounded-t-sm bg-gradient-to-r from-rose-200 via-amber-100 to-rose-200 border border-amber-300/40 shadow-md relative overflow-hidden flex flex-col justify-between py-1">
              <div className="w-full h-1 bg-amber-400/40 -rotate-12 transform scale-125" />
              <div className="w-full h-1 bg-rose-400/40 -rotate-12 transform scale-125" />
              <div className="w-full h-1 bg-amber-400/40 -rotate-12 transform scale-125" />
            </div>
          </div>

          {/* Cake Top Tier */}
          <div className="relative w-36 sm:w-44 h-16 rounded-t-2xl bg-gradient-to-b from-[#fffaf4] via-[#f8eedb] to-[#ebdcc3] border-t-2 border-x-2 border-amber-200/60 shadow-lg flex flex-col justify-between p-1 z-20">
            {/* Drip Cream Frosting */}
            <div className="w-full h-4 bg-[#fffaf4] rounded-t-xl flex justify-around items-end border-b border-amber-200/50 shadow-sm">
              <div className="w-3 h-3 bg-[#fffaf4] rounded-full -mb-1 shadow-sm" />
              <div className="w-4 h-4 bg-[#fffaf4] rounded-full -mb-1.5 shadow-sm" />
              <div className="w-3.5 h-3.5 bg-[#fffaf4] rounded-full -mb-1 shadow-sm" />
              <div className="w-4 h-4 bg-[#fffaf4] rounded-full -mb-1.5 shadow-sm" />
            </div>
            {/* Sugar Pearl Accents */}
            <div className="flex justify-between px-3 pb-1 text-[8px] text-amber-400">
              <span>●</span><span>●</span><span>●</span><span>●</span><span>●</span>
            </div>
          </div>

          {/* Cake Bottom Tier */}
          <div className="relative w-48 sm:w-56 h-20 rounded-t-2xl bg-gradient-to-b from-[#f3e3ca] via-[#e5cfac] to-[#3a2518] border-t-2 border-x-2 border-amber-300/50 shadow-xl flex flex-col justify-between p-1.5 z-10 -mt-1">
            {/* Cream Piping Layer */}
            <div className="w-full h-4 bg-[#fff8eb] rounded-t-xl flex justify-between px-2 items-center border-b border-amber-300/40 shadow-sm">
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-rose-300/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
              </div>
              <span className="font-serif text-[11px] text-amber-900 font-semibold tracking-wider">AKANKHYA</span>
              <div className="flex gap-1">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-300/80" />
                <div className="w-2.5 h-2.5 rounded-full bg-rose-300/80" />
              </div>
            </div>
            {/* Chocolate Base Accent */}
            <div className="w-full h-2.5 bg-[#2d1b10] rounded-b-md" />
          </div>

          {/* Golden Metallic Cake Pedestal Stand */}
          <div className="w-56 sm:w-64 h-4 bg-gradient-to-r from-amber-600 via-amber-300 to-amber-600 rounded-full shadow-[0_8px_20px_rgba(0,0,0,0.5)] border border-amber-200/60 z-0 -mt-0.5" />
          <div className="w-24 h-3 bg-gradient-to-b from-amber-500 to-amber-700 rounded-b-lg shadow-md z-0" />
        </div>

        {/* Action Prompt or Wish Floating Confirmation */}
        <div className="z-20 pt-2">
          {!candleLit ? (
            <motion.button
              onClick={handleLightCandle}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3.5 rounded-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-serif text-base font-medium shadow-[0_0_30px_rgba(251,191,36,0.5)] transition-all flex items-center gap-2 mx-auto"
            >
              <Flame className="w-5 h-5 fill-current" />
              <span>Light Your Birthday Candle</span>
            </motion.button>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-center gap-2 text-amber-300 font-serif text-lg animate-pulse"
            >
              <Sparkles className="w-5 h-5 text-amber-300" />
              <span>Your birthday wish is floating up into the stars...</span>
            </motion.div>
          )}
        </div>

        {/* Revealed Heartfelt Birthday Message */}
        <AnimatePresence>
          {showCard && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="w-full space-y-6 pt-6 border-t border-amber-400/20 z-20"
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
