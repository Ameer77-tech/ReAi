import { type Variants } from "framer-motion";

export const parentVariants: Variants = {
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

export const childVariants: Variants = {
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

export const heroParentVariants: Variants = {
  initial: {},
  hover: {
    transition: {
      staggerChildren: 0.006,
    },
  },
};
export const topLetter: Variants = {
  initial: { y: 0 },
  hover: {
    y: "-110%",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};

export const bottomLetter: Variants = {
  initial: { y: "100%" },
  hover: {
    y: "0%",
    transition: { duration: 0.25, ease: "easeOut" },
  },
};