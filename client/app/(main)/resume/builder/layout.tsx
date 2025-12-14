import VantaDots from "@/components/bg";
import React from "react";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <VantaDots>{children}</VantaDots>;
};

export default layout;
