import { LockClosedIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import Router from 'next/router';
import { useContext } from 'react';
import { useForm } from 'react-hook-form'
import { AuthContext } from '../contexts/AuthContexts';
 

export default function Signin() {

  const { register, handleSubmit } = useForm();
  const {signIn} = useContext(AuthContext);

  async function handleSignIn(data:any){
    await signIn(data)
  }

  return (
    <>
      <div className="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="w-full max-w-md space-y-8">
          <div>
            <img
              className="mx-auto h-12 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt="Your Company"
            />
            <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">
              Sign in to your account
            </h2>
            <p className="mt-2 text-center text-sm text-gray-600">
              NG Cash Tech Challenge
            </p>
          </div>
          <form className="mt-8 space-y-6" method="POST" onSubmit={handleSubmit(handleSignIn)}>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <label htmlFor="username" className="sr-only">
                  User name
                </label>
                <input
                  {...register('user_name')}
                  id="user_name"
                  name="user_name"
                  type="text"
                  autoComplete="user_name"
                  className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Username"
                />
              </div>
              <div>
                <label htmlFor="password" className="sr-only">
                  Password
                </label>
                <input
                  {...register('password')}
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                  placeholder="Password"
                />
              </div>
            </div>

            <div className="flex items-center justify-end">
              <div className="text-sm">
                <Link href={'/signup'} className="font-medium text-indigo-600 hover:text-indigo-500">
                  Create a new account
                </Link>
              </div>
            </div>

            <div>
                <button
                  type="submit"
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                >
                  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                  </span>
                  Sign in
                </button>              
            </div>
          </form>
        </div>
      </div>
    </>
  )
}
