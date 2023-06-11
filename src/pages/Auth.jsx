import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './Login'
import RegisterForm from '../component/Register/RegisterForm'

const Auth = () => {
  return (
      <Routes>
      <Route path='/login'  element={<Login/>}/>
      <Route path='/register'  element={<RegisterForm/>}/>
      
      </Routes>
  )
}

export default Auth
