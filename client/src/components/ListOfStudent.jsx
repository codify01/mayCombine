import axios from 'axios'
import React, { useEffect } from 'react'

const ListOfStudent = () => {
    let url = 'http://localhost:5000/user/register'
    useEffect(() => {
        axios.get(url)
        .then((res)=>{
            console.log(res.data);
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
  return (
    <div>

    </div>
  )
}

export default ListOfStudent