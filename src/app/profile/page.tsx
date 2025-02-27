"use client"
import axios from "axios"
import Link from "next/link"
import toast from "react-hot-toast"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function ProfilePage(){
    const router = useRouter()
    const [data, setData] = useState("nothing")
    const logout = async () =>{
        try {
            await axios.get('/api/users/logout')
            toast.success('Logout Successful!')
            router.push('/login')
        } catch (error:any) {
            console.log(error.message)
            toast.error(error.message)
        }
    }

    const getUserDetails = async () => {
      const res = await axios.get('/api/users/me')
      console.log(res.data) 
      setData(res.data.data._id)
    }

    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile</h1>
            <hr/>
            <p>Profile Page</p>
            <h2 className="padding rounded bg-green-700 p-3 mt-3">{data === 'nothing'? "Nothing":<Link href={`/profile/${data}`}>{data}</Link>}</h2>
            <hr/>
            <button className="relative block group mt-3" onClick={logout}>
        <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
        <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 ">
            <p className="text-xl font-outerSans font-medium">Logout</p>
          </div>
        </div>
      </button>
      <button className="relative block group mt-3" onClick={getUserDetails}>
        <span className="absolute inset-0  bg-orange-500  rounded-lg"></span>
        <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 ">
            <p className="text-xl font-outerSans font-medium">Get User Details</p>
          </div>
        </div>
      </button>
        </div>
    )
}