import { Spinner } from "@/components/ui/spinner";
import React from "react";

const loading = () => {
  return (
    <div className="fixed inset-0 z-50 bg-secondary flex justify-center items-center">
      <Spinner className="size-10" />
    </div>
  );
};

export default loading;
