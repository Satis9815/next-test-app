import { comments } from "@/data";
export async function GET() {
    return  Response.json(comments,{status:200});
}

export async function POST(request){
    const {text} =await request.json();
    const data ={
        id:comments.length+1,
        text:text
    }
     comments.push(data);
    return Response.json(JSON.stringify(data),{
        headers:{
            "Content-Type":"application/json"
        },
        status:201
    }) 
}


10
