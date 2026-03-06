"use client";

import { useState, useEffect } from "react";

const phrases = [
  "I will not help you.",
  "But I will guide you, asking you the right questions so you may see the answers for yourself to help yourself.",
  "",
];

const PHASE_DURATIONS = [4000, 7000, 3000]; // ms per phase: short, long read, pause
const FADE_DURATION = 800; // ms for fade transition

export default function CoachingPulse() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    function nextPhase() {
      setVisible(false);
      setTimeout(() => {
        setIndex((prev) => {
          const next = (prev + 1) % phrases.length;
          timeout = setTimeout(nextPhase, PHASE_DURATIONS[next]);
          return next;
        });
        setVisible(true);
      }, FADE_DURATION);
    }

    timeout = setTimeout(nextPhase, PHASE_DURATIONS[0]);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="flex items-center justify-center mt-8">
      <div className="breathing-circle flex items-center justify-center">
        <p
          className="font-heading text-sm md:text-base font-semibold text-white text-center px-8 leading-snug transition-opacity duration-700 ease-in-out"
          style={{ opacity: visible ? 1 : 0 }}
          aria-live="polite"
        >
          {phrases[index]}
        </p>
      </div>
    </div>
  );
}
