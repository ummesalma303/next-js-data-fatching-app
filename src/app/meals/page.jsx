"use client"
import React, { useEffect, useState } from 'react'

export default function MealsPage() {
    const [meals,setMeals] = useState([]);
    const [search,setSearch] = useState('')

    const fetchMeals = async () => {
       try {
        const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        const data = await res.json()
        // console.log(data.meals);
        setMeals(data.meals || [])
        return data.meals
       } catch (error) {
        console.log(error)
        return []
       }
       
    }

    useEffect(()=>{
        fetchMeals()
    },[search])
   
  return (
    <div>
        <div className="mx-auto w-1/2">
            <input className='  px-3 border-2' type="text" placeholder='search here...' />
        </div>
      <h2 className='text-center'>total data: {meals?.length}</h2>
      <div className="grid grid-cols-4 w-11/12 mx-auto gap-6">
      {
        meals?.map((meal,i)=><div className='border-2 p-4'>
          <h2>{i+1}/ {meal?.strMeal}</h2>
          <p> {meal?.strInstructions?.slice(0,20)}</p>
          </div>)
      }
      </div>
    </div>
  )
}
