import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-black flex justify-center items-center">
      <Spinner  className="size-15"/>
    </div>
  );
};

export default loading;
