'use client'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


// export const singlePost = async (id) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
//     const data = await res.json()
//     return data
// }

export default function SinglePost() {
    const [post,setPost] = useState()
    // const id = await params.id
    const params = useParams()
   useEffect(() => {
    const singlePost = async () => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params?.id}`);
        const data = await res.json()
        console.log(data)
        setPost( data)
    }
    singlePost()
   }, [params?.id])
   
    // console.log(params?.id)
    // console.log(post)
  return (
    <div className='border-2 w-1/2 mx-auto p-8 my-20'>
      <h2 className='font-semibold text-2xl'>Title: {post?.title}</h2>
        <p>post {post?.body}</p>
      
    </div>
  )
}
