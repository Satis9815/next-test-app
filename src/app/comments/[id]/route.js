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

export async function PATCH(request,{params}) {

    const {text} = await request.json();

    const id = params.id
    const index = comments.findIndex((c)=>c.id === parseInt(id));
    comments[index].text = text

    return Response.json({
        success:true,
        message:"Comment updated successfully",
        data:comments[index]
    },{status:200})
    
}