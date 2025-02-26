"use client";

import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { axios } from "axios";

export default function SignUpPage() {
  const [user, setUser] = React.useState({
    email: "",
    password: "",
    username: "",
  });

  const onSignup = async () => {};

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
      <h1 className="text-white text-center text-2xl mb-5">Sign up</h1>
      <hr />
      <label htmlFor="username" className="mb-2">
        Username
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="username"
        type="text"
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        placeholder="username"
      />
      <label htmlFor="email" className="mb-2">
        Email
      </label>
      <input
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
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
        className="p-2 border border-gray-300 rounded-lg mb-4 focus:outline-none focus:border-gray-600"
        id="password"
        type="text"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        placeholder="password"
      />

      <button className="relative block group mt-3 " onClick={onSignup}>
        <span className="absolute inset-0  bg-indigo-500  rounded-lg"></span>
        <div className="transition bg-black relative border-2 rounded-lg group-hover:-translate-x-2 group-hover:-translate-y-2">
          <div className="p-2 ">
            <p className="text-xl font-outerSans font-medium">Signup</p>
          </div>
        </div>
      </button>
      <Link href="/login" className="mt-4">
        Visit Login Page
      </Link>
    </div>
  );
}
