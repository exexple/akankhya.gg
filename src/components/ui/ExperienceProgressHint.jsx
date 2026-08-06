import React from 'react';
import { useExperience } from '../../context/ExperienceContext';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const ExperienceProgressHint = () => {
  const { currentScene, totalScenes, sceneNames, nextScene, prevScene, goToScene, isTransitioning } = useExperience();

  // Hide on Scene 0 (Before Everything) for complete cinematic mystery
  if (currentScene === 0) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="fixed bottom-6 inset-x-0 z-40 flex flex-col items-center justify-center gap-2 pointer-events-none"
    >
      {/* Chapter Indicator */}
      <div className="pointer-events-auto flex items-center gap-4 px-4 py-2 rounded-full bg-slate-950/70 border border-amber-400/15 backdrop-blur-md shadow-xl text-amber-200/70 text-xs font-medium tracking-wider">
        <button
          onClick={prevScene}
          disabled={currentScene <= 0 || isTransitioning}
          aria-label="Previous scene"
          className="p-1 rounded-full hover:bg-amber-400/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronLeft className="w-4 h-4 text-amber-300" />
        </button>

        <div className="flex items-center gap-2">
          <span className="text-amber-400/90 font-serif text-sm">
            Chapter {currentScene} of {totalScenes - 1}
          </span>
          <span className="text-amber-100/30">|</span>
          <span className="text-amber-100/90 font-sans tracking-normal">
            {sceneNames[currentScene]}
          </span>
        </div>

        <button
          onClick={nextScene}
          disabled={currentScene >= totalScenes - 1 || isTransitioning}
          aria-label="Next scene"
          className="p-1 rounded-full hover:bg-amber-400/10 disabled:opacity-30 disabled:hover:bg-transparent transition-all"
        >
          <ChevronRight className="w-4 h-4 text-amber-300" />
        </button>
      </div>

      {/* Discrete Progress Dots */}
      <div className="pointer-events-auto flex items-center gap-1.5 opacity-60 hover:opacity-100 transition-opacity">
        {Array.from({ length: totalScenes }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToScene(idx)}
            disabled={isTransitioning}
            aria-label={`Jump to scene ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all duration-500 ${
              idx === currentScene
                ? 'w-6 bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.8)]'
                : 'w-1.5 bg-amber-100/30 hover:bg-amber-200/60'
            }`}
          />
        ))}
      </div>
    </motion.div>
  );
};
