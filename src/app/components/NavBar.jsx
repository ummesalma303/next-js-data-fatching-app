
"use client";

import Link from 'next/link'
import { usePathname } from 'next/navigation'
// import { usePathname } from 'next/navigation'
import React from 'react'

export default function NavBar() {
  const pathname = usePathname()
  if (!pathname.includes("dashboard")) {
    
    return (
      <nav className='flex justify-center items-center py-3'>
        <ul className='flex space-x-4'>
          <li><Link href='/'>Home</Link></li>
          <li><Link href='/post'>Post</Link></li>
          <li><Link href='/meals'>Meals</Link></li>
          {/* <li><Link href='/contact'>Contact</Link></li> */}
          
         </ul>
      </nav>
    )
  }else{
    return<></>
  }
}
