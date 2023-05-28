import React, { useEffect, useState } from 'react'
import bumiAtas from '../assets/earth right regoster.png'
import bumiBawah from '../assets/earth left register.png'
import bumi from '../assets/ion_earth.svg'
import {MdOutlineEmail} from 'react-icons/md'
import {BiLockOpenAlt} from 'react-icons/bi'
import google from '../assets/google.png'
import facebook from '../assets/facebook.png'
import iphone from '../assets/iphone.png'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Register = () => {
  const [provinsi, setProvinsi] = useState([])
  const [idProvinsi, setIdProvinsi] = useState('')
  const [kabupaten, setKabupaten] = useState([])
  const [idKabupaten, setIdKabupaten] = useState('')
  const [kecamatan, setKecamatan] = useState([])
  const [idKecamatan, setIdKecamatan] = useState('')
  const [desa, setDesa] = useState([])
  const [idDesa, setIdDesa] = useState('')

  useEffect(()=>{


    let provinsi = {
      method: 'get',
      maxBodyLength: Infinity,
      url: 'https://kanglerian.github.io/api-wilayah-indonesia/api/provinces.json',
      headers: {}
    };
    
    axios.request(provinsi)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setProvinsi(response.data)
    })
    .catch((error) => {
      console.log('Error:', error.message);
      console.log('Response:', error.response);
      console.log('Request:', error.request);
    });



  },[])
  useEffect(()=>{
    let kabupaten = {
      method: 'get',
      maxBodyLength: Infinity,
      url: `https://kanglerian.github.io/api-wilayah-indonesia/api/regencies/${idProvinsi}.json`,
      headers: {}
    };
    
    if (idProvinsi !== '') {
      axios.request(kabupaten)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          setKabupaten(response.data)
        })
        .catch((error) => {
          console.log('Error:', error.message);
          console.log('Response:', error.response);
          console.log('Request:', error.request);
        });
    }
    
  },[idProvinsi])
  const navigate = useNavigate()
  return (
    <div className='w-full h-screen bg-[#ffffff] relative'>
      <img src={bumiAtas} className='right-0 absolute w-[50%]' />
      <img src={bumiBawah} className='bottom-0 absolute w-[70%]' />
      <div className='absolute w-[80%] h-auto top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] flex flex-col gap-5 '>
        <h1 className='font-bold w-[70%] text-xl text-[#1fa0e2]'>Let’s Start Your Journey Together</h1>
        <form action="" className='flex flex-col items-center gap-1'>
          <img src={bumi} className='w-[70%]' />
          <label className='flex w-[90%]  p-1 text-[#1fa0e2] bg-white border-b-2 border-[#1fa0e2] items-center gap-2'>
            <span><i><MdOutlineEmail/></i></span>
            <input type="email " className='outline-0 w-full' placeholder='email'/>
          </label>
          <label className='flex w-[90%]  p-1 text-[#1fa0e2] bg-white border-b-2 border-[#1fa0e2] items-center gap-2'>
            <span><i><MdOutlineEmail/></i></span>
            <input type="email " className='outline-0 w-full' placeholder='password'/>
          </label> <label className='flex w-[90%]  p-1 text-[#1fa0e2] bg-white border-b-2 border-[#1fa0e2] items-center gap-2'>
            <span><i><MdOutlineEmail/></i></span>
            <input type="email " className='outline-0 w-full' placeholder='password confirmation'/>
          </label>
         <div className='flex w-[90%] flex-col items-start gap-1'>
             <select name="" id="" className='p-1 text-[#1fa0e2] bg-transparent border-b-2 border-[#1fa0e2] w-full'>
            <option  disabled value="">Pilih Provinsi</option>
            {
              provinsi.map((item)=>{
                return(<option onClick={() => setIdProvinsi(item.id)} key={item.id} value={item.name}>{item.name}</option>)
              })
            }
          </select>
          <select name="" id="" className='p-1 text-[#1fa0e2] bg-transparent border-b-2 border-[#1fa0e2] w-full'>
            <option  disabled value="">Kabupaten</option>
            {
              kabupaten.map((item)=>{
                return(<option key={item.id} value={item.name}>{item.name}</option>)
              })
            }
          </select> <select name="" id="" className='p-1 text-[#1fa0e2] bg-transparent border-b-2 border-[#1fa0e2] w-full'>
            <option  disabled value="">Pilih Kabupaten</option>
          </select> <select name="" id="" className='p-1 text-[#1fa0e2] bg-transparent border-b-2 border-[#1fa0e2] w-full'>
            <option  disabled value="">Pilih Kecamatan</option>
          </select>
         </div>
         <button className='w-[60%] bg-[#1fa0e2] rounded-md pt-2 pb-2 text-white text-sm mt-3 '>
          Register
         </button>
        </form>
        <div className='flex w-full justify-center gap-2'>
          <img src={google} />
          <img src={facebook} />
          <img src={iphone} />
        </div>
        <p className='text-center text-xs'>Sudah memiliki akun?<span className='font-medium' onClick={()=>navigate('/login')}>Login disini</span></p>
      </div>
    </div>
  )
}

export default Register
