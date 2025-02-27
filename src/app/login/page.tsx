"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import  axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage() {
  const router = useRouter();
  const [user, setUser] = React.useState({
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = React.useState(false)
  const [loading,setLoading] = React.useState(false);


  const onLogin = async () => {
    try {
      setLoading(true);
      const response = await axios.post('/api/users/login', user)
      toast.success("Login Success!")
      router.push("/profile")
    } catch (error: any) {
      console.log("Login Failed!", error.message);
      toast.error(error.message)
    }finally{
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(user.email.length > 0 && user.password.length > 0){
      setButtonDisabled(false)
    }else{
      setButtonDisabled(true);
    }
  },[user])

  return (

    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="text-white text-center text-2xl mb-5">{loading ? "processing":"login"}</h1>
      <hr />
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 text-black focus:outline-none focus:border-gray-600"
        id="email"
        type="text"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        placeholder="email"
      />
      <label htmlFor="password" className="mb-2">
        Password
      </label>
      <input
        className="p-2 border border-gray-300 text-black rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button className="relative block group mt-3 " onClick={onLogin}>
        <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
        <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 ">
            <p className="text-xl font-outerSans font-medium">Login</p>
          </div>
        </div>
      </button>
      <Link href="/signup" className="mt-4">
        Visit Signup Page
      </Link>
    </div>
  );
}
