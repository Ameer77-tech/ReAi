import React from "react";
import t1 from "@/public/templates/1.jpg";
import t2 from "@/public/templates/2.jpg";
import t3 from "@/public/templates/3.png";
import t4 from "@/public/templates/4.png";
import t5 from "@/public/templates/5.jpg";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const templates = [t1, t2, t3, t4, t5];

const Templates = () => {
  return (
    <div
      className="p-6 border border-secondary rounded-2xl backdrop-blur-xs bg-accent/10"
      id="templates"
    >
      <h1 className="text-4xl font-extrabold mb-20 text-center">Templates</h1>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 place-items-center">
        {templates.map((template, index) => (
          <motion.div
            initial={{
              y: 14,
              opacity: 0,
              filter: "blur(3px)",
            }}
            whileInView={{
              y: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            transition={{
              filter: {
                duration: 0.4,
              },
              delay: index * 0.1,
              duration: 0.7,
            }}
            viewport={{
              once: true,
            }}
            key={index}
            className={cn(
              "w-full lg:w-full lg:h-94 h-64 overflow-hidden rounded-lg shadow-md"
            )}
          >
            <Image
              width={1080}
              height={1920}
              src={template.src || template}
              alt={`Template ${index + 1}`}
              className="w-full h-full object-cover active:scale-105 hover:scale-105 transition-transform duration-300"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Templates;
