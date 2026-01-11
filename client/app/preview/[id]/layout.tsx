import VantaDots from "@/components/bg";
import Toaster from "@/components/Toaster";
import React from "react";
import { Slide, ToastContainer } from "react-toastify";

type props = {
  children: React.ReactNode;
};

const layout = ({ children }: props) => {
  return (
    <VantaDots>
      {children}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Slide}
      />
      <Toaster />
    </VantaDots>
  );
};

export default layout;
