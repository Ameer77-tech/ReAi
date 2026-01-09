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
    <Card className="bg-transparent rounded-none border-0 shadow-none mt-4 p-0 gap-2">
      {/* SECTION HEADER */}
      <div className="border-b border-black">
        <h2 className="text-lg font-bold uppercase text-black">Projects</h2>
      </div>

      <CardContent className="p-0 text-black space-y-5">
        {data.map((p, idx) => (
          <div key={idx} className="space-y-1">
            {/* PROJECT TITLE */}
            <p className="font-bold text-sm">{p.name}</p>

            {/* LINK (optional, subtle like resume) */}
            {p.link && <p className="text-xs break-all">{p.link}</p>}

            {/* DESCRIPTION */}
            {p.description && <p className="text-sm font-medium">{p.description}</p>}

            {/* TOOLS */}
            {p.tools_used && p.tools_used.length > 0 && (
              <p className="text-sm">
                <span className="font-semibold">Tools:</span>{" "}
                {p.tools_used.join(", ")}
              </p>
            )}

            {/* BULLETS */}
            {p.outcomes && p.outcomes.length > 0 && (
              <ul className="list-disc ml-5 text-sm space-y-1">
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
