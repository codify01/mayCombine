import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='flex py-2 justify-between items-center px-5 bg-slate-900 text-white font-semibold'>
        <h1>Nav bar</h1>
        <ul className='flex gap-2'>
            <Link to='/profile'><li className=' px-2 py-1 hover:bg-slate-800 rounded'>Profile</li></Link>
            <Link to='/list'><li className=' px-2 py-1 hover:bg-slate-800 rounded'>List</li></Link>
            <Link to='/products'><li className=' px-2 py-1 hover:bg-slate-800 rounded'>Product</li></Link>
            <Link to='/home'><li className=' px-2 py-1 hover:bg-slate-800 rounded'>Home</li></Link>
            <Link to='/login'> <li className=' px-2 py-1 hover:bg-slate-800 rounded'>Login</li></Link>
            <Link to='/'><li className='bg-slate-600 px-2 py-1 rounded'>Sign In</li></Link>
        </ul>
    </div>
  )
}

export default NavBar