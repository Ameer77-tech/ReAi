import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import { TProps } from "@/types/preview";
import React from "react";
import Header from "./components/t1/Header";
import About from "./components/t1/About";
import Education from "./components/t1/Education";
import WorkExp from "./components/t1/WorkExp";
import Skills from "./components/t1/Skills";

const T1 = ({ data }: TProps) => {
  return (
    <>
      <div
        className={cn(
          `bg-white w-[800px] aspect-[1/1.414] p-10`,
          manrope.className,
          "antialiased"
        )}
      >
        <Header
          data={{ header: data?.header, contact: data?.contact_information }}
        />
        <About data={data?.professional_summary} />
        <Skills data={data?.key_skills} />
        <WorkExp data={data?.work_experience} />
        <Education data={data?.education} />
      </div>
    </>
  );
};

export default T1;
