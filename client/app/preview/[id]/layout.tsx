import VantaDots from "@/components/bg";
import React from "react";

type props = {
  children: React.ReactNode;
};

const layout = ({ children }: props) => {
  return <VantaDots>{children}</VantaDots>;
};

export default layout;
