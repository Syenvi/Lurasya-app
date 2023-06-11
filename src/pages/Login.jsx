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
    url: '/auth-login',
    headers: {},
    data : data
  };
  
  instance.request(config)
  .then((response) => {
    alert('berhasil masuk')
    console.log(JSON.stringify(response.data));
    localStorage.setItem('id',JSON.stringify(response.data.data.id))
    localStorage.setItem('name',JSON.stringify(response.data.data.name))
    localStorage.setItem('username',JSON.stringify(response.data.data.username))
    localStorage.setItem('email',JSON.stringify(response.data.data.email))
    localStorage.setItem('role',JSON.stringify(response.data.data.role))
    localStorage.setItem('profile',JSON.stringify(response.data.data.profile))
    localStorage.setItem('biodata',JSON.stringify(response.data.data.biodata))
    localStorage.setItem('provinsi',JSON.stringify(response.data.data.provinsi))
    localStorage.setItem('kota',JSON.stringify(response.data.data.kota))
    localStorage.setItem('kecamatan',JSON.stringify(response.data.data.kecamatan))
    localStorage.setItem('desa',JSON.stringify(response.data.data.desa))
    localStorage.setItem('token',JSON.stringify(response.data.access_token))
    navigate('/')

  })
  .catch((error) => {
    console.log(error);
    alert('gagal')
  });
  }

  }
  
  const navigate = useNavigate()
  return (
    <div className='from w-full h-screen flex flex-col justify-between items-center md:flex-row md:justify-center md:bg-[url(https://lonelyplanetstatic.imgix.net/marketing/2022/BIT/guidebooks_background_desktop-2022b.jpg?auto=format&fit=clip&w=1920&q=40)] bg-cover'>
      {/* ------ Navbar ------ */}
        <div className="header w-full  flex flex-col justify-between p-5 md:h-[80%] md:w-[60%]  md:rounded-l-2xl md:bg-white     backdrop-blur-md">
            <span className='text-[#1fa0e2] w-full text-xl h-[5%]'
            onClick={()=>{
                navigate('/')}}
            ><MdOutlineArrowBackIos/></span>
            <div className='md:flex flex-col w-full h-full justify-center items-start pl-10 hidden gap-5'>
                <h3 className='text-[2rem] w-[60%] font-bold text-[#1fa0e2]'>Perjalanan Anda dimulai dari sini</h3>
                <p>Buat akun untuk masuk ke halaman utama</p>
            </div>
        </div>
      {/* ------ Navbar ------ */}

            <span className='w-full justify-center flex md:hidden '><img src={gambar} className='w-[70%]' /></span>
      {/* ------ Form Container ------ */}

      <div className="form-container w-full h-[70vh] rounded-t-3xl  flex justify-between gap-5 items-start p-5 flex-col md:w-[25%] md:h-[80vh] md:rounded-none md:rounded-r-2xl md:bg-[rgba(255,255,255,0.1)] backdrop-blur-md">
        <div className="top w-full flex flex-col gap-5 ">
            <h1 className='text-2xl font-semibold md:text-3xl md:text-white'>Login</h1>
</div>
        <div className="body w-full flex flex-col gap-5 items-end ">
        <div className='w-full flex flex-col  gap-5 '>
      <span className='w-full '>

      <label className='md:text-white'>Masukkan Email</label>
    <input className='p-2 bg-slate-200 md:bg-white outline-none w-full rounded-md' type="email" placeholder='lurasya2023@gmail.com' value={email} onChange={(e)=>setEmail(e.target.value)} />
      </span>
    <span className='w-full '>
      <label className='md:text-white'>Masukkan Password</label>
    <input className='p-2 bg-slate-200 md:bg-white  outline-none w-full rounded-md' type="password" placeholder='+8 Karakter' value={password} onChange={(e)=>setPassword(e.target.value)} />
      </span>
        </div>
        <div className="footer flex flex-col gap-3 w-full justify-end ">
            <button 
            onClick={()=>{
              handleSubmit()}}
            className='bg-[#1fa0e2] text-white  w-full p-3 rounded-lg'>Masuk</button>
            <span className='flex w-full items-center text-white gap-5'>
              <hr className='h-[2px] w-[100vw] '/>
              <p>Atau</p>
              <hr className='h-[2px] w-[100vw] '/>
            </span>
            <button
            className='bg-slate-200 md:bg-white  text-slate-700 text-sm  w-full p-3 rounded-lg flex items-center gap-5 justify-center'
            >
              <img src={google} className='md:w-[5%]'/>
              <p>Masuk dengan Google</p>
              
             </button>
            
        </div>
        </div>
            <p onClick={()=>navigate('/auth/register')} className='text-sm mt-5 w-full text-center md:text-white'>Belum punya akun ?<span className='font-medium text-[#1fa0e2]'> Buat disini</span> </p>
      </div>
      {/* ------ Form Container ------ */}

    </div>
  )
}

export default Login
