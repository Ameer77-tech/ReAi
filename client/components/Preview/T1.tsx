import React from "react";
import { Card, CardContent, CardFooter, CardTitle } from "../ui/card";
import { manrope } from "@/fonts/Fonts";
import { cn } from "@/lib/utils";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { LocateIcon, LocationEdit } from "lucide-react";

const T1 = () => {
  return (
    <div
      className={cn(
        `bg-white w-[800px] aspect-[1/1.414] p-10`,
        manrope.className,
        "antialiased"
      )}
    >
      <Card className="bg-transparent rounded-none border-0 shadow-none border-b-2 border-black place-items-center gap-2">
        <CardTitle className="text-5xl text-black font-black tracking-wide">
          AMEER SHAIK
        </CardTitle>
        <CardContent className="capitalize text-xl text-black/70 font-bold tracking-wide">
          Full Stack Developer
        </CardContent>
        <CardFooter className="text-black/60 text-sm justify-between w-full">
          <div className="flex gap-1 items-center mt-2">
            <PhoneIcon className="size-4 text-black" /> +91 9912437786{" "}
          </div>
          <div className="flex gap-1 items-center mt-2">
            <EnvelopeIcon className="size-4 text-black" />{" "}
            ameershaik.cs@gmail.com{" "}
          </div>
          <div className="flex gap-1 items-center mt-2">
            <LocationEdit className="size-4 text-black" /> Kakinada,
            AndhraPradesh{" "}
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default T1;
