import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Menu from './Menu'
import About from './About'
import Contact from './Contact'


const BodyComponent = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>   
    </div>
  )
}

export default BodyComponent