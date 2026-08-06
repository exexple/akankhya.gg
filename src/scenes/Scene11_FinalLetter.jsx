import React, { useState } from 'react';
import { motion } from 'framer-motion';
import letterData from '../data/letter.json';
import { Feather, Heart } from 'lucide-react';

export const Scene11_FinalLetter = () => {
  const [readComplete, setReadComplete] = useState(false);

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-3xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Stationery Paper Container */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="w-full paper-texture text-slate-900 rounded-3xl p-8 sm:p-14 shadow-2xl border border-amber-800/20 relative space-y-8"
      >
        {/* Subtle Decorative Header */}
        <div className="flex items-center justify-between border-b border-amber-900/15 pb-4">
          <div className="flex items-center gap-2 text-amber-900/60 text-xs font-serif tracking-widest uppercase">
            <Feather className="w-4 h-4 text-amber-800" />
            <span>A Letter For You</span>
          </div>
          <span className="font-handwriting text-base text-amber-900/60">August 6</span>
        </div>

        {/* Salutation */}
        <h2 className="font-serif text-2xl sm:text-3xl text-amber-950 font-semibold tracking-wide">
          {letterData.salutation}
        </h2>

        {/* Letter Paragraphs */}
        <div className="space-y-6">
          {letterData.paragraphs.map((paragraph, index) => (
            <motion.p
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.25 + 0.5, duration: 0.8 }}
              className="font-handwriting text-xl sm:text-2xl text-slate-800 leading-relaxed font-normal"
            >
              {paragraph}
            </motion.p>
          ))}
        </div>

        {/* Signoff */}
        <div className="pt-6 border-t border-amber-900/15 flex flex-col items-end space-y-1">
          <span className="font-serif text-sm text-amber-900/70 italic">{letterData.signoff}</span>
          <span className="font-handwriting text-2xl text-amber-950 font-bold">Always</span>
        </div>

        {/* Lingering Final Quiet Line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.2, duration: 1.5 }}
          className="mt-12 pt-8 text-center border-t border-amber-900/10 space-y-3"
        >
          <p className="font-serif text-xl sm:text-2xl text-amber-950 font-light italic">
            "{letterData.closingLine}"
          </p>
          <div className="flex justify-center text-amber-800/40">
            <Heart className="w-4 h-4 fill-amber-800/20" />
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};
