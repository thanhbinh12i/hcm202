import React, { useState, useEffect } from "react";
import { useSpring, AnimatePresence } from "framer-motion";
import { sections } from "./data/content";
import { Section } from "./components/Section";
import { SectionCoreContent } from "./components/SectionCoreContent";
import { FocusPanel } from "./components/FocusPanel";

const clamp = (val, min, max) => Math.min(Math.max(val, min), max);

function App() {
  const [targetScroll, setTargetScroll] = useState(0);
  const [isLocked, setIsLocked] = useState(false);

  // Spring physics for smooth depth transition
  const scrollProgress = useSpring(0, {
    stiffness: 50,
    damping: 20,
    mass: 0.8,
  });

  // Update spring when target changes
  useEffect(() => {
    scrollProgress.set(targetScroll);
  }, [targetScroll, scrollProgress]);

  useEffect(() => {
    const handleWheel = (e) => {
      // Prevent native scrolling
      e.preventDefault();

      if (isLocked) return;

      // Vertical scroll delta
      // Normalize delta slightly
      const sensitivity = 0.002;
      const delta = e.deltaY * sensitivity;

      setTargetScroll((prev) => clamp(prev + delta, 0, sections.length - 1));
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => window.removeEventListener("wheel", handleWheel);
  }, [isLocked]);

  return (
    <div style={{ position: "relative", width: "100vw", height: "100vh" }}>
      {/* Cinematic Vignette */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "radial-gradient(circle at center, transparent 30%, #000 120%)",
          zIndex: 200, // Above sections (which are max ~100), below focus panel
          pointerEvents: "none",
        }}
      />

      {/* Render Sections */}
      {sections.map((section, i) => {
        return (
          <Section
            key={section.id}
            data={section}
            index={i}
            scrollProgress={scrollProgress}
            setLocked={setIsLocked}
          />
        );
      })}
    </div>
  );
}

export default App;
