import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import type { TProps } from "@/types/preview";
import Header from "./components/t4/Header";
import About from "./components/t4/About";
import Skills from "./components/t4/Skills";
import WorkExp from "./components/t4/WorkExp";
import Projects from "./components/t4/Projects";
import Education from "./components/t4/Education";

const T4 = ({ data }: TProps) => {
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

export default T4;
