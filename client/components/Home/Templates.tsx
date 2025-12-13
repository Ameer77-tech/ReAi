import React from "react";
import t1 from "@/public/templates/1.jpg";
import t2 from "@/public/templates/2.jpg";
import t4 from "@/public/templates/4.png";
import t5 from "@/public/templates/5.png";
import t6 from "@/public/templates/6.png";
import t7 from "@/public/templates/7.png";
import Image from "next/image";
import { cn } from "@/lib/utils";

const templates = [t1, t2, t4, t5, t6, t7];

const Templates = () => {
  return (
    <div className="p-6" id="templates">
      <h1 className="text-4xl font-extrabold mb-20 text-center">
        Example Templates
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 place-items-center">
        {templates.map((template, index) => (
          <div
            key={index}
            className={cn(
              "w-full lg:w-100 lg:h-134 h-64 overflow-hidden rounded-lg shadow-md",
              index === 6 && "lg:col-span-3 md:col-span-3"
            )}
          >
            <Image
              width={1080}
              height={1920}
              src={template.src || template}
              alt={`Template ${index + 1}`}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
