import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import type { EducationItem } from "@/types/preview";
import E from "./E";

type EducationProps = {
  data?: EducationItem[];
};

const Education = ({ data }: EducationProps) => {
  if (!data || data.length === 0) return null;

  return (
    <Card className="bg-transparent border-0 shadow-none rounded-none mt-4 p-0 gap-2">
      {/* SECTION HEADER */}
      <div className="border-b border-black">
        <h2 className="text-lg font-bold uppercase text-black">Education</h2>
      </div>

      <CardContent className="p-0 space-y-5 text-black">
        {data.map((e, idx) => (
          <E
            key={idx}
            institute={e.institution}
            degree={e.degree}
            fieldOfStudy={e.field_of_study ?? ""}
            location={e.location ?? ""}
            endDate={e.graduation_year ?? ""}
            honors={e.honors ?? []}
          />
        ))}
      </CardContent>
    </Card>
  );
};

export default Education;
