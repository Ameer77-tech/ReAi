import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0">
      <CardContent className="text-black text-xs font-semibold w-full p-0 space-y-1.5 break-all">
        {data?.contact?.email && (
          <div className="flex gap-1 items-center">
            {data.contact.email}
          </div>
        )}
        {data?.contact?.phone && (
          <div className="flex gap-1 items-center">
            {data.contact.phone}
          </div>
        )}
        {data?.contact?.location && (
          <div className="flex gap-1 items-center">
            {data.contact.location}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Header;
