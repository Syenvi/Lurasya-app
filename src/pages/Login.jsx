import React, { useState } from 'react'
import bumiAtas from '../assets/login_earth atas.png'
import bumiBawah from '../assets/login earth bawah.png'
import bumi from '../assets/ion_earth.svg'
import {MdOutlineEmail} from 'react-icons/md'
import {BiLockOpenAlt} from 'react-icons/bi'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import iphone from '../assets/iphone.png'
import { useNavigate } from 'react-router-dom'
import instance from '../API/Api'
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const handleSubmit = (e)=>{
    e.preventDefault()
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
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen bg-[#1fa0e2] relative'>
      <img src={bumiAtas} className='right-0 absolute w-[50%]' />
      <img src={bumiBawah} className='bottom-0 absolute w-[70%]' />
      <div className='absolute w-[80%] h-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-5'>
        <h1 className='font-bold text-xl text-white'>Welcome Back</h1>
        <form className='w-full h-[500px] bg-white flex flex-col rounded-xl items-center justify-evenly' onSubmit={handleSubmit}>
          <img src={bumi} />
          <div className='w-full flex flex-col items-center gap-3'>
          <div className='flex p-1 text-white bg-[#1fa0e2] rounded-2xl w-[80%] border-2 border-[#1fa0e2] items-center gap-2'>
            <span><i><MdOutlineEmail/></i></span>
            <input required type="email" className='bg-[#1fa0e2] w-full outline-none' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className='flex p-1 text-[#1fa0e2] bg-white rounded-2xl w-[80%] border-2 border-[#1fa0e2] items-center gap-2'>
            <span><i><BiLockOpenAlt/></i></span>
            <input required type="password" className='bg-white w-full outline-none' value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className='flex w-[80%] justify-between text-xs'>
            <span className='flex gap-1'>
              <input type="checkbox" />
              <p>Ingat saya</p>
            </span>
            <p>Lupa Password?</p>
          </div>
          </div>
          <button className='bg-[#1fa0e2] text-md text-white font-medium w-[80%] rounded-2xl pt-1 pb-1'>Login</button>
        </form>
        <div className='flex w-full justify-center gap-2'>
          <img src={google} />
          <img src={facebook} />
          <img src={iphone} />
        </div>
        <p className='text-center text-white text-xs'>Tidak memiliki akun?<span className='font-medium' onClick={()=>navigate('/register')}>Register disini</span></p>
      </div>
    </div>
  )
}

export default Login
