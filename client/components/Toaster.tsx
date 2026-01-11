"use client";

import { useEffect } from "react";
import { toast, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Toaster = () => {
  useEffect(() => {
    toast.info("Pdf Expires in under 10 minutes", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      theme: "dark",
      transition: Slide,
    });
  }, []);

  return null;
};

export default Toaster;
