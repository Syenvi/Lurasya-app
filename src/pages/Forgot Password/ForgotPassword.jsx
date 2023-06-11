import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import gambar from '../../assets/forgot password.jpg'
import {BiArrowBack} from 'react-icons/bi'

const ForgotPassword = () => {
    const navigate=useNavigate()
    const [email, setEmail] = useState('')
  return (
    <div className="w-full h-screen flex justify-center ">
        <div className="w-full h-full flex flex-col justify-between p-5 items-center md:w-[40%] md:shadow-lg">
            {/* ------ Header ------ */}
            <span  className='w-full flex justify-start'><BiArrowBack onClick={()=>navigate('/auth/login')}/></span>
            {/* ------ Header ------ */}

            {/* ------ Gambar ------ */}
            <img src={gambar} className='w-[60%]' alt="" />
            {/* ------ Gambar ------ */}

            {/* ------ Deskripsi ------ */}

         <div className="w-full flex flex-col">
         <h1 className='text-2xl font-bold'>Lupa Kata Sandi?</h1>
            <p>Tidak masalah.Jika itu terjadi,Masukkan alamat email yang terkait ke akun anda</p>
         </div>

            {/* ------ Deskripsi ------ */}

            {/* ------ Form ------ */}
            <span className='w-full '>

            <label className='md:text-white'>Masukkan Email</label>
            <input className='p-2 bg-slate-200 md:bg-white outline-none w-full rounded-md' type="email" placeholder='lurasya2023@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
            </span>
            {/* ------ Form ------ */}

            {/* ------ Action ------ */}
            <button 
            onClick={()=>navigate('/reset-password')}
            className='bg-[#1fa0e2] text-white  w-[60%] p-3 rounded-lg'>Kirim</button>
            {/* ------ Action ------ */}

        </div>
    </div>
  )
}

export default ForgotPassword
