import { NextResponse } from "next/server";

export async function POST(req : Request){
    try{
    const json = await req.json()
    const html = json.html
    const response = await fetch(`${process.env.NEXT_PUBLIC_PDF_SERVER}/api/generate-pdf`, 
       {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({ html: html }),
        }
    )
    console.log(response);
    
    if(response.status === 500){
        return NextResponse.json({ reply : "Server Error", success : false }, { status : 500 })
    }
    const pdfBuffer = await response.arrayBuffer()
    
    return new NextResponse(pdfBuffer,{
        headers : {
            "content-type" : "application/pdf",
            "Content-Disposition": "attachment; filename=resume.pdf",
        }
    })
    }
    catch(err){
        return NextResponse.json({ reply : "Server Error", err, success : false }, { status : 500 })
    }
    
}