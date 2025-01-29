"use server"

import dbConnect from "@/lib/dbConnect"

// export const dynamic = 'force-static'
// import dbConnect, { collectionNames } from "@/lib/dbConnect"
export async function GET() {
    // const data ={
    //     message:'success',
    //     status:'201'
    // }
//   const res = await fetch('https://data.mongodb-api.com/...', {
//     headers: {
//       'Content-Type': 'application/json',
//       'API-Key': process.env.DATA_API_KEY,
//     },
//   })
//   const data = await res.json(data)
const data = await dbConnect().find({}).toArray()
// return new Response.json({data})

  return Response.json({ data })
}


export async function POST(req) {
    // const postData = await req.json()
    // return new Response.json({ postData })



     try {
    const text = await request.text()
    // Process the webhook payload
  } catch (error) {
    return new Response(`Webhook error: ${error.message}`, {
      status: 400,
    })
  }
 
  return new Response('Success!', {
    status: 200,
  })
}