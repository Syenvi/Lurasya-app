import React, { useState } from 'react'
import SignUp from './SignUp'
import Domisili from './Domisili'
import PersonalInfo from './PersonalInfo'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import axios from 'axios'
import gambar1 from '../../assets/RegisterImg/Onoboarding_1 1.png'
import gambar2 from '../../assets/RegisterImg/Onboarding_2 1.png'
import gambar3 from '../../assets/RegisterImg//Onboarding_3 1.png'
import { useNavigate } from 'react-router-dom'
import instance from '../../API/Api'

const RegisterForm = () => {
  const navigate =useNavigate()
    const [page, setPage] = useState(0)
    const GambarVektor = [gambar1,gambar2,gambar3]
    const FormTitles = ['Data Diri','Buat Akun','Domisili']
    const [formData, setFormData] = useState({
        name :'',
        email :'',
        password :'',
        password_confirmation :'',
        provinsi :'',
        kota :'',
        kecamatan :'',
        desa :'',
    })
    const PageDisplay = ()=>{
        if(page == 0){
            return <PersonalInfo formData={formData} setFormData={setFormData}/>
        }else if(page == 1){
            return <SignUp formData={formData} setFormData={setFormData}/>
        }else{
            return <Domisili formData={formData} setFormData={setFormData}/>
        }
    } 
    const isComplete = () => {
        if (page === 0 && formData.name.trim() === "" ) {
          return true;
        } else if (page === 1 && (formData.email.trim() === "" || formData.password.trim() === "" || formData.password_confirmation.trim() === "")) {
          return true;
        } else if (page === 2 && (formData.provinsi.trim() === "" || formData.kota.trim() === "" || formData.kecamatan.trim() === "" || formData.desa.trim() === "")) {
          return true;
        } else {
          return false;
        }
      };
      
      const handleSubmit =(e)=>{
        e.preventDefault()
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: '/registrasi-user',
          headers: {},
          data : formData
        };
        
        instance.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          alert('bisa COk')
        })
        .catch((error) => {
          console.log(error);
        });
      }

  return (
    <div className='from w-full h-screen flex flex-col justify-center items-center bg-white'>
        <div className="header w-full h-[30vh] flex flex-col p-5 ">
            <span className='text-[#1fa0e2] w-full text-xl'
            onClick={()=>{
              if(page === 0){
                navigate('/')
              }else{
                setPage(page-1)
              }
            }}
            ><MdOutlineArrowBackIos/></span>
            <span className='w-full justify-center flex'><img src={GambarVektor[page]} className='w-[40%]' /></span>
        </div>
      <div className="form-container w-full h-[70vh] rounded-t-3xl  flex justify-center gap-5 items-center flex-col bg-[#1fa0e2]">
            <h1 className='text-2xl text-white font-semibold '>{FormTitles[page]}</h1>
        <form onSubmit={(e)=>{
            if (page === FormTitles.length - 1) {
              // // Tombol "Submit" ditekan
              // alert(`Form Telah Disubmit
              // Cek data anda
              // ${formData.name}
              // ${formData.email}
              // ${formData.provinsi}
              // ${formData.kecamatan}
              // ${formData.kota}
              // ${formData.desa}
              // `);
              handleSubmit(e)
            } else {
              // Tombol "Selanjutnya" ditekan
              e.preventDefault()
              setPage(page + 1);
            }
        }} className="body w-[70%]">
            {PageDisplay()}
        <div className="footer flex gap-3  ">
            <button
            className='bg-white text-[#1fa0e2] disabled:opacity-50 p-2 rounded-lg'
            disabled={page === 0}
            onClick={()=>setPage(page-1)}>Kembali</button>
            <button 
            // disabled= {isComplete()}
            className='bg-white text-[#1fa0e2] disabled:opacity-50 p-2 rounded-lg'
            >{page === FormTitles.length - 1 ? 'Submit' : 'Selanjutnya' }</button>
        </div>
        </form>
      </div>
    </div>
  )
}

export default RegisterForm
