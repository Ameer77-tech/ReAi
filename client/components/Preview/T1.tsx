import React from "react";

import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import Header from "./components/t1/Header";
import About from "./components/t1/About";
import Education from "./components/t1/Education";

const T1 = () => {
  return (
    <div
      className={cn(
        `bg-white w-[800px] aspect-[1/1.414] p-10`,
        manrope.className,
        "antialiased"
      )}
    >
      <Header />
      <About />
      <Education />
    </div>
  );
};

export default T1;
