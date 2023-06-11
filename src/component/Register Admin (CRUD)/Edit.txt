import React, { useState } from 'react'
import {MdOutlineArrowBackIos} from 'react-icons/md'
import axios from 'axios'
import CompanyInfo from './CompanyInfo'
import DomisiliCompany from './DomisiliCompany'
import {IoIosArrowBack} from 'react-icons/io'
import { useNavigate } from 'react-router-dom'

const Edit = () => {
const navigate=useNavigate()
  const [formData, setFormData] = useState({
    namaCompany :'',
    typeCompany:'',
    photoCompany:'',
    alamat :'',
    provinsi :'',
    kota :'',
    kecamatan :'',
    desa :'',
    lat:'',
    lng:''
})
  const [page, setPage] = useState(0)
    const FormTitles = ['Company Info','Alamat Company']
  const PageDisplay = ()=>{
    if(page == 0){
        return <CompanyInfo formData={formData} setFormData={setFormData}/>
    }else{
        return <DomisiliCompany formData={formData} setFormData={setFormData}/>
    }
} 
const isComplete = () => {
  };

  return (
    <div className='from w-full h-screen flex flex-col items-center '>
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
<h1 className='text-md font-medium text-white'>{FormTitles[page]}</h1>
        </div>
        <div className="body h-[90vh] w-full p-5 flex flex-col justify-center gap-5">
        {PageDisplay()}
        <div className="action flex gap-3 w-full justify-end">
            <button
            className='bg-[#1fa0e2] text-sm font-medium text-white disabled:hidden p-2 rounded-lg'
            disabled={page === 0}
            onClick={()=>setPage(page-1)}>Kembali</button>
            <button 
            disabled= {isComplete()}
            className='bg-[#1fa0e2] text-sm font-medium text-white disabled:opacity-60 p-2 rounded-lg'
            onClick={() => {
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
                }
              }}>{page === FormTitles.length - 1 ? 'Submit' : 'Selanjutnya' }</button>
        </div>
        </div>
    </div>
  )
}

export default Edit;
