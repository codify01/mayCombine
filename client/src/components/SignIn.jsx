import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isloading, setisloading] = useState(null)
    let url = 'http://localhost:5000/user/signin'
    // let token = '12345'

    const login = ()=>{
        console.log(email,password);
        setisloading(true)
        axios.post(url, {email,password})
        .then((res)=>{
            res.data.isValid?navigate(`/list/${email}`):alert(res.data.message)
            localStorage.setItem("token", res.data.token)
            setisloading(false)
            console.log(res);
        }).catch((err)=>{
            console.error(err);
            // alert(err.data.errorMessage)
        })
    }
  return (
    <div>
        <div className="max-w-sm mx-auto bg-slate-900 p-5 rounded mt-10">
            {
                isloading?<div className='text-white italic'>loading...</div>:null
            }
            <h1 className='text-white text-xl font-bold text-center py-5'>Sign In</h1>
            <div className="mb-5">
                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                <input type="email" name='email' onChange={(e)=>setEmail(e.target.value)} id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"/>
            </div>
            <div className="mb-5">
                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                <input type="password" name='password' onChange={(e)=>setPassword(e.target.value)} id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-slate-500 focus:border-slate-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-slate-500 dark:focus:border-slate-500 dark:shadow-sm-light"  />
            </div>
            <button type="submit" onClick={login} className="text-white bg-slate-700 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-slate-600 dark:hover:bg-slate-700 dark:focus:ring-slate-800">Register new account</button>
        </div>
    </div>
  )
}

export default SignIn