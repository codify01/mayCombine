import React from 'react'
import SignUp from './components/SignUp'
import ListOfStudent from './components/ListOfStudent'
import SignIn from './components/SignIn'
import { Route, Routes } from 'react-router-dom'
import NavBar from './components/NavBar'

const App = () => {
  return (
   <>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <SignUp/>}/>
        <Route path='/list' element={ <ListOfStudent/>}/>
        <Route path='/login' element={ <SignIn/>}/>
      </Routes>
   </>
  )
}

export default App