'use client'
import { AcademicCapIcon } from "@heroicons/react/24/outline"
import { useActionState } from 'react';
import {useForm} from "react-hook-form";
import {signIn} from "next-auth/react"
import { useRouter } from "next/navigation";
 
export default function LoginForm (){
    const {register, handleSubmit} = useForm();
    const router = useRouter();
    const onSubmit = handleSubmit(async data => {
      console.log(data);
      const res = await signIn('credentials', {
        email: data.email,
        password: data.password,
        redirect: false,
      })
      if (res?.error){
        alert(res?.error)
      }else{
        router.push('/dashboard');
      }
    })
    return (
        <><div className='flex justify-center mb-5'>
            <AcademicCapIcon className='h-12 w-12 rotate-[15deg]' />
        </div><form onSubmit={onSubmit} className="max-w-sm mx-auto ">
        <label htmlFor="email" className="text-slate-500 dark:text-white   mb-2 block text-sm">
          Email:
        </label>
        <input
          type="email"
          {...register("email", {
            required: {
              value: true,
              message: "Email is required",
            },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 text-slate-300 dark:text-gray-900 w-full"
          placeholder="user@email.com"
        />
        <label htmlFor="password" className="text-slate-500 dark:text-white mb-2 block text-sm">
          Password:
        </label>
        <input
          type="password"
          {...register("password", {
            required: {
              value: true,
              message: "Password is required",
            },
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters long",
            },
          })}
          className="p-3 rounded block mb-2 bg-slate-200 text-slate-300 w-full dark:text-gray-900"
          placeholder="********"
        />
                <button className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-6">Login</button>
            </form></>
    );
}