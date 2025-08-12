import React from 'react'
import Home from 'Pages/Home'
import NotFound from 'Pages/NotFound'
import { Route, Routes } from 'react-router'

const MainRoutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='*' element={<NotFound/>}/>
    </Routes>
  )
}

export default MainRoutes