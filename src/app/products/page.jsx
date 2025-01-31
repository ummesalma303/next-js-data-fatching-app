// "use client"

import dbConnect from '@/lib/dbConnect'
// import React, { useEffect, useState } from 'react'

export const dynamic = 'force-dynamic'
export default async function ProductPage() {
   
  //  const [posts,setPosts] = useState([]);
  
  //      useEffect(() => {       
  //       fetch('https://next-js-data-fatching-app.vercel.app/api/items')
  //      .then(res=>res.json())
  //      .then(data=> {
  //       console.log(data.data)
  //       setPosts(data.data)}
  //   )
  
  //      }, [])
  const data = await dbConnect("practice-data").find({}).toArray()
    // console.log(posts)
  return (
    <div>
      <h2>Products</h2>

      <div className="grid grid-cols-4 w-11/12 mx-auto gap-7">
      {
        data?.map(post => <div className='border-2 p-4'>
            <h2>{post?.productName}</h2>
            <p>Price: {post?.price}</p>
        </div>)
      }
      </div>
    </div>
  )
}
