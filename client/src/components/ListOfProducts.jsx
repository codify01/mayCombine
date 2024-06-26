import React from 'react'
import { useParams } from 'react-router-dom'

const ListOfProducts = () => {
  const {product} = useParams()
  console.log(product);
  return (
    <div>
        <h1>product one {product}</h1>
    </div>
  )
}

export default ListOfProducts