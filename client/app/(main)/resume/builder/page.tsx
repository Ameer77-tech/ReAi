"use client";
import { useResumeStore } from "@/app/store/store";
import GlowBorder from "@/components/Builder/BorderGlow";
import ProgressBar from "@/components/Builder/Progress";
import { Button } from "@/components/ui/button";

const Page = () => {
  const step = useResumeStore((state) => state.step);
  const setStep = useResumeStore((state) => state.setStep);
  return (
    <div className="min-h-screen w-full flex lg:flex-row flex-col items-center justify-evenly">
      <GlowBorder>
        <div className="lg:w-full w-full h-full lg:h-full rounded-2xl backdrop-blur-xs bg-background flex lg:flex-row flex-col justify-evenly items-center">
          <ProgressBar />
        </div>
      </GlowBorder>
    </div>
  );
};

export default Page;
