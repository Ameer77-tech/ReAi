import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import type { TProps } from "@/types/preview";
import Header from "./components/t3/Header";
import About from "./components/t3/About";
import Skills from "./components/t3/Skills";
import WorkExp from "./components/t3/WorkExp";
import Education from "./components/t3/Education";
import Projects from "./components/t3/Projects";
import React from "react";

const T3 = ({ data }: TProps) => {
  return (
    <>
      <div
        className={cn(
          "bg-white lg:scale-100 md:scale-100 origin-top-left lg:max-w-[800px] aspect-[1/1.414] p-6 sm:p-8 md:p-10",
          manrope.className,
          "antialiased mx-auto"
        )}
      >
        <div className="grid grid-cols-[1fr_1.6fr] h-auto gap-6">
          {/* Left column - compact sidebar */}
          <aside className="flex flex-col gap-6 border-r border-r-muted-foreground">
            <Header
              data={{
                header: data?.header,
                contact: data?.contact_information,
              }}
            />
            <Skills data={data?.key_skills} />
            <Education data={data?.education} />
          </aside>

          {/* Right column - main content */}
          <main className="flex flex-col">
            <div className="text-left">
              <h1 className="text-5xl font-bold leading-none text-gray-600 h-20 flex items-center">
                <span>{data?.header?.full_name ?? ""}</span>
              </h1>
            </div>

            <About data={data?.professional_summary} />
            <WorkExp data={data?.work_experience} />
            <Projects data={data?.projects} />
          </main>
        </div>
      </div>
    </>
  );
};

export default T3;
