import React, { useState } from 'react';
import { motion } from 'framer-motion';
import memoriesData from '../data/memories.json';
import { RotateCw } from 'lucide-react';
import { soundFX } from '../utils/audioSynth';

export const Scene05_Gallery = () => {
  const [flippedCardId, setFlippedCardId] = useState(null);

  const handleCardClick = (id) => {
    soundFX.playFlip();
    setFlippedCardId(flippedCardId === id ? null : id);
  };

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-6xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-16"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter IV</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          The Memory Wall
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          Polaroids floating softly in space. Click to flip any memory and read what was written on the back.
        </p>
      </motion.div>

      {/* Hanging Memory Cards Wall */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 w-full">
        {memoriesData.map((mem, idx) => {
          const isFlipped = flippedCardId === mem.id;
          return (
            <motion.div
              key={mem.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.8 }}
              className="perspective-1000 h-[360px] w-full cursor-pointer group"
              onClick={() => handleCardClick(mem.id)}
            >
              <motion.div
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ duration: 0.8, ease: "easeInOut" }}
                className="relative w-full h-full preserve-3d"
              >
                {/* Front Side — Polaroid Photo */}
                <div className="absolute inset-0 backface-hidden bg-slate-900/90 border border-amber-200/20 rounded-2xl p-4 flex flex-col justify-between shadow-xl group-hover:border-amber-400/40 group-hover:shadow-[0_0_25px_rgba(212,175,55,0.2)] transition-all">
                  <div className="relative h-64 w-full rounded-xl overflow-hidden bg-slate-950">
                    <img
                      src={mem.photo}
                      alt={mem.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-2 right-2 p-1.5 rounded-full bg-black/60 backdrop-blur-md text-amber-200">
                      <RotateCw className="w-3.5 h-3.5" />
                    </div>
                  </div>
                  <div className="flex justify-between items-center px-1 pt-2">
                    <span className="font-serif text-sm text-amber-100 font-medium">{mem.title}</span>
                    <span className="font-sans text-[11px] text-amber-300/70">{mem.date}</span>
                  </div>
                </div>

                {/* Back Side — Handwritten Keepsake Letter */}
                <div
                  style={{ transform: "rotateY(180deg)" }}
                  className="absolute inset-0 backface-hidden paper-texture text-slate-900 rounded-2xl p-6 flex flex-col justify-between shadow-2xl border border-amber-800/20"
                >
                  <div className="flex justify-between items-center border-b border-amber-900/15 pb-2">
                    <span className="font-serif text-xs font-semibold text-amber-900">{mem.title}</span>
                    <span className="text-[10px] font-sans text-amber-900/60 uppercase">Flip Back ↺</span>
                  </div>

                  <p className="font-handwriting text-lg text-slate-800 leading-relaxed my-auto">
                    {mem.letter}
                  </p>

                  <div className="pt-2 border-t border-amber-900/15 text-right">
                    <span className="font-handwriting text-sm text-amber-950 italic">Always & Forever</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};
