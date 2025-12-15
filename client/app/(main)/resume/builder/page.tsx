"use client";
import { useResumeStore } from "@/app/store/store";
import ProgressBar from "@/components/Builder/Progress";
import { Button } from "@/components/ui/button";

const page = () => {
  const step = useResumeStore((state) => state.step);
  const setStep = useResumeStore((state) => state.setStep);
  return (
    <div className="min-h-screen w-full flex lg:flex-row flex-col items-center justify-evenly">
      <ProgressBar />
      <Button onClick={() => step < 7 && setStep(step + 1)}>Next Step</Button>
      <Button onClick={() => step > 1 && setStep(step - 1)}>prev Step</Button>
    </div>
  );
};

export default page;
