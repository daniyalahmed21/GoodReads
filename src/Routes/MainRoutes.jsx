import React from 'react'
import Login from 'Pages/Auth/Login'
import Signup from 'Pages/Auth/SignUp'
import Home from 'Pages/Home'
import NotFound from 'Pages/NotFound'
import { Route, Routes } from 'react-router'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default MainRoutes