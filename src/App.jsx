import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExperienceProvider, useExperience } from './context/ExperienceContext';
import { AtmosphereBackground } from './components/atmosphere/AtmosphereBackground';
import { AmbientAudioToggle } from './components/ui/AmbientAudioToggle';
import { ExperienceProgressHint } from './components/ui/ExperienceProgressHint';

import { Scene01_BeforeEverything } from './scenes/Scene01_BeforeEverything';
import { Scene02_TheDoor } from './scenes/Scene02_TheDoor';
import { Scene04_LittleThings } from './scenes/Scene04_LittleThings';
import { Scene06_Playlist } from './scenes/Scene06_Playlist';
import { Scene07_ThingsYouNeedToHear } from './scenes/Scene07_ThingsYouNeedToHear';
import { Scene08_Impact } from './scenes/Scene08_Impact';
import { Scene09_Wishes } from './scenes/Scene09_Wishes';
import { Scene10_BirthdayRoom } from './scenes/Scene10_BirthdayRoom';
import { Scene11_FinalLetter } from './scenes/Scene11_FinalLetter';

const SCENE_COMPONENTS = [
  Scene01_BeforeEverything,
  Scene02_TheDoor,
  Scene04_LittleThings,
  Scene06_Playlist,
  Scene07_ThingsYouNeedToHear,
  Scene08_Impact,
  Scene09_Wishes,
  Scene10_BirthdayRoom,
  Scene11_FinalLetter,
];

function ExperienceApp() {
  const { currentScene, audioRef } = useExperience();
  const CurrentSceneComponent = SCENE_COMPONENTS[currentScene] || Scene01_BeforeEverything;

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-[#090b10] text-[#e8e4df] select-none font-sans">
      {/* Background HTML5 Audio Element for Audio Orchestration */}
      <audio
        ref={audioRef}
        loop
        preload="auto"
        src="https://cdn.pixabay.com/download/audio/2022/05/27/audio_1808fbf07a.mp3?filename=soft-piano-ambient-112199.mp3"
      />

      {/* Dynamic Environmental Background */}
      <AtmosphereBackground />

      {/* Persistent UI Controls */}
      <AmbientAudioToggle />
      <ExperienceProgressHint />

      {/* Main Scene Orchestrator Container */}
      <main className="relative z-10 w-full min-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScene}
            initial={{ opacity: 0, scale: 0.98, filter: "blur(4px)" }}
            animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, scale: 1.02, filter: "blur(4px)" }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="w-full min-h-screen flex flex-col justify-center items-center"
          >
            <CurrentSceneComponent />
          </motion.div>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <ExperienceProvider>
      <ExperienceApp />
    </ExperienceProvider>
  );
}
