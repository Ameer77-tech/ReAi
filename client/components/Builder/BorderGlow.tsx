import { motion } from "framer-motion";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function GlowBorder({ children }: Props) {
  return (
    <div className="relative rounded-xl p-0.5 overflow-hidden lg:w-3/4 w-full h-180 lg:h-150">
      {/* animated glow */}
      <motion.div
        className="absolute inset-0 opacity-80"
        style={{
          backgroundImage:
            "conic-gradient(from 0deg, #f97316, #fdba74, #f97316)",
        }}
        animate={{ rotate: 360 }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* content */}
      {children}
    </div>
  );
}
