import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";
import type { PreviewData } from "@/types/preview";

type AboutProps = {
  data?: PreviewData["professional_summary"];
};

const About = ({ data }: AboutProps) => {
  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none gap-2">
      <CardTitle className="text-cyan-900 text-lg tracking-wide">
        Summary
      </CardTitle>
      <CardContent className="text-black text-sm font-medium p-0">
        {data ??
          "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga voluptate quia eveniet iure necessitatibus ipsam totam rem dolorum, quae cum aperiam et laborum deserunt dolor vitae saepe esse beatae!"}
      </CardContent>
    </Card>
  );
};

export default About;
