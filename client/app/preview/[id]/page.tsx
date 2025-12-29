"use client";
import T1 from "@/components/Preview/T1";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import download from "@/lib/Download";
import React from "react";
import { useResumeStore } from "@/app/store/store";

const Page = () => {
  const templateId = useResumeStore((s) => s.templateId);
  const DownFunc = () => {
    switch (templateId) {
      case 1:
        download(<T1 />);
        break;
      case 2:
        download(<T1 />);
        break;
      case 3:
        download(<T1 />);
        break;
      case 4:
        download(<T1 />);
        break;
      case 5:
        download(<T1 />);
        break;
      default:
        download(<T1 />);
    }
  };
  return (
    <div className="flex justify-center items-start min-h-screen overflow-scroll p-10">
      <T1 />
      <Button
        onClick={DownFunc}
        className="fixed bottom-5 flex items-center cursor-pointer"
      >
        <p>Download Pdf </p>
        <Download />
      </Button>
    </div>
  );
};

export default Page;
