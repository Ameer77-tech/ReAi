"use client";
import React from "react";

import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import Header from "./components/t1/Header";
import About from "./components/t1/About";
import Education from "./components/t1/Education";
import WorkExp from "./components/t1/WorkExp";
import Skills from "./components/t1/Skills";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { renderToString } from "react-dom/server";

const T1 = () => {
  const download = () => {
    const rendered = renderToString(<T1 />);
    const html = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <style>
      /* inject compiled Tailwind CSS here */
    </style>
  </head>
  <body>
    ${rendered}
  </body>
</html>
`;
    
    console.log(html);
  };

  return (
    <>
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
        <WorkExp />
        <Skills />
      </div>
      <Button
        onClick={download}
        className="fixed bottom-5 flex items-center cursor-pointer"
      >
        <p>Download Pdf </p>
        <Download />
      </Button>
    </>
  );
};

export default T1;
