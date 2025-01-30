import dbConnect from "@/lib/dbConnect"
import { ObjectId } from "mongodb"

export async function GET(req,{params}) {
   const p = await params
   console.log('=========',p)
const data = await dbConnect().findOne({_id:new ObjectId(p.id)})

  return Response.json({ data })
}



export async function PATCH(req,{params}) {
  const postdata = req.body
   const p = await params
   console.log('=========',p)
   const filter = {_id:new ObjectId(p.id)}
   const updateDoc = {
    $set: { postdata }
   }
const data = await dbConnect().updateOne(filter,updateDoc)

  return Response.json({ data })
}