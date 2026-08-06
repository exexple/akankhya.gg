# ✨ For Akankhya — A Cinematic Memory Journey

A handcrafted, intimate, frontend-only birthday experience built exclusively for **Akankhya**. Designed like an interactive short film to evoke curiosity, wonder, nostalgia, comfort, admiration, reflection, hope, celebration, and quiet peace.

---

## 🌟 Narrative Architecture (11 Chapters)

1. **Scene 1 — Before Everything**: Typing text reveal on a dark void (*"Every person has a story... This one begins with you."*).
2. **Scene 2 — The Door**: Warm wooden doorway bathed in candlelight with an "Enter" camera walk-through.
3. **Scene 3 — The Winding Timeline**: Keepsake path (coffee mug, ticket, flower, letter, book, shell) opening non-modal memory cards.
4. **Scene 4 — The Little Things**: Floating polaroids revealing ordinary cherished traits.
5. **Scene 5 — Memory Gallery**: Layered 3D photo wall with polaroid lift & flip handwritten notes.
6. **Scene 6 — A Playlist for You**: Vintage listening room with 3 curated audio tracks and background music persistence.
7. **Scene 7 — Things You Need to Hear**: Interactive star constellation illuminating personal affirmations.
8. **Scene 8 — Your Impact on Everyone**: Night sky with floating lanterns celebrating her warmth and positive impact.
9. **Scene 9 — Wishes for Tomorrow**: 5 interactive micro-environments (Travel, Career, Health, Dreams, Peace).
10. **Scene 10 — Birthday Room (Emotional Peak)**: Warm fairy-lit sanctuary with cake, interactive candle lighting, sound synthesis, and confetti burst.
11. **Scene 11 — Final Letter (Quiet Landing)**: Minimalist stationery ending with a lingering quiet message (*"Happy Birthday, Akankhya. This little world will always be here whenever you wish to revisit it."*).

---

## 🛠️ Technology Stack

- **Framework**: React 19 + Vite
- **Styling**: Tailwind CSS v4 + Custom CSS Variables
- **Motion & Depth**: Framer Motion
- **Sound Synthesis**: Web Audio API Sound Effects Engine (`audioSynth.js`) + HTML5 Audio Controller
- **Icons**: Lucide React
- **Celebration Effects**: Canvas Confetti

---

## 💻 Project Structure

```text
src/
├── assets/         # Design assets & media
├── components/
│   ├── atmosphere/ # Starfield, Fireflies, DustMotes, Lanterns, ShootingStar
│   └── ui/         # AmbientAudioToggle, ExperienceProgressHint
├── context/
│   └── ExperienceContext.jsx # Orchestrator & state management
├── data/
│   ├── memories.json
│   ├── littleThings.json
│   ├── playlist.json
│   ├── affirmations.json
│   ├── impact.json
│   ├── wishes.json
│   └── letter.json
├── scenes/         # Scenes 1 through 11
├── styles/
│   └── index.css   # Custom CSS tokens & keyframes
├── utils/
│   └── audioSynth.js # Web Audio API sound synthesis
├── App.jsx
└── main.jsx
```

---

## 🚀 Running Locally

```bash
# Install dependencies
npm install

# Start Vite dev server
npm run dev

# Build for production
npm run build
```
