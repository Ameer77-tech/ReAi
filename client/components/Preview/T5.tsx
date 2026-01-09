"use client";

import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import Header from "./components/t5/Header";
import About from "./components/t5/About";
import Education from "./components/t5/Education";
import WorkExp from "./components/t5/WorkExp";
import Skills from "./components/t5/Skills";
import type { TProps } from "@/types/preview";

const T5 = ({ data }: TProps) => {
  return (
    <>
      <div
        className={cn(
          "bg-white lg:scale-100 md:scale-100 origin-top-left lg:max-w-[800px] aspect-[1/1.414] p-6 sm:p-8 md:p-10",
          manrope.className,
          "antialiased mx-auto"
        )}
      >
        <Header
          data={{ header: data?.header, contact: data?.contact_information }}
        />
        <About data={data?.professional_summary} />
        <Education data={data?.education} />
        <WorkExp data={data?.work_experience} />
        <Skills data={data?.key_skills} />
      </div>
    </>
  );
};

export default T5;
