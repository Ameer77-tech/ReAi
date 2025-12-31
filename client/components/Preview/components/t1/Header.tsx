import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import type { ContactInformation, HeaderSchema } from "@/types/preview";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { LocationEdit } from "lucide-react";
import React from "react";

type HeaderProps = {
  data?: {
    header?: HeaderSchema;
    contact?: ContactInformation;
  };
};

const Header = ({ data }: HeaderProps) => {

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none border-b-2 border-black place-items-center gap-2">
      <CardTitle className="text-5xl text-black font-black tracking-wide">
        {data?.header?.full_name ?? ""}
      </CardTitle>
      <CardContent className="capitalize text-xl text-black/70 font-bold tracking-wide">
        {data?.header?.professional_title ?? ""}
      </CardContent>
      <CardFooter className="text-black/60 text-sm justify-between w-full">
        <div className="flex gap-1 items-center mt-2">
          <PhoneIcon className="size-4 text-black" />{" "}
          {data?.contact?.phone ?? ""}
        </div>
        <div className="flex gap-1 items-center mt-2">
          <EnvelopeIcon className="size-4 text-black" />{" "}
          {data?.contact?.email ?? ""}
        </div>
        <div className="flex gap-1 items-center mt-2">
          <LocationEdit className="size-4 text-black" />{" "}
          {data?.contact?.location ?? ""}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Header;
