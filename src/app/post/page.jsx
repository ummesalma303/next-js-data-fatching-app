"use client"
import Link from 'next/link';
import React from 'react'

export const getPost = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()
    return data
}
export default async function PostPage() {
    const posts = await getPost()
    console.log(posts)
  return (
      <div className='mb-20 mt-8'>
      <h2 className='mb-8 text-center text-2xl font-semibold'>total data{posts?.length}</h2>
        <div className='w-11/12 mx-auto grid grid-cols-4 gap-6'>
      {
        posts?.map((post,i)=><Link href={`/post/${post.id}`}><div className="p-8 border-2" key={post?.id}> <p>{i+1}/ {post?.title}</p></div></Link>)
      }
      
        
        </div>
    </div>
  )
}
























// "use client"
// import Link from 'next/link';
// import React, { useEffect, useState } from 'react'

// // export const getPost = async () => {
// //     const res = await fetch('https://jsonplaceholder.typicode.com/posts');
// //     const data = await res.json()
// //     return data
// // }
// export default async function PostPage() {
//   const [posts,setPosts] = useState([])

//   const getPost = async () => {
//   try {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     const data = await res.json()
//     console.log(data);
//     setPosts(data)
//     return data
//    } catch (error) {
//     console.log(error)
//     return []
//    }
   
// }
//   useEffect(()=>{
//      getPost()
    
//   },[])
//   // console.log(posts)
//   return (
//       <div className='mb-20 mt-8'>
//       {/* <h2 className='mb-8 text-center text-2xl font-semibold'>total data{posts?.length}</h2> */}
//         <div className='w-11/12 mx-auto grid grid-cols-4 gap-6'>
//       {/* {
//         posts?.map((post,i)=><Link href={`/post/${post.id}`}><div className="p-8 border-2" key={post?.id}> <p>{i+1}/ {post?.title}</p></div></Link>)
//       } */}
      
        
//         </div>
//     </div>
//   )
// }
