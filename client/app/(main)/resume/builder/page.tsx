"use client";

import { useResumeStore } from "@/app/store/store";

import ProgressBar from "@/components/Builder/Progress";
import Template from "@/components/Builder/Template";
import Header from "@/components/Builder/Header";
import Summary from "@/components/Builder/Summary";
import Education from "@/components/Builder/Education";
import Experience from "@/components/Builder/Experience";
import Skills from "@/components/Builder/Skills";
import Projects from "@/components/Builder/Projects";

import { motion, AnimatePresence, Variants } from "motion/react";

/* -------------------------------------------------- */
/* Animation variants */
/* -------------------------------------------------- */
const stepVariants: Variants = {
  initial: {
    y: -40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
  exit: {
    y: 40,
    opacity: 0,
    transition: {
      duration: 0.25,
      ease: "easeIn",
    },
  },
};

const Page = () => {
  const step = useResumeStore((state) => state.step);
  const setStep = useResumeStore((state) => state.setStep);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-4">
      <div
        className="
          w-full
          max-w-6xl
          h-[85vh]
          rounded-2xl
          backdrop-blur-xs
          bg-background
          flex
          flex-col
          lg:flex-row
          overflow-hidden
        "
      >
        {/* LEFT / PROGRESS */}
        <div className="lg:w-1/4 w-full border-b lg:border-b-0 lg:border-r">
          <ProgressBar />
        </div>

        {/* RIGHT / CONTENT */}
        <div className="flex-1 h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="template"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <Template step={step} setStep={setStep} />
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="header"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <Header />
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="summary"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <Summary />
              </motion.div>
            )}

            {step === 4 && (
              <motion.div
                key="education"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <Education />
              </motion.div>
            )}

            {step === 5 && (
              <motion.div
                key="experience"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <Experience />
              </motion.div>
            )}

            {step === 6 && (
              <motion.div
                key="skills"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <Skills />
              </motion.div>
            )}

            {step === 7 && (
              <motion.div
                key="projects"
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                className="h-full"
              >
                <Projects />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Page;
