"use client";
import React from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { useResumeStore } from "@/app/store/store";
import download from "@/lib/Download";
import T1 from "./T1";
import { T1Props } from "@/types/preview";

const DownloadBtn = ({ data }: T1Props) => {
  const templateId = useResumeStore((s) => s.templateId);
  const DownFunc = () => {
    switch (templateId) {
      case 1:
        download(<T1 data={data} />);
        break;
      case 2:
        download(<T1 data={data} />);
        break;
      case 3:
        download(<T1 data={data} />);
        break;
      case 4:
        download(<T1 data={data} />);
        break;
      case 5:
        download(<T1 data={data} />);
        break;
      default:
        download(<T1 data={data} />);
    }
  };
  return (
    <Button
      onClick={DownFunc}
      className="fixed bottom-5 flex items-center cursor-pointer"
    >
      <p>Download Pdf </p>
      <Download />
    </Button>
  );
};

export default DownloadBtn;
