import { motion } from "motion/react";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const GradientShine = ({ children }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-2xl">
      {/* Glow sweep */}
      <motion.div
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent
          via-primary/30
          to-transparent
          pointer-events-none
        "
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{
          repeat: Infinity,
          duration: 4,
          ease: "linear",
        }}
      />

      {children}
    </div>
  );
};

export default GradientShine;
