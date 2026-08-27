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
    <Card className="bg-transparent rounded-none border-0 shadow-none p-0">
      <CardTitle className="text-cyan-900 text-base font-bold tracking-wide mb-1">
        Projects
      </CardTitle>

      <CardContent className="p-0 text-black">
        {data.map((p, idx) => (
          <div key={idx} className="mb-3">
            {/* Header row */}
            <div>
              <p className="text-sm leading-tight font-bold text-black">
                {p.name}
              </p>
              {p.link && (
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs italic text-gray-600 hover:underline block truncate max-w-[340px]"
                >
                  {p.link}
                </a>
              )}
            </div>

            {/* Description */}
            {p.description && (
              <p className="mt-0.5 font-medium text-xs leading-relaxed text-gray-800">
                {p.description}
              </p>
            )}

            {/* Tools Used */}
            {p.tools_used && p.tools_used.length > 0 && (
              <p className="mt-0.5 text-xs font-semibold text-gray-800">
                <span className="font-bold text-black">Tools Used:</span>{" "}
                {p.tools_used.join(", ")}
              </p>
            )}

            {/* Outcomes */}
            {p.outcomes && p.outcomes.length > 0 && (
              <ul className="mt-0.5 ml-4 list-disc text-xs italic text-gray-600 leading-relaxed space-y-0.5">
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
