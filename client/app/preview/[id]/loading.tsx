"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Sparkles, Brain, Cpu, Wand2 } from "lucide-react";

const THINKING_MESSAGES = [
  { text: "Analyzing your background & key highlights...", icon: Brain },
  { text: "Optimizing experience & bullet points for ATS...", icon: Sparkles },
  { text: "Categorizing skills & formatting layout...", icon: Cpu },
  { text: "Polishing summary & fine-tuning phrasing...", icon: Wand2 },
  { text: "Finalizing your resume for instant preview...", icon: Sparkles },
];

export default function Loading() {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % THINKING_MESSAGES.length);
    }, 2200);

    return () => clearInterval(timer);
  }, []);

  const CurrentIcon = THINKING_MESSAGES[currentStep].icon;

  return (
    <div className="fixed inset-0 z-50 bg-background flex flex-col justify-center items-center px-4 overflow-hidden select-none">
      {/* Background ambient glow */}
      <div className="absolute w-[350px] h-[350px] bg-primary/10 rounded-full blur-[100px] pointer-events-none animate-pulse" />

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center max-w-sm text-center">
        {/* Animated AI Icon Shield */}
        <div className="relative mb-8 flex items-center justify-center">
          {/* Rotating outer ring */}
          <div className="absolute w-20 h-20 rounded-full border-2 border-primary/20 border-t-primary animate-spin" />

          {/* Inner pulsing orb */}
          <div className="w-14 h-14 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center shadow-lg shadow-primary/10 backdrop-blur-md">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ scale: 0.7, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.7, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <CurrentIcon className="w-6 h-6 text-primary" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Brand Subtitle */}
        <h2 className="text-xs font-semibold tracking-widest text-muted-foreground uppercase mb-3 flex items-center gap-1.5">
          <Sparkles className="w-3.5 h-3.5 text-primary animate-pulse" />
          Crafting Your Resume
        </h2>

        {/* Cycling Thinking Messages */}
        <div className="h-12 flex items-center justify-center w-full px-2">
          <AnimatePresence mode="wait">
            <motion.p
              key={currentStep}
              initial={{ y: 8, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -8, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
              className="text-base font-medium text-foreground leading-snug"
            >
              {THINKING_MESSAGES[currentStep].text}
            </motion.p>
          </AnimatePresence>
        </div>

        {/* Sleek Step Progress Indicator */}
        <div className="flex items-center gap-1.5 mt-6">
          {THINKING_MESSAGES.map((_, idx) => (
            <div
              key={idx}
              className={`h-1.5 rounded-full transition-all duration-500 ${
                idx === currentStep
                  ? "w-6 bg-primary"
                  : "w-1.5 bg-muted-foreground/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
