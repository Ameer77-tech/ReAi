"use client";

import React, { useRef, useState, useEffect } from "react";

interface A4PageWrapperProps {
  children: React.ReactNode;
}

export default function A4PageWrapper({ children }: A4PageWrapperProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageBreaks, setPageBreaks] = useState<number[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateBreaks = () => {
      // Find the actual rendered template div inside wrapper
      const templateEl = el.firstElementChild as HTMLElement | null;
      const targetEl = templateEl || el;

      const width = targetEl.clientWidth;
      const totalHeight = targetEl.scrollHeight;

      if (width === 0) return;

      // Printable A4 aspect ratio accounting for standard PDF print margins (~10mm top/bottom)
      const singlePageHeight = width * 1.30;
      const numPages = Math.max(1, Math.ceil(totalHeight / singlePageHeight));
      setTotalPages(numPages);

      const breaks: number[] = [];
      for (let i = 1; i < numPages; i++) {
        breaks.push(i * singlePageHeight);
      }
      setPageBreaks(breaks);
    };

    updateBreaks();

    const observer = new ResizeObserver(updateBreaks);
    observer.observe(el);
    if (el.firstElementChild) {
      observer.observe(el.firstElementChild);
    }
    window.addEventListener("resize", updateBreaks);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", updateBreaks);
    };
  }, []);

  return (
    <div className="flex flex-col items-center gap-3 w-full max-w-[800px]">
      {/* Page Count Status Bar */}
      <div className="w-full flex flex-wrap items-center justify-between px-4 py-2 rounded-lg text-xs font-medium bg-card border border-border shadow-sm gap-2">
        <div className="flex items-center gap-2">
          <span className="text-base">📄</span>
          <span>
            <strong className="text-foreground">A4 Print Estimate:</strong>{" "}
            <span className="font-bold text-primary">{totalPages} Page{totalPages > 1 ? "s" : ""}</span>
          </span>
        </div>

        {totalPages > 1 ? (
          <span className="text-amber-500 font-bold bg-amber-500/10 border border-amber-500/20 px-2.5 py-1 rounded-full text-[11px] flex items-center gap-1">
            <span>⚠️</span> Overflows 1 Page (Red line indicates page break)
          </span>
        ) : (
          <span className="text-emerald-500 font-bold bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full text-[11px] flex items-center gap-1">
            <span>✓</span> Perfect 1-Page Layout
          </span>
        )}
      </div>

      {/* Template Container with Dynamic Page Break Lines */}
      <div ref={containerRef} className="relative w-full shadow-2xl rounded-sm overflow-visible">
        {children}

        {/* Page Break Guide Lines */}
        {pageBreaks.map((breakTop, index) => (
          <div
            key={index}
            className="absolute left-0 right-0 border-b-2 border-dashed border-red-500/80 z-30 pointer-events-none"
            style={{ top: `${breakTop}px` }}
          >
            {/* Left label: Outside left edge */}
            <span className="absolute left-0 -translate-x-[calc(100%+8px)] -translate-y-1/2 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider whitespace-nowrap">
              Page {index + 1} End
            </span>

            {/* Right label: Outside right edge */}
            <span className="absolute right-0 translate-x-[calc(100%+8px)] -translate-y-1/2 bg-red-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded shadow uppercase tracking-wider whitespace-nowrap">
              Page {index + 2} Start
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
