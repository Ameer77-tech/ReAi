import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import type { ContactInformation, HeaderSchema } from "@/types/preview";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { MapPin } from "lucide-react";
import React from "react";

type HeaderProps = {
  data?: {
    header?: HeaderSchema;
    contact?: ContactInformation;
  };
};

const Header = ({ data }: HeaderProps) => {
  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none border-b border-black p-0 mb-2">
      <CardTitle className="text-2xl sm:text-3xl text-black font-bold tracking-tight text-center">
        {data?.header?.full_name ?? ""}
      </CardTitle>

      {data?.header?.professional_title && (
        <CardContent className="capitalize text-sm font-semibold text-black/75 text-center p-0 mt-0.5">
          {data.header.professional_title}
        </CardContent>
      )}

      <CardFooter className="text-black/75 text-xs flex flex-wrap justify-center items-center gap-x-4 gap-y-1 p-0 py-2 w-full">
        {data?.contact?.phone && (
          <div className="flex gap-1 items-center">
            <PhoneIcon className="size-3.5 text-black" />
            <span>{data.contact.phone}</span>
          </div>
        )}
        {data?.contact?.email && (
          <div className="flex gap-1 items-center">
            <EnvelopeIcon className="size-3.5 text-black" />
            <span>{data.contact.email}</span>
          </div>
        )}
        {data?.contact?.location && (
          <div className="flex gap-1 items-center">
            <MapPin className="size-3.5 text-black" />
            <span>{data.contact.location}</span>
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default Header;
