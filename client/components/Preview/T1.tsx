import React from "react";

import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import Header from "./components/t1/Header";
import About from "./components/t1/About";
<<<<<<< HEAD
import Education from "./components/t1/Education";
=======
>>>>>>> 97352eabcc35a3a9bc7f527905cbcb623bfff37c

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
<<<<<<< HEAD
      <Education />
=======
>>>>>>> 97352eabcc35a3a9bc7f527905cbcb623bfff37c
    </div>
  );
};

export default T1;
