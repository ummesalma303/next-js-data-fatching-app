
"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { usePathname } from 'next/navigation'
import React from 'react'
import LoginButton from './LoginButton';
import { signOut, useSession } from 'next-auth/react';
// import { authOptions } from '../api/auth/[...nextauth]/route';
import GetSession from './GetSession';

export default function NavBar() {
  
  const {data: session} = useSession()
  console.log('ssssssssssss',session)
  const pathname = usePathname()
  if (!pathname.includes("dashboard")) {
    
    return (
      <nav className='w-11/12 mx-auto flex justify-between items-center py-3'>
       
        <ul className='flex space-x-4'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/post'>Post</Link></li>
          <li><Link href='/meals'>Meals</Link></li>
          <li><Link href='/products'>Products</Link></li>
          <li><Link href='/products/add'>Add Products</Link></li>
          {/* <li><Link href='/contact'>Contact</Link></li> */}
          
         </ul>
        {
          // session?.user? <button onClick={() => signOut()}>Sign out</button>
          // : 
          <LoginButton/>
        }
        {/* from client components */}
        <div>{JSON.stringify(session)}</div> <br /> <br />
        {/* from server components */}
        <GetSession></GetSession>
        {/* <div>{JSON.stringify(ses)}</div> */}
      </nav>
    )
  }else{
    return<></>
  }
}
