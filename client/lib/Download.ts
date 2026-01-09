"use client"
import { renderToString } from "react-dom/server";
import { Slide, toast } from "react-toastify";

 const download = async (
  comp: React.ReactNode,
  setPending: (v: boolean) => void
): Promise<void> => {
    const rendered = renderToString(comp);
    const html = `
    ${rendered}
`;
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_CLIENT}/api/generate`,
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ html: html }),
        }
      );
      if (!res.ok) {
        alert("failed");
        return;
      } else {
        const blob = await res.blob();
        const url = window.URL.createObjectURL(blob);

        const link = document.createElement("a");
        link.href = url;
        link.download = "resume.pdf";
        document.body.appendChild(link);
        link.click();
        link.remove();
        window.URL.revokeObjectURL(url);
      }
      setPending(false)
      toast.success("Download Success", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
      transition: Slide,
    });
    } catch (err) {
      console.log(err);
    }
  };

  export default download