import { comments } from "@/data";

export async function GET(_request,{params}) {
    const id = params.id
    const singleComment = comments.find((c)=>c.id === parseInt(id));

    return Response.json({
        success:true,
        message:"Fetched the id",
        singleComment
    },{status:200})
    
}