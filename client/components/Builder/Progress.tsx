"use client";
import { useResumeStore } from "@/app/store/store";
import React from "react";
import { Progress } from "../ui/progress";
import { motion } from "motion/react";

const ProgressBar = () => {
  const step = useResumeStore((state) => state.step);
  return (
    <div className="lg:w-2 relative lg:h-100 w-full h-2">
      <Progress
        mobileview={false}
        value={(step / 7) * 100}
        className="lg:absolute top-0 left-0 hidden lg:block rounded-none"
      />
      <Progress
        mobileview={true}
        value={(step / 7) * 100}
        className="lg:absolute top-0 left-0 lg:hidden block w-full rounded-none"
      />
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          top: `${(step / 7) * 100}%`,
        }}
        transition={{
          duration: 0.15,
          ease: "easeInOut",
        }}
        className="w-15 hidden rounded-full bg-primary text-black font-black absolute lg:flex justify-center items-center left-4"
      >
        {step} of 7
      </motion.div>
      <motion.div
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          left: `${(step / 7) * 80}%`,
        }}
        transition={{
          duration: 0.15,
          ease: "easeInOut",
        }}
        className="w-15 z-90 h-4 lg:hidden rounded-full bg-primary text-black font-black flex justify-center items-center top-3 absolute"
      >
        {step} of 7
      </motion.div>
    </div>
  );
};

export default ProgressBar;
