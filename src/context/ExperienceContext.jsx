import React, { createContext, useContext, useState, useEffect, useRef } from 'react';

const ExperienceContext = createContext(null);

export const TOTAL_SCENES = 9;

export const SCENE_NAMES = [
  'Before Everything',
  'The Door',
  'The Little Things',
  'A Playlist for You',
  'Things You Need to Hear',
  'Your Impact',
  'Wishes for Tomorrow',
  'Birthday Room',
  'Final Letter'
];

export const ExperienceProvider = ({ children }) => {
  const [currentScene, setCurrentScene] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [easterEggsFound, setEasterEggsFound] = useState([]);
  const [candleLit, setCandleLit] = useState(false);

  const audioRef = useRef(null);

  // Synchronize environmental mood based on scene index
  const getEnvironmentMood = (sceneIdx) => {
    switch (sceneIdx) {
      case 0: return { timeOfDay: 'deep-night', particleType: 'dust', lighting: 'minimal-dark' };
      case 1: return { timeOfDay: 'dusk', particleType: 'dust', lighting: 'warm-doorway' };
      case 2: return { timeOfDay: 'golden-afternoon', particleType: 'paper-dust', lighting: 'soft-warm' };
      case 3: return { timeOfDay: 'cozy-lounge', particleType: 'dust', lighting: 'warm-amber' };
      case 4: return { timeOfDay: 'starlit-night', particleType: 'stars', lighting: 'starlight' };
      case 5: return { timeOfDay: 'midnight-lanterns', particleType: 'lanterns', lighting: 'lantern-glow' };
      case 6: return { timeOfDay: 'deep-space', particleType: 'fireflies', lighting: 'ethereal-cyan' };
      case 7: return { timeOfDay: 'birthday-warmth', particleType: 'warm-sparks', lighting: 'candle-peak' };
      case 8: return { timeOfDay: 'quiet-landing', particleType: 'minimal-stars', lighting: 'soft-paper' };
      default: return { timeOfDay: 'night', particleType: 'dust', lighting: 'dark' };
    }
  };

  const environment = getEnvironmentMood(currentScene);

  const goToScene = (index) => {
    if (isTransitioning || index < 0 || index >= TOTAL_SCENES) return;
    setIsTransitioning(true);
    setCurrentScene(index);
    setTimeout(() => {
      setIsTransitioning(false);
    }, 1200);
  };

  const nextScene = () => {
    goToScene(currentScene + 1);
  };

  const prevScene = () => {
    goToScene(currentScene - 1);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
    }
  };

  const triggerEasterEgg = (eggId) => {
    if (!easterEggsFound.includes(eggId)) {
      setEasterEggsFound((prev) => [...prev, eggId]);
    }
  };

  return (
    <ExperienceContext.Provider
      value={{
        currentScene,
        totalScenes: TOTAL_SCENES,
        sceneNames: SCENE_NAMES,
        isTransitioning,
        environment,
        goToScene,
        nextScene,
        prevScene,
        isMuted,
        toggleMute,
        isPlayingAudio,
        setIsPlayingAudio,
        currentTrackIndex,
        setCurrentTrackIndex,
        easterEggsFound,
        triggerEasterEgg,
        candleLit,
        setCandleLit,
        audioRef
      }}
    >
      {children}
    </ExperienceContext.Provider>
  );
};

export const useExperience = () => {
  const context = useContext(ExperienceContext);
  if (!context) {
    throw new Error('useExperience must be used within an ExperienceProvider');
  }
  return context;
};
