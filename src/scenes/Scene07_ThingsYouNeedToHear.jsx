import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import affirmationsData from '../data/affirmations.json';
import { Star, X, Sparkles } from 'lucide-react';

export const Scene07_ThingsYouNeedToHear = () => {
  const [selectedAffirmation, setSelectedAffirmation] = useState(null);

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter VI</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          Things You Need to Hear
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          Click any star in the night sky to ignite a constellation of gentle reminders.
        </p>
      </motion.div>

      {/* Constellation Grid of Interactive Stars */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 sm:gap-8 w-full">
        {affirmationsData.map((item, index) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15, duration: 0.8 }}
            onClick={() => setSelectedAffirmation(item)}
            whileHover={{ scale: 1.05, y: -5 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card p-6 rounded-2xl flex flex-col items-center text-center cursor-pointer group hover:border-amber-400/40 hover:shadow-[0_0_30px_rgba(251,191,36,0.25)] transition-all duration-300 relative overflow-hidden"
          >
            <div className="w-14 h-14 rounded-full bg-amber-500/10 border border-amber-400/30 flex items-center justify-center text-amber-300 mb-4 group-hover:bg-amber-400/20 group-hover:scale-110 transition-all shadow-[0_0_15px_rgba(251,191,36,0.3)]">
              <Star className="w-6 h-6 fill-amber-300/30 text-amber-300 animate-pulse-subtle" />
            </div>

            <span className="font-serif text-lg text-amber-100 font-medium mb-1">
              "{item.short}"
            </span>
            <span className="font-sans text-xs text-amber-300/60">
              {item.star}
            </span>
          </motion.div>
        ))}
      </div>

      {/* Affirmation Modal */}
      <AnimatePresence>
        {selectedAffirmation && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedAffirmation(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-panel rounded-3xl p-8 border border-amber-300/30 shadow-2xl text-center space-y-6"
            >
              <button
                onClick={() => setSelectedAffirmation(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-amber-500/10 text-amber-200 hover:bg-amber-500/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-full bg-amber-500/20 border border-amber-400/40 flex items-center justify-center text-amber-300 mx-auto shadow-[0_0_30px_rgba(251,191,36,0.4)]">
                <Sparkles className="w-8 h-8" />
              </div>

              <div className="space-y-2">
                <span className="text-xs font-sans uppercase tracking-widest text-amber-400/80">{selectedAffirmation.star}</span>
                <h3 className="font-serif text-3xl text-amber-100 font-light">
                  "{selectedAffirmation.short}"
                </h3>
              </div>

              <div className="p-5 rounded-2xl bg-amber-950/30 border border-amber-400/20">
                <p className="font-serif text-lg text-amber-100/90 leading-relaxed font-light">
                  {selectedAffirmation.full}
                </p>
              </div>

              <p className="text-xs font-sans text-amber-200/50 italic">
                Hold this thought close whenever life feels noisy.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
