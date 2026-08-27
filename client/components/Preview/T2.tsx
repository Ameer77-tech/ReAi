import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import type { TProps } from "@/types/preview";
import React from "react";
import Header from "./components/t2/Header";
import About from "./components/t2/About";
import Education from "./components/t2/Education";
import WorkExp from "./components/t2/WorkExp";
import Skills from "./components/t2/Skills";
import Projects from "./components/t2/Projects";

const T2 = ({ data }: TProps) => {
  return (
    <>
      <div
        className={cn(
          "bg-white w-full max-w-[800px] min-h-[1040px] p-6 sm:p-7 md:p-8",
          manrope.className,
          "antialiased mx-auto"
        )}
      >
        <Header
          data={{ header: data?.header, contact: data?.contact_information }}
        />
        <About data={data?.professional_summary} />
        <Skills data={data?.key_skills} />
        <WorkExp data={data?.work_experience} />
        <Education data={data?.education} />
        <Projects data={data?.projects} />
      </div>
    </>
  );
};

export default T2;
 