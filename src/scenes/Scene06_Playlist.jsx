import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useExperience } from '../context/ExperienceContext';
import playlistData from '../data/playlist.json';
import { Play, Pause, Disc, SkipForward, SkipBack, Music2 } from 'lucide-react';

export const Scene06_Playlist = () => {
  const {
    currentTrackIndex,
    setCurrentTrackIndex,
    isPlayingAudio,
    setIsPlayingAudio,
    isMuted,
    audioRef
  } = useExperience();

  const currentTrack = playlistData[currentTrackIndex];

  const handlePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlayingAudio) {
      audioRef.current.pause();
      setIsPlayingAudio(false);
    } else {
      audioRef.current.play().then(() => {
        setIsPlayingAudio(true);
      }).catch(err => {
        console.log("Audio playback error:", err);
      });
    }
  };

  const handleTrackChange = (newIdx) => {
    setCurrentTrackIndex(newIdx);
    if (audioRef.current) {
      audioRef.current.src = playlistData[newIdx].src;
      audioRef.current.play().then(() => {
        setIsPlayingAudio(true);
      }).catch(() => {});
    }
  };

  return (
    <div className="relative min-h-screen w-full py-20 px-6 max-w-4xl mx-auto flex flex-col items-center justify-center z-10">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-3 mb-12"
      >
        <span className="text-amber-400/80 text-xs uppercase tracking-widest font-sans">Chapter V</span>
        <h2 className="font-serif text-3xl sm:text-4xl text-amber-100 font-light tracking-wide">
          A Listening Room for You
        </h2>
        <p className="font-sans text-sm text-amber-200/60 max-w-md mx-auto">
          Three songs chosen specifically for your quiet moments. Put on your headphones and let music speak.
        </p>
      </motion.div>

      {/* Main Vinyl Record Player Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full glass-panel rounded-3xl p-8 sm:p-10 border border-amber-400/20 shadow-2xl flex flex-col md:flex-row items-center gap-10"
      >
        {/* Spinning Vinyl Record Visual */}
        <div className="relative w-56 h-56 sm:w-64 sm:h-64 flex-shrink-0 flex items-center justify-center">
          <motion.div
            animate={{ rotate: isPlayingAudio ? 360 : 0 }}
            transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            className="w-full h-full rounded-full bg-slate-950 border-4 border-amber-900/40 p-3 shadow-2xl flex items-center justify-center relative overflow-hidden"
          >
            {/* Vinyl Grooves Pattern */}
            <div className="absolute inset-2 rounded-full border border-amber-100/10 pointer-events-none" />
            <div className="absolute inset-6 rounded-full border border-amber-100/10 pointer-events-none" />
            <div className="absolute inset-10 rounded-full border border-amber-100/10 pointer-events-none" />
            
            {/* Center Album Art Disc */}
            <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-amber-400/40 shadow-md relative">
              <img
                src={currentTrack.cover}
                alt={currentTrack.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/20" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-slate-900 border border-amber-300" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Track Details & Player Controls */}
        <div className="flex-1 space-y-6 w-full text-center md:text-left">
          <div className="space-y-1">
            <span className="text-xs font-sans uppercase tracking-widest text-amber-400/80">Track {currentTrackIndex + 1} of 3</span>
            <h3 className="font-serif text-2xl sm:text-3xl text-amber-100 font-medium">
              {currentTrack.title}
            </h3>
            <p className="font-sans text-xs text-amber-200/60">
              {currentTrack.artist} • {currentTrack.duration}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-400/15">
            <p className="font-handwriting text-lg text-amber-200/90 leading-relaxed">
              "{currentTrack.note}"
            </p>
          </div>

          {/* Audio Controls */}
          <div className="flex items-center justify-center md:justify-start gap-5 pt-2">
            <button
              onClick={() => handleTrackChange((currentTrackIndex - 1 + playlistData.length) % playlistData.length)}
              aria-label="Previous Track"
              className="p-3 rounded-full bg-slate-900/60 border border-amber-400/20 text-amber-200 hover:bg-slate-800 transition-colors"
            >
              <SkipBack className="w-5 h-5" />
            </button>

            <button
              onClick={handlePlayPause}
              aria-label={isPlayingAudio ? "Pause" : "Play"}
              className="p-4 rounded-full bg-gradient-to-r from-amber-500 to-amber-400 text-slate-950 shadow-[0_0_25px_rgba(251,191,36,0.4)] hover:scale-105 transition-transform"
            >
              {isPlayingAudio ? <Pause className="w-6 h-6 fill-current" /> : <Play className="w-6 h-6 fill-current ml-0.5" />}
            </button>

            <button
              onClick={() => handleTrackChange((currentTrackIndex + 1) % playlistData.length)}
              aria-label="Next Track"
              className="p-3 rounded-full bg-slate-900/60 border border-amber-400/20 text-amber-200 hover:bg-slate-800 transition-colors"
            >
              <SkipForward className="w-5 h-5" />
            </button>
          </div>

          {/* Track Selection Tabs */}
          <div className="flex items-center justify-center md:justify-start gap-2 pt-2">
            {playlistData.map((t, idx) => (
              <button
                key={t.id}
                onClick={() => handleTrackChange(idx)}
                className={`px-3 py-1 rounded-full text-xs font-sans transition-all ${
                  idx === currentTrackIndex
                    ? 'bg-amber-400/20 border border-amber-400/40 text-amber-200'
                    : 'bg-slate-900/40 border border-transparent text-amber-200/40 hover:text-amber-200'
                }`}
              >
                {t.title}
              </button>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};
