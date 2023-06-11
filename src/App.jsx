// import { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import HomeRoute from './pages/Home/HomeRoute'
import DetailTempat from './pages/DetailTempat'
import RegisterForm from './component/Register/RegisterForm'
import RegisterFormAdmin from './component/Register Admin (CRUD)/RegisterFormAdmin'
import EditProfil from './pages/EditProfil'
import Onboarding from './component/Onboarding'
import './index.css'

import Auth from './pages/Auth'
import EditCompany from './pages/EditCompany/EditCompany'
import VerifikasiOtp from './pages/VerifikasiOtp'
import ForgotPassword from './pages/Forgot Password/ForgotPassword'
import ResetPassword from './pages/Forgot Password/ResetPassword'
import { StateContext,useStateContext } from './Context/StateContext'

function App() {

  return (
    <BrowserRouter>
     <Routes>
        <Route path="/auth/*" element={<Auth />} />
        <Route path="/*" element={<StateContext><HomeRoute /></StateContext>} />
        <Route path="/partnership/create" exact element={<StateContext><RegisterFormAdmin /></StateContext>} />
        <Route path="/editprofil/:username" element={<StateContext><EditProfil /></StateContext>} />
        <Route path="/:username/companyedit/:id" exact element={<StateContext><EditCompany /></StateContext>} />
        <Route path="/verifikasi-otp" exact element={<StateContext><VerifikasiOtp /></StateContext>} />
        <Route path="/forgot-password" exact element={<StateContext><ForgotPassword /></StateContext>} />
        <Route path="/reset-password" exact element={<StateContext><ResetPassword /></StateContext>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
