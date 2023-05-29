import React, { useState } from 'react'
import SignUp from './SignUp'
import Domisili from './Domisili'
import PersonalInfo from './PersonalInfo'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import gambar from '../../assets/RegisterImg/6310507.jpg'
import { useNavigate } from 'react-router-dom'
import instance from '../../API/Api'

const RegisterForm = () => {
  const navigate =useNavigate()
    const [page, setPage] = useState(0)
    const GambarVektor = [gambar]
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
        if (page === 0 && (formData.name.trim() === "" || !/^[a-zA-Z0-9_]{4,}$/.test(formData.name))) {
          alert('Username tidak valid. Harus terdiri dari minimal 4 karakter alfanumerik')
          return false;
        } else if (page === 1 && (formData.email.trim() === "" || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email) )) {
          alert('Email tidak valid. Silakan periksa kembali.')
          return false;
        } else if(page === 1 && (!/^.{8,}$/.test(formData.password) || formData.password.trim() === "") ){
          alert('Password Tidak Valid,Harus memiliki minimal 8 karakter huruf')
          return false
        }else if(page === 1 && (formData.password_confirmation.trim() === "" || formData.password_confirmation != formData.password)){
          alert('Password konfirmasi tidak cocok. Silakan periksa kembali.')
          return false
        }
        else if (page === 2 && (formData.provinsi.trim() === "" || formData.kota.trim() === "" || formData.kecamatan.trim() === "" || formData.desa.trim() === "")) {
          alert('Data Domisili Harus Diisi Semua')
          return false;
        } else {
          return true;
        }
      };
      
      const handleSubmit =()=>{
       if( isComplete()){
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
          // alert('err')
              alert(`Form Telah Disubmit
              Cek data anda
              ${formData.name}
              ${formData.email}
              ${formData.provinsi}
              ${formData.kecamatan}
              ${formData.kota}
              ${formData.desa}
              `);
        });
      }}

  return (
    <div className='from w-full h-screen flex flex-col md:flex-row justify-between items-center'>
        <div className="header w-full  flex flex-col justify-between p-5  ">
            <span className='text-[#1fa0e2] w-full text-xl'
            onClick={()=>{
              if(page === 0){
                navigate('/')
              }else{
                setPage(page-1)
              }
            }}
            ><MdOutlineArrowBackIos/></span>
        </div>
            <span className='w-full justify-center flex'><img src={GambarVektor} className='w-[70%]' /></span>
      <div className="form-container w-full h-[70vh] rounded-t-3xl  flex justify-between gap-5 items-start p-5 flex-col ">
        <div className="top w-full flex flex-col gap-5">
            <h1 className='text-2xl font-semibold '>{FormTitles[page]}</h1>
        <div className="body w-full flex flex-col gap-5 items-end ">
            {PageDisplay()}
        </div>
        <div className="footer flex gap-3 w-full justify-end ">
            <button
            className='bg-slate-200 text-[#1fa0e2] disabled:hidden p-2 rounded-lg'
            disabled={page === 0}
            onClick={()=>setPage(page-1)}>Kembali</button>
            <button 
            // disabled= {isComplete()}
            onClick={()=>{
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
              handleSubmit()
            } else {
              // Tombol "Selanjutnya" ditekan
              if(isComplete()){
                setPage(page + 1);
              }
            }
            }}
            className='bg-[#1fa0e2] text-white  p-2 rounded-lg'
            >{page === FormTitles.length - 1 ? 'Submit' : 'Selanjutnya' }</button>
        </div>
        </div>
            <p onClick={()=>navigate('/login')} className='text-sm mt-5 w-full text-center'>Sudah punya akun ?<span className='font-medium text-[#1fa0e2]'> Masuk disini</span> </p>
      </div>
    </div>
  )
}

export default RegisterForm
