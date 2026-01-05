import T1 from "@/components/Preview/T1";
import DownloadBtn from "@/components/Preview/DownloadBtn";
import T2 from "@/components/Preview/T2";
import T3 from "@/components/Preview/T3";
import T4 from "@/components/Preview/T4";
import T5 from "@/components/Preview/T5";
import ChangeTemplate from "@/components/Preview/components/Toptions";
import { HomeIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import nProgress from "nprogress";
import { redirect } from "next/navigation";
import HomeRedirect from "@/components/HomeRedirect";

type PageProps = {
  params: {
    id: string;
  };
  searchParams: {
    template: string;
  };
};

const Page = async ({ params, searchParams }: PageProps) => {
  const { id } = await params;
  const sp = await searchParams;
  const template = parseInt(sp.template) || 1;
  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER}/api/generate/${id}`;

  const reply = {
    success: true,
    message: "",
  };

  let res;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      cache: "no-store",
    });

    res = await response.json();

    if (!res.success) {
      reply.success = false;
      reply.message = res.reply || res.error;
      console.log(res.reply || res.error);
    } else {
      reply.success = true;
    }
  } catch (err) {
    console.log(err);
    reply.success = false;
    reply.message = "Something Went Wrong";
  }

  return reply.success ? (
    <>
      <HomeRedirect />
      <div className="flex justify-evenly items-start min-h-screen overflow-scroll p-10">
        {template === 5 ? (
          <T5 data={res.resume} />
        ) : template === 1 ? (
          <T1 data={res.resume} />
        ) : template === 2 ? (
          <T2 data={res.resume} />
        ) : template === 3 ? (
          <T3 />
        ) : template === 4 ? (
          <T4 />
        ) : (
          <T5 data={res.resume} />
        )}
        <ChangeTemplate t={template} />
        <DownloadBtn data={res.resume} />
      </div>
    </>
  ) : (
    <p className="text-center text-4xl">{reply.message}</p>
  );
};

export default Page;
