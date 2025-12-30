import T1 from "@/components/Preview/T1";
import DownloadBtn from "@/components/Preview/DownloadBtn";

type PageProps = {
  params: {
    id: string;
  };
};

const Page = async ({ params }: PageProps) => {
  const { id } = await params;

  const apiUrl = `${process.env.NEXT_PUBLIC_SERVER}/api/generate/${id}`;

  const reply = {
    success: true,
    message: "",
  };

  let res;

  try {
    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "content-type": "application/json",
      },
      cache: "no-store",
    });

    res = await response.json();

    if (!res.success) {
      reply.success = false;
      reply.message = res.reply || res.error;
      console.log(res.reply || res.error);
    } else {
      reply.success = true;
    }
  } catch (err) {
    console.log(err);
    reply.success = false;
    reply.message = "Something Went Wrong";
  }

  return reply.success ? (
    <div className="flex justify-center items-start min-h-screen overflow-scroll p-10">
      <T1 data={res.resume} />
      <DownloadBtn />
    </div>
  ) : (
    <p className="text-center text-4xl">{reply.message}</p>
  );
};

export default Page;
