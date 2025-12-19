import { ResumeStore } from "@/app/store/store"
 interface SubmitReply {
    ok: boolean;
    reply?: string;
    id? : string
  }

const SubmitData = async (state : ResumeStore): Promise<SubmitReply> => {
    const details = {
        header : state.header,
        contact_information : state.contact_information,
        professional_summary : state.professional_summary,
        work_experience : state.work_experience,
        education : state.education,
        key_skills : state.key_skills,
        projects : state.projects,
        certifications : state.certifications
    }

    
    try{
        const response = await fetch(`${process.env.NEXT_PUBLIC_CLIENT}/api/submit`, {
            method : "POST",
            headers : {
                "content-type" : "application/json"
            },
            body : JSON.stringify(details)
        })
        const res = await response.json();
        return {
            ok : res.ok,
            reply : res.reply,
            id : res.id
        }
    }catch(err){
        return { ok: false, reply : "error" };
    }
}

export default SubmitData