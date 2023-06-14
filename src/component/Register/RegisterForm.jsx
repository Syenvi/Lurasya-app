import React, { useEffect, useState } from 'react'
import SignUp from './SignUp'
import Domisili from './Domisili'
import PersonalInfo from './PersonalInfo'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import gambar from '../../assets/RegisterImg/6310507.jpg'
import { useNavigate } from 'react-router-dom'
import instance from '../../API/Api'
import gambarTravel from '../../assets/pngwing.com.png'

const RegisterForm = () => {
  const navigate =useNavigate()
  useEffect(()=>{
    if(localStorage.getItem('name') !== null ){
      navigate('/')
    }
  },[])
  const GambarVektor = [gambar]
  const [buttonRegister, setButtonRegister] = useState('Buat Akun')
  const [page, setPage] = useState(0)
    const FormTitles = ['Data Diri','Buat Akun','Domisili']
    const [formData, setFormData] = useState({
        name :'',
        username:'',
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
        if (page === 0 && (formData.name === "" || !/^[a-zA-Z0-9_]{4,}$/.test(formData.name))) {
          alert('Nama tidak valid. Harus terdiri dari minimal 4 karakter alfanumerik')
          return false;
        }else if(page === 0 && (formData.username.trim() === "" || !/^[a-zA-Z0-9_]{4,}$/.test(formData.username))) {
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
        setButtonRegister('Sedang Membuat Akun...')
       if( isComplete()){
        let config = {
          method: 'post',
          maxBodyLength: Infinity,
          url: '/auth-registration',
          headers: {},
          data : formData
        };
        
        instance.request(config)
        .then((response) => {
          console.log(JSON.stringify(response.data));
          if (response.data && response.data.username && response.data.username.length > 0) {
            alert('Gagal: ' + response.data.username[0]);
            navigate('/')
          }else if (response.data && response.data.email && response.data.email.length > 0) {
            alert('Gagal: ' + response.data.email[0]);
            navigate('/')
          }else {
            alert('Berhasil');
            setButtonRegister('Buat Akun')
            localStorage.setItem('emailVerif',response.data.data.email)
            localStorage.setItem('tokenVerif',response.data.access_token)
            navigate('/verifikasi-otp')
          }
        })
        .catch((error) => {
          console.log(error);
          setButtonRegister('Buat Akun')
          // alert('err')
        });
      }}

  return (
    <div className='from w-full h-screen flex flex-col justify-between items-center md:flex-row md:justify-center md:bg-[url(https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=740&t=st=1686709029~exp=1686709629~hmac=0144bdcb8c32086c9fbf4341be0565d89d65c7b056a9077c79f8b9840edb6d5b)] bg-cover'>
        <div className="header w-full  flex flex-col justify-between p-5 md:h-[80%] md:w-[60%]  md:rounded-l-2xl md:bg-white  ">
            <span className='text-[#1fa0e2] w-full text-xl h-[5%]'
            onClick={()=>{
              if(page === 0){
                navigate('/')
              }else{
                setPage(page-1)
              }
            }}
            ><MdOutlineArrowBackIos/></span>
              <div className='md:flex flex-col w-full h-full justify-center items-start pl-10 hidden gap-5'>
                <img src={gambarTravel} className='w-[200px] ' alt="" />
                <h3 className='text-[2rem] w-[60%] font-bold text-[#1fa0e2]'>Perjalanan Anda dimulai dari sini</h3>
                <p>Buat akun untuk masuk ke halaman utama</p>
            </div>
        </div>

            <span className='w-full justify-center flex md:hidden'><img src={GambarVektor} className='w-[60%]' /></span>

      <div className="form-container w-full h-[70vh] rounded-t-3xl  flex justify-between gap-5 items-start p-5 flex-col md:w-[25%] md:h-[80vh] md:rounded-none md:rounded-r-2xl md:bg-[rgba(0,0,0,0.12)] backdrop-blur-md ">
        <div className="top w-full flex flex-col gap-5">
            <h1 className='text-2xl font-semibold md:text-3xl md:text-white'>{FormTitles[page]}</h1>
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
            >{page === FormTitles.length - 1 ? `${buttonRegister}` : 'Selanjutnya' }</button>
        </div>
        </div>
            <p onClick={()=>navigate('/auth/login')} className='text-sm mt-5 w-full text-center md:text-white'>Sudah punya akun ?<span className='font-medium text-[#1fa0e2]'> Masuk disini</span> </p>
      </div>
    </div>
  )
}

export default RegisterForm
