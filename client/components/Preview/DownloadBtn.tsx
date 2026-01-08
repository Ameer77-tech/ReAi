"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Download } from "lucide-react";
import { useResumeStore } from "@/app/store/store";
import download from "@/lib/Download";
import T1 from "./T1";
import { TProps } from "@/types/preview";
import { Spinner } from "../ui/spinner";
import T5 from "./T5";
import T4 from "./T4";
import T3 from "./T3";
import T2 from "./T2";
import { useSearchParams } from "next/navigation";

const DownloadBtn = ({ data }: TProps) => {
  const sp = useSearchParams();
  const templateId = Number(sp.get("template") ?? 1);
  const [pending, setPending] = useState(false);

  const DownFunc = () => {
    setPending(true);
    switch (templateId) {
      case 1:
        download(<T1 data={data} />, setPending);
        break;
      case 2:
        download(<T2 data={data} />, setPending);
        break;
      case 3:
        download(<T3 data={data} />, setPending);
        break;
      case 4:
        download(<T4 />, setPending);
        break;
      case 5:
        download(<T5 data={data} />, setPending);
        break;
      default:
        download(<T5 data={data} />, setPending);
    }
  };
  return (
    <>
      {pending ? (
        <Button
          disabled={pending}
          className="fixed bottom-5 flex items-center cursor-pointer "
        >
          <p>
            <Spinner />
          </p>
        </Button>
      ) : (
        <Button
          disabled={pending}
          onClick={DownFunc}
          className="fixed bottom-5 flex items-center cursor-pointer "
        >
          <p>Download Pdf </p>
          <Download />
        </Button>
      )}
    </>
  );
};

export default DownloadBtn;
