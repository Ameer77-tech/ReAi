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
import Image from "next/image";

/* -------------------------------------------------- */
/* Animation variants */
/* -------------------------------------------------- */
const stepVariants: Variants = {
  initial: {
    y: 40,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    y: -40,
    opacity: 0,
    transition: {
      duration: 0.2,
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
          lg:rounded-2xl
          backdrop-blur-xs
          flex
          flex-col
          lg:flex-row
          overflow-hidden
        "
      >
        {/* LEFT / PROGRESS */}
        <div className="lg:w-1/4 w-full lg:h-auto border-b lg:border-b-0 lg:border-r relative">
          <ProgressBar />
          <div className="lg:absolute opacity-0 animate-fade-in hidden lg:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
            <Image
              src="/logo.png"
              alt="logo"
              width={100}
              height={300}
              className="animate-bounce duration-500"
            />
            <p className="text-center bg-clip-text text-transparent bg-linear-to-r from-white">
              ReAi
            </p>
          </div>
        </div>

        {/* RIGHT / CONTENT */}
        <div className="flex-1 h-full relative overflow-hidden">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                variants={stepVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                key="template"
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
