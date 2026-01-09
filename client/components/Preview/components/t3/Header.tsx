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
    <Card className="bg-transparent rounded-none border-0 shadow-none gap-1 p-0 border-r-5 border-r-cyan-900">
      <CardContent className="text-black font-bold text-sm w-full p-0">
        <div className="flex gap-1 items-center ">
          {data?.contact?.email ?? ""}
        </div>
        <div className="flex gap-1 items-center mt-2">
          {data?.contact?.phone ?? ""}
        </div>
        <div className="flex gap-1 items-center mt-2">
          {data?.contact?.location ?? ""}
        </div>
      </CardContent>
    </Card>
  );
};

export default Header;
