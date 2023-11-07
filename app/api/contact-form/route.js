import {NextResponse} from "next/server";

export async function POST(req) {
    const requestData = await req.json();
    console.log(requestData, "result");
    const res = await fetch("https://formspree.io/f/mbjelyno", {
        method: "POST",
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: `name=${requestData.name}&email=${requestData.email}&message=${requestData.message}`

    });
    const data = await res.json();
    console.log(data, "data");
    return NextResponse.json(data);
}
