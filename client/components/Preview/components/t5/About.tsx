import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import type { PreviewData } from "@/types/preview";

type AboutProps = {
  data?: PreviewData["professional_summary"];
};

const About = ({ data }: AboutProps) => {
  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0 mb-2">
      <CardTitle className="text-black font-bold text-base uppercase tracking-wide border-b border-black pb-0.5 mb-1.5">
        About Me
      </CardTitle>
      <CardContent className="text-gray-800 text-xs font-medium leading-relaxed p-0">
        {data ??
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga voluptate quia eveniet iure necessitatibus ipsam totam rem dolorum, quae cum aperiam et laborum deserunt dolor vitae saepe esse beatae!"}
      </CardContent>
    </Card>
  );
};

export default About;
