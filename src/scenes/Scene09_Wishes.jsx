import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import wishesData from '../data/wishes.json';
import { Compass, Briefcase, HeartPulse, Sparkles, Moon } from 'lucide-react';

const ICON_MAP = {
  Compass: Compass,
  Briefcase: Briefcase,
  HeartPulse: HeartPulse,
  Sparkles: Sparkles,
  Moon: Moon
};

export const Scene09_Wishes = () => {
  const [activeWishId, setActiveWishId] = useState(wishesData[0].id);

  const currentWish = wishesData.find((w) => w.id === activeWishId) || wishesData[0];
  const IconComponent = ICON_MAP[currentWish.icon] || Sparkles;

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-10"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter VIII</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          Wishes for Tomorrow
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          Dedicated entirely to your future—your travels, your career, your health, your dreams, and your peace.
        </p>
      </motion.div>

      {/* Category Navigation Pills */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {wishesData.map((wish) => {
          const BtnIcon = ICON_MAP[wish.icon] || Sparkles;
          const isActive = wish.id === activeWishId;
          return (
            <button
              key={wish.id}
              onClick={() => setActiveWishId(wish.id)}
              className={`px-5 py-2.5 rounded-full font-serif text-sm transition-all duration-300 flex items-center gap-2 ${
                isActive
                  ? 'bg-amber-400/25 border border-amber-300/50 text-amber-100 shadow-[0_0_20px_rgba(251,191,36,0.3)] backdrop-blur-md'
                  : 'bg-slate-900/50 border border-amber-100/10 text-amber-200/60 hover:text-amber-200 hover:bg-slate-800/60'
              }`}
            >
              <BtnIcon className={`w-4 h-4 ${isActive ? 'text-amber-300' : 'text-amber-200/50'}`} />
              <span>{wish.category}</span>
            </button>
          );
        })}
      </div>

      {/* Active Wish Environment Showcase */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentWish.id}
          initial={{ opacity: 0, scale: 0.96, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: -15 }}
          transition={{ duration: 0.7 }}
          className="w-full glass-panel rounded-3xl overflow-hidden border border-amber-400/20 shadow-2xl grid grid-cols-1 md:grid-cols-2"
        >
          {/* Environment Image Showcase */}
          <div className="relative h-64 md:h-full min-h-[300px] overflow-hidden">
            <img
              src={currentWish.visual}
              alt={currentWish.category}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-950/90 via-slate-950/40 to-transparent" />
            <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-slate-950/70 border border-amber-400/20 text-xs text-amber-200 backdrop-blur-md flex items-center gap-2">
              <IconComponent className="w-3.5 h-3.5 text-amber-400" />
              <span>{currentWish.category} Realm</span>
            </div>
          </div>

          {/* Environment Text Content */}
          <div className="p-8 sm:p-10 flex flex-col justify-center space-y-6">
            <div className="space-y-2">
              <h3 className="font-serif text-2xl sm:text-3xl text-amber-100 font-medium leading-tight">
                {currentWish.headline}
              </h3>
              <p className="font-serif text-lg text-amber-300/90 italic">
                "{currentWish.quote}"
              </p>
            </div>

            <p className="font-sans text-sm text-amber-100/80 leading-relaxed font-light">
              {currentWish.body}
            </p>

            <div className="pt-4 border-t border-amber-400/15 flex items-center gap-2 text-xs text-amber-300/60">
              <Sparkles className="w-4 h-4 text-amber-400" />
              <span>May this horizon open wide for you.</span>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
