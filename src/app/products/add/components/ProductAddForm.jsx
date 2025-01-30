'use client';

import React from 'react'

export default function ProductAddForm() {
  const handleSubmit = (e) =>{
    e.preventDefault()
    const productName = e.target.productName.value
    console.log(productName)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input className='text-black' type="text" name="productName" placeholder="Product Name" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
