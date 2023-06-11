import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gambar from '../../assets/reset password.png'
import {BiArrowBack} from 'react-icons/bi'

const ResetPassword = () => {
    const navigate=useNavigate()
    const [password, setPassword] = useState('')
    const [password_confirmation, setPasswordConfirmation] = useState('')

  return (
    <div className="w-full h-screen flex justify-center ">
        <div className="w-full h-full flex flex-col justify-between p-5 items-center md:w-[40%] md:shadow-lg">
            {/* ------ Header ------ */}
            <span  className='w-full flex justify-start bg-orange-300'><BiArrowBack onClick={()=>navigate('/forgot-password')}/></span>
            {/* ------ Header ------ */}

            {/* ------ Gambar ------ */}
            <img src={gambar} className='w-[60%]' alt="" />
            {/* ------ Gambar ------ */}

            {/* ------ Deskripsi ------ */}

         <div className="w-full flex flex-col">
         <h1 className='text-2xl font-bold'>Reset Password</h1>
         </div>

            {/* ------ Deskripsi ------ */}

            {/* ------ Form ------ */}
           <div className="w-full">
           <span className='w-full '>
            <label className='text-slate-700'>Buat Kata Sandi Baru</label>
            <input className='p-2 bg-slate-200  outline-[#1fa0e2] w-full rounded-md' type="email" placeholder='lurasya2023@gmail.com' value={password} onChange={(e)=>setPassword(e.target.value)} />
            </span>
            <span className='w-full '>
            <label className='text-slate-700'>Buat Kata Sandi Baru</label>
            <input className='p-2 bg-slate-200  outline-[#1fa0e2] w-full rounded-md' type="email" placeholder='lurasya2023@gmail.com' value={password_confirmation} onChange={(e)=>setPasswordConfirmation(e.target.value)} />
            </span>
           </div>
            {/* ------ Form ------ */}

            {/* ------ Action ------ */}
            <button
            className='bg-[#1fa0e2] text-white  w-[60%] p-3 rounded-lg'>Kirim</button>
            {/* ------ Action ------ */}

        </div>
    </div>
  )
}

export default ResetPassword
