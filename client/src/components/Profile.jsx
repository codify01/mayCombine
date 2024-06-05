import React from 'react'
import { useParams } from 'react-router-dom'

const Profile = () => {
const {user} = useParams()

  return (
    <div>
        {user}
    </div>
  )
}

export default Profile