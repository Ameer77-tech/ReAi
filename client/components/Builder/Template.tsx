import React from "react";
import t1 from "@/public/templates/1.jpg";
import t2 from "@/public/templates/2.jpg";
import t3 from "@/public/templates/3.png";
import t4 from "@/public/templates/4.png";
import t5 from "@/public/templates/5.jpg";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRightEndOnRectangleIcon } from "@heroicons/react/24/solid";
import { useResumeStore } from "@/app/store/store";
import { cn } from "@/lib/utils";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import { motion, AnimatePresence, Variants } from "motion/react";
import { animate } from "motion";

type Props = {
  setStep: void;
  step: number;
};

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    y: 5,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.35,
      ease: "easeOut",
    },
  },
};

const Template = ({ setStep, step }: Props) => {
  const templates = [t2, t3, t4, t5, t1];
  const templatedId = useResumeStore((state) => state.templateId);
  const setTemplatedId = useResumeStore((state) => state.setTemplate);

  return (
    <div className="h-full flex flex-col overflow-hidden">
      {/* TOP */}
      <h1 className="px-10 lg:text-3xl text-2xl my-10">
        Select Your Desired Template
      </h1>

      {/* MIDDLE */}
      <div className="flex-1 overflow-y-auto">
        <motion.div
          className="p-10 grid lg:grid-cols-2 gap-10 place-items-center"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {templates.map((t, idx) => (
            <Tooltip key={idx}>
              <TooltipTrigger asChild>
                <motion.div
                  variants={itemVariants}
                  layout={false}
                  style={{ willChange: "transform, opacity" }}

                  onClick={() => setTemplatedId(idx)}
                  className={cn(
                    "transform-gpu hover:-translate-y-3 active:scale-95 rounded-xl overflow-hidden h-84 w-64 cursor-pointer transition-all",
                    templatedId === idx &&
                      "border-2 border-indigo-500 outline-2 outline-indigo-300 outline-offset-2"
                  )}
                >
                  <Image
                    src={t}
                    width={1080}
                    height={1920}
                    alt={`template ${idx + 1}`}
                    className="h-full w-full object-cover"
                  />
                </motion.div>
              </TooltipTrigger>

              <TooltipContent className="hidden lg:block">
                Select Template {idx + 1}
              </TooltipContent>
            </Tooltip>
          ))}
        </motion.div>
      </div>

      {/* BOTTOM */}
      <div className="px-10 py-6 flex justify-end border-t">
        <Button
          onClick={() => step < 7 && setStep(step + 1)}
          className="flex items-center gap-2"
        >
          Next
          <ArrowRightEndOnRectangleIcon className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Template;
