import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import type { ContactInformation, HeaderSchema } from "@/types/preview";
import React from "react";

type HeaderProps = {
  data?: {
    header?: HeaderSchema;
    contact?: ContactInformation;
  };
};

const Header = ({ data }: HeaderProps) => {
  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none gap-1 p-0">
      <CardTitle className="text-4xl font-bold tracking-wide text-secondary">
        {data?.header?.full_name ?? ""}
      </CardTitle>
      <CardContent className="capitalize text-black text-md  font-bold tracking-wide p-0">
        {data?.header?.professional_title ?? ""}
      </CardContent>
      <CardFooter className="text-black/60 text-xs w-full p-0">
        <div className="flex gap-1 items-center border-r-2 pr-2">
          {" "}
          {data?.contact?.location ?? ""}
        </div>
        <div className="flex gap-1 items-center  border-r-2 px-2">
          {" "}
          {data?.contact?.email ?? ""}
        </div>
        <div className="flex gap-1 items-center border-r-2 px-2">
          {data?.contact?.phone ?? ""}
        </div>
      </CardFooter>
    </Card>
  );
};

export default Header;
