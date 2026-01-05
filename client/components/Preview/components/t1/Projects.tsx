import { Card, CardContent, CardTitle } from "@/components/ui/card";
import React from "react";

type ProjectItem = {
  name: string;
  description?: string;
  link?: string;
  tools_used?: string[];
  outcomes?: string[];
};

type ProjectsProps = {
  data?: ProjectItem[];
};

const Projects = ({ data }: ProjectsProps) => {
  if (!data || data.length === 0) return null;

  return (
    <Card className="bg-transparent rounded-none border-0 shadow-none gap-2 mt-4 p-0">
      <CardTitle className="text-black italic text-sm bg-stone-300 rounded-full py-1 px-5 uppercase tracking-wide">
        Projects
      </CardTitle>

      <CardContent className="p-0 text-black">
        {data.map((p, idx) => (
          <div key={idx} className="mb-5">
            {/* Header row */}
            <div className="grid grid-cols-3 gap-2 items-start">
              <div className="col-span-2">
                <p className="text-lg leading-tight font-bold">
                  {idx + 1}) {p.name}
                </p>
              </div>

              {p.link && (
                <p className="text-xs text-right whitespace-nowrap text-blue-600">
                  {p.link}
                </p>
              )}
            </div>

            {/* Description */}
            {p.description && (
              <p className="mt-1 text-xs leading-relaxed max-w-[90%]">
                {p.description}
              </p>
            )}

            {/* Tools Used */}
            {p.tools_used && p.tools_used.length > 0 && (
              <p className="mt-1 text-xs">
                <span className="font-semibold">Tools Used:</span>{" "}
                {p.tools_used.join(", ")}
              </p>
            )}

            {/* Outcomes */}
            {p.outcomes && p.outcomes.length > 0 && (
              <ul className="mt-1 ml-4 list-disc text-xs">
                {p.outcomes.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Projects;
