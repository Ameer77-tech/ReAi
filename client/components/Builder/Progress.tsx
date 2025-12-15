"use client";
import { useResumeStore } from "@/app/store/store";
import React from "react";
import { Progress } from "../ui/progress";
import { motion } from "motion/react";

const ProgressBar = () => {
  const step = useResumeStore((state) => state.step);
  return (
    <div className="relative w-2 h-100">
      <Progress value={(step / 7) * 100} className="absolute top-0 left-0 duration-700" />
      <motion.div
        animate={{
          top: `${(step / 7) * 100}%`,
        }}
        transition={{
          duration: 0.15,
          ease: "easeInOut",
        }}
        // style={{
        //   top: `${(step / 7) * 100}%`,
        // }}
        className="w-5 h-5 rounded-full bg-primary text-black font-black absolute flex justify-center items-center left-4"
      >
        {step}
      </motion.div>
    </div>
  );
};

export default ProgressBar;
