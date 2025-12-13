"use client";

import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { quicksand } from "@/fonts/Fonts";
import { motion, type Variants } from "framer-motion";
import GradientShine from "./GradientShine";

const parentVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      staggerChildren: 0.25,
      delayChildren: 0.2,
    },
  },
};

const childVariants: Variants = {
  initial: {
    opacity: 0,
    y: 16,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Hero = () => {
  return (
    <motion.div
      variants={parentVariants}
      initial="initial"
      animate="animate"
      className="min-h-screen flex justify-center items-center"
      id="home"
    >
      <Card className="border-0 bg-transparent shadow-none items-center">
        <GradientShine>
          <motion.div
            initial={{ opacity: 0, y: 3, width: 0 }}
            animate={{ opacity: 1, y: 0, width: "auto" }}
            transition={{ delay: 1, duration: 0.4 }}
            className="bg-transparent overflow-hidden"
          >
            <div
              className="
              inline-flex items-center gap-2
              rounded-full px-4 py-1.5
              bg-white/10 backdrop-blur-md
              border border-white/20
              text-xs uppercase tracking-wider
              text-white/80
              shadow-lg whitespace-nowrap
            "
            >
              <span className="h-1.5 w-1.5 rounded-full bg-primary"></span>
              AI-Powered · ATS-Optimized
            </div>
          </motion.div>
        </GradientShine>
        <motion.div variants={childVariants}>
          <CardTitle className="text-4xl lg:text-6xl text-center uppercase lg:w-200 bg-linear-to-r bg-clip-text text-transparent from-primary to-white md:w-150 font-black">
            Build a Professional Resume with AI
          </CardTitle>
        </motion.div>

        <motion.div variants={childVariants}>
          <CardDescription className="text-center w-90 text-sm lg:w-120 lg:text-md md:text-md bg-linear-to-r bg-clip-text text-transparent from-white from-20% to-white/50">
            Enter your details once and generate a clean, ATS-friendly resume
            instantly. No signup required.
          </CardDescription>
        </motion.div>

        <motion.div variants={childVariants}>
          <CardFooter>
            <Button
              className={`rounded-xl ${quicksand.className} font-black antialiased cursor-pointer py-7 text-background bg-linear-to-r from-primary from-50% to-background/60`}
            >
              Generate My Resume <ArrowRight />
            </Button>
          </CardFooter>
        </motion.div>
      </Card>
    </motion.div>
  );
};

export default Hero;
