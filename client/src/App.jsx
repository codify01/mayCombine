import React from 'react'
import SignUp from './components/SignUp'
import ListOfStudent from './components/ListOfStudent'
import SignIn from './components/SignIn'
import { Route, Routes, useNavigate } from 'react-router-dom'
import NavBar from './components/NavBar'
import Product from './components/Product'
import ListOfProducts from './components/ListOfProducts'
import Home from './components/Home'
import NotFound from './components/NotFound'
import Profile from './components/Profile'
import Formik from './components/Formik'


const App = () => {
  const navigate = useNavigate()
  let authToken = localStorage.getItem("token")
  return (
   <>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <SignUp/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/list' element={<ListOfStudent/>}/>
        <Route path='/list/:user' element={authToken?<Profile/>:navigate('/login')}/>
        <Route path='*' element={<NotFound/>}/>
        <Route path='/formik' element={<Formik/>}/>
        <Route path='/login' element={ <SignIn/>}/>
        <Route path='/products/' element={ <Product/>}>
          <Route path=':product' element={<ListOfProducts/>}/>
        </Route>
      </Routes>
   </>
  )
}

export default App