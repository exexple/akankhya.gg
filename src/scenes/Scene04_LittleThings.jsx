import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import littleThingsData from '../data/littleThings.json';
import { Heart, Sparkles, X } from 'lucide-react';

export const Scene04_LittleThings = () => {
  const [activeItem, setActiveItem] = useState(null);

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-5xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter III</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          The Little Things
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          Not milestones. Not grand achievements. Just tiny, quiet details about who you are.
        </p>
      </motion.div>

      {/* Floating Paper Snippets */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
        {littleThingsData.map((item, index) => {
          const rotation = (index % 3 === 0 ? -2 : index % 3 === 1 ? 2.5 : -1.5);
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.12, duration: 0.7 }}
              onClick={() => setActiveItem(item)}
              whileHover={{ rotate: 0, scale: 1.03, y: -5 }}
              style={{ transform: `rotate(${rotation}deg)` }}
              className="paper-texture text-slate-800 p-6 rounded-xl shadow-xl border border-amber-900/10 cursor-pointer flex flex-col justify-between min-h-[190px] relative group"
            >
              <div className="flex justify-between items-center mb-3">
                <span className="font-serif text-sm font-semibold text-amber-900/80 tracking-wide">{item.trait}</span>
                <Heart className="w-4 h-4 text-rose-700/60 group-hover:scale-125 transition-transform" />
              </div>

              <p className="font-handwriting text-xl text-slate-800 leading-snug">
                "{item.snippet}"
              </p>

              <div className="mt-4 pt-2 border-t border-amber-900/10 flex justify-end">
                <span className="text-[10px] font-sans text-amber-900/50 uppercase tracking-widest group-hover:text-amber-900 transition-colors">
                  Tap to read reflection →
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {activeItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setActiveItem(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 15 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md paper-texture text-slate-900 rounded-2xl p-8 shadow-2xl border border-amber-800/20"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 p-1.5 rounded-full bg-slate-900/10 hover:bg-slate-900/20 text-slate-800 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="flex items-center gap-2 text-rose-800 font-serif text-sm">
                  <Sparkles className="w-4 h-4" />
                  <span>{activeItem.trait}</span>
                </div>

                <p className="font-serif text-xl font-medium text-slate-900 leading-snug">
                  "{activeItem.snippet}"
                </p>

                <div className="pt-4 border-t border-amber-900/15">
                  <p className="font-handwriting text-xl text-slate-800 leading-relaxed">
                    {activeItem.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
