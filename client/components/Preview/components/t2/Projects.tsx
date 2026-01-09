import { Card, CardContent } from "@/components/ui/card";
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
    <Card className="bg-transparent rounded-none border-0 shadow-none mt-4 p-0 pb-5 gap-0">
      {/* Section header */}
      <div className="flex items-center gap-5 mb-3">
        <h2 className="text-sm font-semibold text-black">Projects</h2>
        <div className="w-full h-px bg-black/30" />
      </div>

      <CardContent className="p-0 text-black space-y-6">
        {data.map((p, idx) => (
          <div
            key={idx}
            className="grid grid-cols-[260px_1fr] gap-6 items-start"
          >
            {/* LEFT COLUMN */}
            <div className="text-sm">
              <p className="font-semibold">{p.name}</p>

              {p.link && (
                <p className="text-xs text-blue-600 break-all">{p.link}</p>
              )}
            </div>

            {/* RIGHT COLUMN */}
            <div className="text-sm space-y-1">
              {p.description && (
                <p className="leading-relaxed">{p.description}</p>
              )}

              {p.tools_used && p.tools_used.length > 0 && (
                <p className="text-xs">
                  <span className="font-semibold">Tools:</span>{" "}
                  {p.tools_used.join(", ")}
                </p>
              )}

              {p.outcomes && p.outcomes.length > 0 && (
                <ul className="list-disc ml-4 text-sm space-y-1">
                  {p.outcomes.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default Projects;
