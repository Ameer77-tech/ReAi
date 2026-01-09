"use client";

import { useEffect, useRef } from "react";
import { motion } from "motion/react";

export default function VantaDots({ children }: { children: React.ReactNode }) {
  const vantaRef = useRef<HTMLDivElement | null>(null);
  const vantaEffect = useRef<any>(null);

  useEffect(() => {
    let DOTS: any;

    async function initVanta() {
      const threeModule = await import("three");
      const THREE =
        (threeModule as any).THREE ??
        (threeModule as any).default ??
        (threeModule as any);
      (window as any).THREE = THREE;

      // vanta has no types; silence TypeScript for this dynamic import
      // @ts-ignore
      DOTS = (await import("vanta/dist/vanta.dots.min")).default as any;

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
