"use client"

import React, { useEffect, useState } from 'react'
const getData= async () => {
    // const data = await fetch('http://localhost:3000/api/items')
}
export const dynamic = 'force-dynamic'
export default function ProductPage() {
    // const res = await fetch('http://localhost:3000/api/items')
    // const data = await res.json()
    // console.log(data)
   const [posts,setPosts] = useState([]);
    //    const post = await getPost()
       useEffect(() => {       
  
        // fetch('http://localhost:3000/api/items',{
        //   cache: 'force-cache'
        // })
        fetch('http://localhost:3000/api/items')
       .then(res=>res.json())
       .then(data=> {
        console.log(data.data)
        setPosts(data.data)}
    )
  
       }, [])
    console.log(posts)
  return (
    <div>
      <h2>Products</h2>

      {
        posts?.map(post => <div>
            <h2>{post?.productName}</h2>
            <p>Price: {post?.price}</p>
        </div>)
      }
    </div>
  )
}
