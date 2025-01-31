'use server'
import dbConnect from '@/lib/dbConnect'
import React from 'react'

export const registerUser = async function (payload) {
    console.log(payload)
    try {
        const result = await dbConnect("TEST_USER").insertOne(payload);
        console.log(result)
        return result
       } catch (error) {
        console.log(error)
       }
  return (
    <div>
      
    </div>
  )
}
