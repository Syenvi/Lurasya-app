// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeRoute from './pages/Home/HomeRoute'
import DetailTempat from './pages/DetailTempat'
import RegisterForm from './component/Register/RegisterForm'
import RegisterFormAdmin from './component/Register Admin (CRUD)/RegisterFormAdmin'
import EditProfil from './pages/EditProfil'
import Edit from './component/Register Admin (CRUD)/Edit'
import Onboarding from './component/Onboarding'
import './index.css'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/*' exact element={<HomeRoute/>}/>
        <Route path='/login' exact element={<Login/>}/>
        <Route path='/register' exact element={<RegisterForm/>}/>
        <Route path='/detail/:id' exact element={<DetailTempat/>}/>
        <Route path='/partnership/create' exact element={<RegisterFormAdmin/>}/>
        <Route path='/editprofil/:id' exact element={<EditProfil/>}/>
        <Route path='/partnership/edit/:id' exact element={<Edit/>}/>
        

      </Routes>
    </BrowserRouter>
  )
}

export default App
