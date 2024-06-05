import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
const {user} = useParams()
const [users, setUser] = useState({})
const [isLoading, setisloading] =useState(true)
let url = `http://localhost:5000/user/register/${user}`
    useEffect(() => {
        axios.get(url)
        // setisloading(true)
        .then((res)=>{
          console.log(res.data);
          setUser(res.data)
            setisloading(false)
          }).catch((err)=>{
            setisloading(false)
            alert(err.message)
            console.log(err);
        })
    }, [])


  return (
    <div>
        {
          isLoading ? <div className='loader'></div> : <h1>{users.email}</h1>
        }
    </div>
  )
}

export default Profile