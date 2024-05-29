import axios from 'axios'
import React, { useEffect, useState } from 'react'

const ListOfStudent = () => {
  const [list, setList] = useState([])
    let url = 'http://localhost:5000/user/register'
    useEffect(() => {
        axios.get(url)
        .then((res)=>{
            console.log(res.data);
            setList(res.data)
        }).catch((err)=>{
            console.log(err);
        })
    }, [])
    
  return (
    <div>
        <div>
          
        </div>
    </div>
  )
}

export default ListOfStudent