import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import memoriesData from '../data/memories.json';
import { Coffee, Ticket, Flower2, FileText, BookOpen, Compass, X, Sparkles } from 'lucide-react';
import { soundFX } from '../utils/audioSynth';

const ICON_MAP = {
  Coffee: Coffee,
  Ticket: Ticket,
  Flower2: Flower2,
  FileText: FileText,
  BookOpen: BookOpen,
  Compass: Compass,
};

export const Scene03_Timeline = () => {
  const [selectedMemory, setSelectedMemory] = useState(null);

  const handleSelectMemory = (mem) => {
    soundFX.playChime(523.25, 0.6);
    setSelectedMemory(mem);
  };

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter III</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          The Winding Memory Path
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          Touch any keepsake along the trail to uncover the quiet moments we've gathered together.
        </p>
      </motion.div>

      {/* Keepsake Trail Items Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 sm:gap-8 w-full">
        {memoriesData.map((item, index) => {
          const IconComponent = ICON_MAP[item.icon] || Sparkles;
          return (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.15, duration: 0.8 }}
              onClick={() => handleSelectMemory(item)}
              whileHover={{ y: -8, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass-card p-5 rounded-2xl flex flex-col items-center text-center cursor-pointer group hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.2)] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-400/20 flex items-center justify-center text-amber-300 group-hover:bg-amber-400/20 group-hover:text-amber-200 transition-colors mb-3">
                <IconComponent className="w-6 h-6" />
              </div>
              <span className="font-serif text-xs text-amber-300/80 font-medium mb-1">{item.object}</span>
              <span className="font-sans text-xs text-amber-100/90 font-light line-clamp-1">{item.title}</span>
            </motion.div>
          );
        })}
      </div>

      {/* Keepsake Memory Card Overlay */}
      <AnimatePresence>
        {selectedMemory && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md"
            onClick={() => setSelectedMemory(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-lg glass-panel rounded-3xl p-6 sm:p-8 border border-amber-300/30 shadow-2xl overflow-hidden"
            >
              <button
                onClick={() => setSelectedMemory(null)}
                aria-label="Close memory"
                className="absolute top-4 right-4 p-2 rounded-full bg-amber-500/10 hover:bg-amber-500/20 text-amber-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-4">
                <div className="relative h-56 w-full rounded-2xl overflow-hidden border border-amber-200/20 shadow-md">
                  <img
                    src={selectedMemory.photo}
                    alt={selectedMemory.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
                  <span className="absolute bottom-3 left-4 text-xs font-sans text-amber-200/90 px-3 py-1 rounded-full bg-slate-900/70 border border-amber-400/20 backdrop-blur-sm">
                    {selectedMemory.date}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-serif text-2xl text-amber-100 font-normal">
                    {selectedMemory.title}
                  </h3>
                  <p className="font-sans text-xs text-amber-300/80 italic">
                    "{selectedMemory.caption}"
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-amber-950/30 border border-amber-400/15">
                  <p className="font-handwriting text-lg text-amber-100/95 leading-relaxed">
                    {selectedMemory.letter}
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
