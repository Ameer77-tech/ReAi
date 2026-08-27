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
          "bg-white w-full max-w-[800px] min-h-[1040px] p-6 sm:p-7 md:p-8",
          manrope.className,
          "antialiased mx-auto"
        )}
        style={{ width: "100%", maxWidth: "800px", minHeight: "1040px", boxSizing: "border-box" }}
      >
        <div
          className="grid grid-cols-[200px_1fr] h-auto gap-5"
          style={{ display: "grid", gridTemplateColumns: "200px 1fr", gap: "20px" }}
        >
          {/* Left column - compact sidebar */}
          <aside
            className="flex flex-col gap-4 border-r border-r-gray-300 pr-4"
            style={{ display: "flex", flexDirection: "column", gap: "16px", borderRight: "1px solid #d1d5db", paddingRight: "16px" }}
          >
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
          <main
            className="flex flex-col gap-3 pl-1"
            style={{ display: "flex", flexDirection: "column", gap: "12px", paddingLeft: "4px" }}
          >
            <div className="text-left mb-1">
              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-gray-700">
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
