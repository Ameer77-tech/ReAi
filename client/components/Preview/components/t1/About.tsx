import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

const About = () => {
  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none border-b-2 border-black gap-2">
      <CardTitle className="text-black font-extrabold text-2xl uppercase tracking-wide">
        About Me
      </CardTitle>
      <CardContent className="text-black/70 p-0">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam fuga
        voluptate quia eveniet iure necessitatibus ipsam totam rem dolorum, quae
        cum aperiam et laborum deserunt dolor vitae saepe esse beatae!voluptate
        quia eveniet iure necessitatibus ipsam totam rem dolorum, quae cum
        aperiam et laborum deserunt dolor vitae saepe esse beatae!
      </CardContent>
    </Card>
  );
};

export default About;
