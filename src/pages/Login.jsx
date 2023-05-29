import React, { useState } from 'react'
import bumiAtas from '../assets/login_earth atas.png'
import bumiBawah from '../assets/login earth bawah.png'
import bumi from '../assets/ion_earth.svg'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import {BiLockOpenAlt} from 'react-icons/bi'
import gambar from '../assets/RegisterImg/20944201.jpg'
import google from '../assets/google.png'

import { useNavigate } from 'react-router-dom'
import instance from '../API/Api'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const isComplete = () => {
   if (email.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert('Email tidak valid. Silakan periksa kembali.')
      return false;
    } else if(!/^.{8,}$/.test(password) || password.trim() === "" ){
      alert('Password Tidak Valid,Harus memiliki minimal 8 karakter huruf')
      return false
     } else {
      return true;
    }
  };
  const handleSubmit = ()=>{
    if(isComplete()){
    let data = new FormData();
data.append('email', email);
data.append('password', password);

let config = {

    method: 'post',
    maxBodyLength: Infinity,
    url: '/login',
    headers: {},
    data : data
  };
  
  instance.request(config)
  .then((response) => {
    console.log(JSON.stringify(response.data));
    localStorage.setItem('user',response.data.data.name)
    localStorage.setItem('token',response.data.access_token)
    localStorage.setItem('role',response.data.data.role)
    localStorage.setItem('images',response.data.data.images)
    localStorage.setItem('id',response.data.data.id)
    navigate('/profile')
  })
  .catch((error) => {
    console.log(error);
    alert('gagal')
  });
  }

  }
  const navigate = useNavigate()
  return (
    <div className='from w-full h-screen flex flex-col md:flex-row justify-between items-center'>
        <div className="header w-full  flex flex-col justify-between p-5  ">
            <span className='text-[#1fa0e2] w-full text-xl'
            onClick={()=>{
                navigate('/')}}
            ><MdOutlineArrowBackIos/></span>
        </div>
            <span className='w-full justify-center flex'><img src={gambar} className='w-[70%]' /></span>
      <div className="form-container w-full h-[70vh] rounded-t-3xl  flex justify-between gap-5 items-start p-5 flex-col ">
        <div className="top w-full flex flex-col gap-5">
            <h1 className='text-2xl font-semibold '>Login</h1>
        <div className="body w-full flex flex-col gap-5 items-end ">
        <div className='w-full flex flex-col  gap-5 '>
      <span className='w-full '>

      <label>Masukkan Email</label>
    <input className='p-2 bg-slate-200 outline-none w-full rounded-md' type="email" placeholder='lurasya2023@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </span>
    <span className='w-full '>
      <label>Masukkan Password</label>
    <input className='p-2 bg-slate-200 outline-none w-full rounded-md' type="password" placeholder='+8 Karakter' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </span>
</div>
        </div>
        <div className="footer flex flex-col gap-3 w-full justify-end ">
            <button 
            onClick={()=>{
              handleSubmit()}}
            className='bg-[#1fa0e2] text-white  w-full p-3 rounded-lg'>Masuk</button>
            <span className='flex w-full items-center text-slate-500 gap-5'>
              <hr className='h-[2px] w-[100vw] '/>
              <p>OR</p>
              <hr className='h-[2px] w-[100vw] '/>
            </span>
            <button
            className='bg-slate-200 text-slate-700  w-full p-3 rounded-lg flex items-center gap-5 justify-center'
            >
              <img src={google} />
              <p>Masuk dengan Google</p>
              
             </button>
            
        </div>
        </div>
            <p onClick={()=>navigate('/register')} className='text-sm mt-5 w-full text-center'>Belum punya akun ?<span className='font-medium text-[#1fa0e2]'> Buat disini</span> </p>
      </div>
    </div>
  )
}

export default Login
