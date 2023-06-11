import React, { useState } from 'react'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import axios from 'axios'
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'
import instance from '../../API/Api'
import CompanyInfoEdit from './CompanyInfoEdit'
import DomisiliCompanyEdit from './DomisiliCompanyEdit'

const EditCompany = () => {

  

const navigate=useNavigate()
  const [formData, setFormData] = useState({
    namaCompany :'',
    typeCompany:'',
    alamat :'',
    photoCompany:null,
    phone_number:'',
    provinsi :'',
    kota :'',
    kecamatan :'',
    desa :'',
    lat:'',
    lng:''
})
  const [page, setPage] = useState(0)
    const FormTitles = ['Infomasi Company','Alamat Company']
  const PageDisplay = ()=>{
    if(page == 0){
        return <CompanyInfoEdit formData={formData} setFormData={setFormData}/>
    }else{
        return <DomisiliCompanyEdit formData={formData} setFormData={setFormData}/>
    }
} 

const handleSubmit =()=>{
  // console.log(formData)

  if(isComplete()){
    console.log('sampai sini');
    let data = new FormData();
    data.append('CompanyName', formData.namaCompany);
    data.append('CompanyType', formData.typeCompany);
    data.append('CompanyAddres', formData.alamat);
    data.append('CompanyProvince', formData.provinsi);
    data.append('CompanyRegency', formData.kota);
    data.append('CompanyDistrict', formData.kecamatan);
    data.append('CompanyVillage', formData.desa);
    data.append('images1', formData.photoCompany);
    data.append('phone_number', formData.phone_number);
    data.append('lat', formData.lat);
    data.append('long', formData.lng);
    data.append('deskripsi', 'Tempat Makan Enakkk');
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/create-admin/1',
      headers: { 
      },
      data : data
    };
    
    instance.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      alert('bisa gan')
    })
    .catch((error) => {
      console.log(error)})
 }}
 const validatePhoneNumber = (phoneNumber) => {
  // Menghilangkan karakter selain angka
  const cleanedPhoneNumber = phoneNumber.replace(/\D/g, '');
  
  // Memeriksa apakah panjang nomor telepon valid
  if (cleanedPhoneNumber.length !== 10 && cleanedPhoneNumber.length !== 11 && cleanedPhoneNumber.length !== 12) {
    alert('Panjang nomor telepon 10 angka / 11 angka')
    return false;
  }
  // Memeriksa apakah nomor telepon dimulai dengan "08" atau "+628"
  else if (!/^08|^(\+62|62)/.test(cleanedPhoneNumber)) {
    alert('Harus dimulai dengan 08 / +628')
    return false;
  }else{
    return true;
  }
  
};

 const isComplete = () => {
  if (formData.namaCompany.trim() === "" ) {
    alert('Nama Company tidak valid. Harus terdiri dari minimal 4 karakter alfanumerik')
    return false;
  } else if  (formData.typeCompany.trim() === ""  ) {
    alert('Silahkan Pilih Type Company anda.')
    return false;
  } else if  (formData.photoCompany === null  ) {
    alert('Foto Company Wajib Diisi.')
    return false;
  }else if  (!validatePhoneNumber(formData.phone_number) ) {
    return false;
  }else if  (formData.alamat.trim() === '') {
    alert('Alamat Harus Diisi')
    return false;
  }else if (formData.provinsi.trim() === "" || formData.kota.trim() === "" || formData.kecamatan.trim() === "" || formData.desa.trim() === "") {
    alert('Data Domisili Harus Diisi Semua')
    return false;
  }else if  (formData.lat === '') {
    alert('Koordinat Maps Harus Diisi')
    return false; 
  }else{
    return true;
  }
};

  return (
    <div className='from w-full h-screen flex flex-col items-center '>
      {/* ---------- Header/Navbar ---------- */}
        <div className="header rounded-b-2xl h-[10vh] w-full bg-[#1fa0e2] flex justify-start p-5 items-center gap-2">
          <span className='text-2xl bg-white rounded-[50%] p-1'
          onClick={()=>{
            if(page === 0){
              navigate('/')
            }else{
              setPage(0)
            }
          }}
          >
          <IoIosArrowBack/>
          </span>
<h1 className='text-md font-medium text-white md:hidden'>{FormTitles[page]}</h1>
<h1 className='hidden ml-5 font-bold text-2xl  text-white md:flex '> Edit Company </h1>
        </div>
      {/* ---------- Header/Navbar ---------- */}
      {/* ---------- Konten/Body ---------- */}
            {/* ---------- Konten Desktop  ---------- */}

          <div className="body h-[85vh] hidden md:flex w-full">
          <div className="left w-[50%] h-full p-5">
            <CompanyInfoEdit formData={formData} setFormData={setFormData}/>
          </div>
          <div className="right w-[50%] h-full p-5 ">
            <DomisiliCompanyEdit formData={formData} setFormData={setFormData}/>
          </div>
          </div>
          <div className="eksekusi h-[5vh] w-full flex justify-end   p-5 items-center">

          <button 
            className='bg-[#1fa0e2] text-sm font-medium text-white  p-2 pl-5 pr-5 rounded-lg'
            onClick={() => {handleSubmit()}}>Submit</button>
          </div>

            {/* ---------- Konten Desktop  ---------- */}



      {/* ---------- Konten Mobile  ---------- */}

        <div className="body h-[90vh] w-full p-5 flex flex-col justify-center gap-5 md:hidden">
        {PageDisplay()}
        <div className="action flex gap-3 w-full justify-end">
            <button
            className='bg-[#1fa0e2] text-sm font-medium text-white disabled:hidden p-2 rounded-lg'
            disabled={page === 0}
            onClick={()=>setPage(page-1)}>Kembali</button>
            <button 
            disabled= { ()=>{  if (width <= 768) {isComplete()}}}
            className='bg-[#1fa0e2] text-sm font-medium text-white disabled:opacity-60 p-2 rounded-lg'
            onClick={() => {
              const width = window.innerWidth;
              if (width <= 768) {
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
                  setPage(page + 1);
                }}
              }}>{page === FormTitles.length - 1 ? 'Submit' : 'Selanjutnya' }</button>
        </div>
        </div>
              {/* ---------- Konten Mobile  ---------- */}

              {/* ---------- Konten/Body ---------- */}

    </div>
  )
}

export default EditCompany;
