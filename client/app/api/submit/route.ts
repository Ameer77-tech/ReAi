import { NextResponse } from "next/server";

interface ServerReply {
  reply: string;
  success: boolean;
  id : string
}

export async function POST(req: Request) {
  try {
    const details = await req.json();

    const backend = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER}/api/user-details`,
      {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(details),
      }
    );

    const data: ServerReply = await backend.json();
    
    return NextResponse.json({
      ok: data.success,
      reply: data.reply,
      success: data.success,
      id : data.id
    });
  } catch (err) {
    console.error("SUBMIT ROUTE ERROR:", err);

    return NextResponse.json(
      { ok: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}
