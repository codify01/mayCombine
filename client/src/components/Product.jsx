import React from 'react'
import { Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
        <div>
            <h1>Products</h1>
            <Outlet/>
        </div>
    </div>
  )
}

export default Product