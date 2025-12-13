"use client";

import React from "react";
import { Card, CardDescription, CardFooter, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import { quicksand } from "@/fonts/Fonts";
import { motion, type Variants } from "framer-motion";

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
    >
      <Card className="border-0 bg-transparent shadow-none items-center">
        
        <motion.div variants={childVariants}>
          <CardTitle className="text-4xl lg:text-6xl text-center uppercase lg:w-200 bg-linear-to-r bg-clip-text text-transparent from-primary to-white md:w-150 font-black">
            Build a Professional Resume with AI
          </CardTitle>
        </motion.div>

        <motion.div variants={childVariants}>
          <CardDescription className="text-center w-90 text-sm lg:w-120 lg:text-md md:text-md bg-linear-to-r bg-clip-text text-transparent from-white from-20% to-white/50">
            Enter your details once and generate a clean, ATS-friendly resume instantly.
            No signup required.
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
