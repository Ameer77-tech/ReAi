"use client";
import Image from "next/image";
import Link from "next/link";
import { quicksand } from "@/fonts/Fonts";
import { Button } from "../ui/button";
import { ArrowRightCircleIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import SideBar from "./SideBar";
import { useRouter } from "next/navigation";
import nProgress from "nprogress";

const Header = () => {
  const router = useRouter();
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      <SideBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <header className="flex items-center lg:w-4/5 md:w-3/4 w-full justify-between px-8 py-4 bg-background/80 backdrop-blur-md fixed top-10 rounded-xl border left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center">
          <Image alt="logo" src="/logo.png" width={40} height={50} />
          <h1
            className={`${quicksand.className} text-2xl lg:text-2xl font-bold bg-linear-to-r from-primary to-primary/50 bg-clip-text text-transparent`}
          >
            REAI
          </h1>
        </div>

        <div className="items-center gap-5 hidden lg:flex">
          <p
            onClick={() => scrollToSection("home")}
            className="text-muted cursor-pointer hover:text-foreground transition"
          >
            Home
          </p>
          <p
            onClick={() => scrollToSection("templates")}
            className="text-muted cursor-pointer hover:text-foreground transition"
          >
            Templates
          </p>
        </div>
        <div className="flex gap-2 items-center">
          <Button
            onClick={() => {
              nProgress.start();
              router.push("/resume/builder");
            }}
            className="flex items-center gap-2"
          >
            Try It <ArrowRightCircleIcon className="w-5 h-5" />
          </Button>
          <div className="lg:hidden md:hidden">
            {isOpen ? (
              <p onClick={() => setIsOpen(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </p>
            ) : (
              <p onClick={() => setIsOpen(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                  />
                </svg>
              </p>
            )}
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
