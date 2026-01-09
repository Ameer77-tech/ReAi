import { Card, CardContent } from "@/components/ui/card";
import React from "react";
import type { PreviewData } from "@/types/preview";

type AboutProps = {
  data?: PreviewData["professional_summary"];
};

const About = ({ data }: AboutProps) => {
  if (!data) return null;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none mt-4 gap-1 p-0 pb-3">
      {/* Heading */}
      <div className="flex items-center gap-5">
        <h2 className="text-sm font-semibold text-black">Summary</h2>

        {/* Divider line */}
        <div className="w-full h-px bg-black/30" />
      </div>
      {/* Content */}
      <CardContent className="p-0 text-black font-medium text-sm leading-relaxed">
        {data}
      </CardContent>
    </Card>
  );
};

export default About;
