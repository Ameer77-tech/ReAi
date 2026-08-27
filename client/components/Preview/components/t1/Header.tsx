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
  const contactItems = [
    data?.contact?.location,
    data?.contact?.email,
    data?.contact?.phone,
    data?.contact?.linkedin,
    data?.contact?.website,
    data?.contact?.github,
  ].filter(Boolean);

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none gap-1 p-0">
      <CardTitle className="text-4xl font-bold tracking-wide uppercase text-black">
        {data?.header?.full_name ?? ""}
      </CardTitle>
      <CardContent className="uppercase text-black text-base font-bold tracking-wide p-0">
        {data?.header?.professional_title ?? ""}
      </CardContent>
      {contactItems.length > 0 && (
        <CardFooter className="text-black/70 text-xs w-full p-0 mt-1 flex flex-wrap items-center gap-x-2">
          {contactItems.map((item, idx) => (
            <React.Fragment key={idx}>
              <span>{item}</span>
              {idx < contactItems.length - 1 && <span className="text-black/40">|</span>}
            </React.Fragment>
          ))}
        </CardFooter>
      )}
    </Card>
  );
};

export default Header;
