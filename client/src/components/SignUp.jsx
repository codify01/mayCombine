import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    let url = 'http://localhost:5000/user/register'

    const register = ()=>{
        console.log(firstName,lastName,email,password);
        axios.post(url, {firstName,lastName,email,password}).then((res)=>{
            console.log(res.data);
            res.data.status?navigate('/login'):alert(res.data.message)
        }).catch((err)=>{
            console.log(err);
        })
    }
  return (
    <div>

        <div className="max-w-sm mx-auto bg-slate-900 p-5 rounded mt-10">
            <h1 className='text-white text-xl font-bold text-center py-5'>Sign Up</h1>
            <div className="mb-5">
                <label for="firstname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your first name</label>
                <input type="text" onChange={(e)=>setFirstName(e.target.value)} id="firstname" name='firstname' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"/>
            </div>
            <div className="mb-5">
                <label for="lastname" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your last name</label>
                <input type="text" onChange={(e)=>setLastName(e.target.value)} id="lastname" name='lastname' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light" />
            </div>
            <div className="mb-5">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" onChange={(e)=>setEmail(e.target.value)} id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light" />
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" onChange={(e)=>setPassword(e.target.value)} id="password" name='password' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"  />
            </div>
            {/* <div className="mb-5">
                <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
                <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"  />
            </div> */}
            {/* <div className="flex items-start mb-5">
                <div className="flex items-center h-5">
                <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-slate-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-slate-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  />
                </div>
                <label for="terms" className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">I agree with the <a href="#" className="text-slate-600 hover:underline dark:text-slate-500">terms and conditions</a></label>
            </div> */}
            <button type="" onClick={register} className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Register new account</button>
        </div>

    </div>
  )
}

export default SignUp