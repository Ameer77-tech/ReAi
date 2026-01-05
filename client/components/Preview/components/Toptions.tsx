"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Card } from "@/components/ui/card";
import { Check } from "lucide-react";
import { useState } from "react";
import nProgress from "nprogress";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const templates = [
  { id: 1, name: "Template 1" },
  { id: 2, name: "Template 2" },
  { id: 3, name: "Template 3" },
  { id: 4, name: "Template 4" },
  { id: 5, name: "Template 5" },
];

type props = {
  t: number;
};

export default function ChangeTemplate({ t }: props) {
  const [active, setActive] = useState<number>(t ?? 1);
  const router = useRouter();
  const pathName = usePathname();
  const searchParams = useSearchParams();

  const params = new URLSearchParams(searchParams.toString());

  return (
    <Card className="w-[260px] p-3 space-y-2 bg-background border-border">
      <h3 className="text-sm font-semibold text-muted-foreground">
        Change Template
      </h3>

      <div className="space-y-2">
        {templates.map((template) => {
          const isActive = active === template.id;

          return (
            <motion.div
              key={template.id}
              layout
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => {
                setActive(template.id);
                nProgress.start();
                params.set("template", String(template.id));
                router.push(`${pathName}?${params.toString()}`);
              }}
              className={cn(
                "relative cursor-pointer rounded-lg px-4 py-3 flex items-center justify-between",
                "border transition-colors",
                isActive
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              <span className="text-sm font-medium">{template.name}</span>

              {isActive && (
                <motion.span
                  layoutId="active-indicator"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center justify-center"
                >
                  <Check className="w-4 h-4" />
                </motion.span>
              )}
            </motion.div>
          );
        })}
      </div>
    </Card>
  );
}
