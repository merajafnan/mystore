'use client';
import React, { useState } from 'react';
import { FcGoogle } from "react-icons/fc";
import { UserAuth } from '@/app/context/AuthContext';
import { Router, Route, Routes, BrowserRouter } from 'react-router'
import { Navigate } from "react-router-dom";
import { useRouter } from 'next/navigation';



const signInPage = () => {

    const { user, googleSignIn } = UserAuth();
    const [loading, setLoading] = useState(true)
    const router = useRouter();

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <div>
            {/* <!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<!--
  This example requires updating your template:

  ```
  <html class="h-full bg-white">
  <body class="h-full">
  ```
--> */}
            <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                    <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                    <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account</h2>
                </div>

                <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form class="space-y-6" action="#" method="POST">
                        <div>
                            <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                            <div class="mt-2">
                                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div class="flex items-center justify-between">
                                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                                <div class="text-sm">
                                    <a href="#" class="font-semibold text-indigo-600 hover:text-indigo-500">Forgot password?</a>
                                </div>
                            </div>
                            <div class="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>

                    {/* Horizontal line */}
                    <div class="inline-flex items-center justify-center w-full">
                        <hr class="w-64 h-px my-8 bg-gray-200 border-0 dark:bg-gray-700" />
                        <span class="absolute px-3 font-medium text-gray-900 -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">or</span>
                    </div>

                    {!user ? (
                        <button className="btn" onClick={handleSignIn}>
                            <svg onClick={handleSignIn} href='/' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><FcGoogle /></svg>
                            Sign in with Google
                        </button>) : (
                            router.push('/')


                    )}

                    {/* <button className="btn" onClick={handleSignIn}>
                        <svg onClick={handleSignIn} href='/' xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-xl" fill="none" viewBox="0 0 24 24" stroke="currentColor"><FcGoogle /></svg>
                        Sign in with Google
                    </button> */}

                    {/* <a className="btn" onClick={handleSignIn} >Log in</a> */}

                    <p class="mt-10 text-center text-sm text-gray-500">
                        Not a member?
                        <a href="#" class="font-semibold leading-6 text-indigo-600 hover:text-indigo-500">Start a 14 day free trial</a>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default signInPage