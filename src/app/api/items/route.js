"use server"

import dbConnect from "@/lib/dbConnect"
// import { collectMeta } from "next/dist/build/utils"

// export const dynamic = 'force-static'
// import dbConnect, { collectionNames } from "@/lib/dbConnect"
export async function GET() {

const data = await dbConnect().find({}).toArray()
console.log(data)
// return new Response.json({data})

  return Response.json({ data })
}





export async function POST(req) {
    const postdata = await req.body
    const result = await dbConnect().insertOne(postdata)
    return Response.json({ result })
}