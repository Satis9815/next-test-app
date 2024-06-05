import {NextResponse} from "next/server"
export async function  GET(req){
    // console.log(req);
    //Get Request Header
    const requestHeader = new Headers(req.headers);
    // console.log(requestHeader);

    //Get URL params
    // const {searchParams} = new URL(req.url);
    // console.log(searchParams);
    // console.log(searchParams.get("search"))

    //Another Way to get searchParams
    // const searchParams = req.nextUrl.searchParams;
    // console.log(searchParams);
    return NextResponse.json({"Message":"Success"});

}
export async function POST(req){
    const data = await req.json();
    console.log(data);
    return NextResponse.json({success:true,data});
}