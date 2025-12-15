import VantaDots from "@/components/bg";
import React from "react";
import ProgressBar from "../../../../components/Builder/Progress";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <VantaDots>
      {children}
    </VantaDots>
  );
};

export default layout;
