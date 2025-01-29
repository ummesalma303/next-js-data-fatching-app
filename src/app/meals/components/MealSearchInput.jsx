"use client";
import { usePathname, useRouter } from 'next/navigation';

import React, { useEffect, useState } from 'react'

export default function MealSearchInput() {
    // const [meals,setMeals] = useState([]);
    const [search,setSearch] = useState('')
    const router = useRouter()
    const pathName = usePathname()
   

      useEffect(()=>{
            //  fetchMeals()
            const searchQuery = {search}
            const urlQueryParam = new URLSearchParams(searchQuery);
            const url = `${pathName}?${urlQueryParam}`
           router.push(url)
         },[search])
  return (
    <div>
       <div className="mx-auto w-1/2">
            <input className=' text-black px-3 border-2' value={search} onChange={(e)=>setSearch(e.target.value)} type="text" placeholder='search here...' />
        </div>
    </div>
  )
}
