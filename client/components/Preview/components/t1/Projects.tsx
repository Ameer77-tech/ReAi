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
          <div key={idx} className="mb-4">
            {/* Header row */}
            <div className="grid grid-cols-[1fr_auto] gap-2 items-baseline">
              <p className="text-sm font-bold leading-tight">
                {idx + 1}) {p.name}
              </p>

              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-right text-blue-600 hover:underline truncate max-w-[260px]"
                >
                  {p.link}
                </a>
              )}
            </div>

            {/* Description */}
            {p.description && (
              <p className="mt-1 text-xs leading-relaxed">
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
              <ul className="mt-1 ml-4 list-disc text-xs space-y-0.5">
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
