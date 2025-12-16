"use client";

import * as React from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

function Progress({
  className,
  value,
  mobileview = false,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root> & {
  mobileview?: boolean;
}) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "relative overflow-hidden rounded-full bg-transparent",
        mobileview
          ? "h-2 w-[60%]" // mobile → horizontal bar
          : "w-2 h-full", // desktop → vertical bar
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-primary h-full w-full transition-transform"
        style={{
          transform: mobileview
            ? `translateX(-${100 - (value || 0)}%)`
            : `translateY(-${100 - (value || 0)}%)`,
        }}
      />
    </ProgressPrimitive.Root>
  );
}

export { Progress };
