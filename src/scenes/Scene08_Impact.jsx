import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import impactData from '../data/impact.json';
import { Flame, X, SunMedium } from 'lucide-react';

export const Scene08_Impact = () => {
  const [selectedImpact, setSelectedImpact] = useState(null);

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter VIII</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          Your Impact on Everyone Around You
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          What makes you uniquely special to the world. Each lantern carries a quiet truth about your presence.
        </p>
      </motion.div>

      {/* Floating Lantern Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 w-full">
        {impactData.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.15, duration: 0.8 }}
            onClick={() => setSelectedImpact(item)}
            whileHover={{ y: -8, scale: 1.03 }}
            className="glass-card p-6 rounded-2xl border border-amber-500/20 hover:border-amber-400/50 flex flex-col justify-between min-h-[200px] cursor-pointer group shadow-xl hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] transition-all"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-sans uppercase tracking-wider text-amber-400/80">{item.light}</span>
              <div className="p-2 rounded-full bg-amber-500/10 text-amber-400 group-hover:bg-amber-400/20 group-hover:scale-110 transition-all">
                <Flame className="w-5 h-5 animate-pulse-subtle" />
              </div>
            </div>

            <h3 className="font-serif text-xl text-amber-100 font-medium my-3">
              {item.title}
            </h3>

            <span className="text-xs font-sans text-amber-300/60 group-hover:text-amber-200 transition-colors">
              Open lantern thought →
            </span>
          </motion.div>
        ))}
      </div>

      {/* Impact Detail Modal */}
      <AnimatePresence>
        {selectedImpact && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedImpact(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-panel rounded-3xl p-8 border border-amber-300/30 shadow-2xl text-center space-y-6"
            >
              <button
                onClick={() => setSelectedImpact(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mx-auto shadow-[0_0_35px_rgba(251,191,36,0.4)]">
                <SunMedium className="w-8 h-8 animate-pulse" />
              </div>

              <div className="space-y-1">
                <span className="text-xs font-sans uppercase tracking-widest text-amber-400/80">{selectedImpact.light}</span>
                <h3 className="font-serif text-2xl text-amber-100 font-medium">
                  {selectedImpact.title}
                </h3>
              </div>

              <div className="p-6 rounded-2xl bg-amber-950/40 border border-amber-400/20">
                <p className="font-serif text-lg text-amber-100/90 leading-relaxed font-light">
                  "{selectedImpact.message}"
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
