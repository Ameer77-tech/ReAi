"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function VantaDots({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let DOTS: any;

    async function initVanta() {
      const THREE = (await import("three")).THREE || (await import("three"));
      (window as any).THREE = THREE;

      DOTS = (await import("vanta/dist/vanta.dots.min")).default;

      if (vantaRef.current && !vantaEffect.current) {
        vantaEffect.current = DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          minHeight: 200,
          minWidth: 200,
          backgroundColor: 0x1a1a1a,
          showLines: false,
        });
      }
    }

    initVanta();

    return () => {
      vantaEffect.current?.destroy();
    };
  }, []);

  return (
    <>
      {/* Vanta background */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={vantaRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      />

      {/* Scrollable content */}
      <div style={{ position: "relative" }}>{children}</div>
    </>
  );
}
