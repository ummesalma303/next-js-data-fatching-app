"use server"
// import { authOptions } from '../api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth'
import { authOptions } from '../api/auth/[...nextauth]/route'

export default async function GetSession() {
    const session = await getServerSession( authOptions)
    
    return(
        <>
        {
            JSON.stringify(session)
        }
        </>
    )
  
}
