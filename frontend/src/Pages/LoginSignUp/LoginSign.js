import React, { useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom';

function LoginSign({login, setLogin}) {
  const [mail, setMail]= useState("admin@swss.com");
  const [password, setPassword]= useState("admin@123");
  const history = useHistory();

  const validate= ()=>{
    if(mail==="admin@swss.com" && password==="admin@123"){
      setLogin(true);
      history.push("/dashboard")
    }
  }

  return (
    <div className='h-screen w-full flex justify-center items-center'>
      <div className='h-4/6 w-2/6 bg-white mb-14 flex flex-col p-5 rounded-md shadow-md'>
      <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
          <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
          <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign In to console</h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <div class="space-y-6" >
            <div>
              <label for="email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
              <div class="mt-2">
                <input id="email" name="email" type="email" autocomplete="email" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{setMail(e.target.value)}}
                value={mail}
                />
              </div>
            </div>

            <div>
              <div class="flex items-center justify-between">
                <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
              </div>
              <div class="mt-2">
                <input id="password" name="password" type="password" autocomplete="current-password" required class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={(e)=>{setPassword(e.target.value)}}
                value={password}
                />
              </div>
            </div>

            <div>
              <button 
                type="submit" 
                class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={()=>{validate()}}
              >
                Sign in
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default LoginSign
