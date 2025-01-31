"use client"
import React from 'react'
import { registerUser } from '../api/auth/[...nextauth]/registerUser'

export default function Register() {
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const name = e.target.name.value
        const image = e.target.image.value
        const email = e.target.email.value
        const pass = e.target.pass.value
        console.log(name,email,image)

        const data = {
          name,
          image,
          email,
          pass
        }
        registerUser(data)
    }    
  return (
    <div>
       <form onSubmit={handleSubmit} className='space-y-5 border-2 p-8'>
        <input className='text-black' type="text" name="name" placeholder="Name" required /> <br />
        <input className='text-black' type="url" name="image" placeholder="Image" required /> <br />
        <input className='text-black' type="email" name="email" placeholder="" required /> <br />
        <input className='text-black' type="text" name="pass" placeholder="" required /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
