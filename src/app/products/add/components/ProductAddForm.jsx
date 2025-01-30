'use client';

import { redirect, useRouter } from 'next/navigation';
// import { useRouter } from 'next/router';
import React from 'react'

export default function ProductAddForm() {
  const router = useRouter()
  const handleSubmit = async (e) =>{
    e.preventDefault()
    const productName = e.target.productName.value
    const productImage = e.target.productImage.value
    const price = e.target.price.value

    const productData = {
      productName,
      productImage,
      price
    }
    console.log(productData)
    const res = await fetch('http://localhost:3000/api/items',{
        method: "POST",
        body: JSON.stringify(productData),
        headers: {
          "Content-Type": "application/json",
        },
      })
    const result = await res.json()
    console.log(result)
    // router.push('/products');
    redirect('/products')
  }
  return (
    <div className='w-11/12 mx-auto'>
      <form onSubmit={handleSubmit} className='space-y-5 border-2 p-8'>
        <input className='text-black' type="text" name="productName" placeholder="Product Name" required /> <br />
        <input className='text-black' type="url" name="productImage" placeholder="Product Image" required /> <br />
        <input className='text-black' type="number" name="price" placeholder="Product Price" required /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
