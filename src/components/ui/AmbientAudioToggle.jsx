import React from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';
import { useExperience } from '../../context/ExperienceContext';
import { motion } from 'framer-motion';

export const AmbientAudioToggle = () => {
  const { isMuted, toggleMute, isPlayingAudio } = useExperience();

  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1, duration: 0.8 }}
      className="fixed top-6 right-6 z-50 flex items-center gap-3"
    >
      {isPlayingAudio && (
        <motion.div
          animate={{ scale: [1, 1.1, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-400/20 text-xs font-medium text-amber-200/80 backdrop-blur-md"
        >
          <Music className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span>Playing Music</span>
        </motion.div>
      )}

      <button
        onClick={toggleMute}
        aria-label={isMuted ? 'Unmute Audio' : 'Mute Audio'}
        className="p-3 rounded-full bg-slate-900/60 border border-amber-200/15 text-amber-100/80 hover:text-amber-200 hover:bg-slate-800/80 hover:border-amber-400/30 transition-all duration-300 backdrop-blur-md shadow-lg group"
      >
        {isMuted ? (
          <VolumeX className="w-4 h-4 text-amber-300/60 group-hover:text-amber-300" />
        ) : (
          <Volume2 className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
        )}
      </button>
    </motion.div>
  );
};
