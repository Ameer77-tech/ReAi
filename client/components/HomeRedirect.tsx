"use client";
import { Button } from "./ui/button";
import nProgress from "nprogress";
import { redirect } from "next/navigation";
import { HomeIcon } from "@heroicons/react/24/outline";

const HomeRedirect = () => {
  return (
    <div className="absolute top-3 left-5">
      <Button
        onClick={() => {
          nProgress.start();
          redirect("/");
        }}
        variant={"ghost"}
        size={"sm"}
      >
        <HomeIcon></HomeIcon>
      </Button>
    </div>
  );
};

export default HomeRedirect;
