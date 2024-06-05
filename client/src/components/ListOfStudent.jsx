import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ListOfStudent = () => {
  const navigate = useNavigate()
  const [list, setList] = useState()
  const [isLoading, setisloading] = useState(true)
    let url = 'http://localhost:5000/user/register'
    useEffect(() => {
        axios.get(url)
        .then((res)=>{
          console.log(res.data);
          setList(res.data)
            setisloading(false)
            console.log(list);
          }).catch((err)=>{
            setisloading(false)
            alert(err.message)
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
          list.map((eachList, i)=>(
            <div  onClick={()=>navigate(`/list/${eachList.email}`)} className='flex flex-wrap text-xl font-semibold odd:bg-slate-700 bg-slate-600  text-teal-100' key={i}>
            <h1 className='flex-1 border p-3'>{eachList.firstName + ' ' + eachList.lastName}</h1>
            <h1 className='flex-1 border p-3'>{eachList.email}</h1>
            <h1 className='flex-1 border p-3'>{eachList.password}</h1>
          </div>
          ))
        }
    </div>}

    </div>
  )
}

export default ListOfStudent