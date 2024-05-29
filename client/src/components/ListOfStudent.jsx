import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListOfStudent = () => {
  const [list, setList] = useState([])
  const [isLoading, setisloading] = useState(true)
    let url = 'http://localhost:5000/user/register'
    useEffect(() => {
        axios.get(url)
        .then((res)=>{
            setList(res.data)
            setisloading(false)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
  return (
    <div className='max-w-4xl mx-auto'>
        <div className='flex flex-wrap text-center text-xl font-bold bg-slate-800  text-teal-100'>
          <h1 className='flex-1 border p-3'>Name</h1>
          <h1 className='flex-1 border p-3'>Email</h1>
          <h1 className='flex-1 border p-3'>Username</h1>
        </div>
        { isLoading?<div className='loader'></div>:
        <div>
        {
          list.map((eachList)=>(
            <div className='flex flex-wrap text-xl font-semibold odd:bg-slate-700 bg-slate-600  text-teal-100'>
            <h1 className='flex-1 border p-3'>{eachList.name}</h1>
            <h1 className='flex-1 border p-3'>{eachList.email}</h1>
            <h1 className='flex-1 border p-3'>{eachList.username}</h1>
          </div>
          ))
        }
    </div>}

    </div>
  )
}

export default ListOfStudent