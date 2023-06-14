import React, { useEffect, useState } from 'react'
import tambahGambar from '../../assets/image.png'

const CompanyInfo = ({formData,setFormData}) => {
  const [image, setImage] = useState(null)
  // const [photo, setPhoto] = useState(null)
  //fungsi untuk event onChange pada input type file
  useEffect(()=>{
    if(formData.photoCompany !== null){
    setImage(URL.createObjectURL(formData.photoCompany))
  }
  },[])
  const fileChangeHandler = (e)=>{
    //Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    const selectedFile = e.target.files[0]
    //Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setImage(URL.createObjectURL(selectedFile))
    setFormData((prevData) => ({  
      ...prevData,
      photoCompany : selectedFile
    }));
  }
  return (
    <div className='w-full flex flex-col items-center gap-5 h-full'>
       <div className="image-container w-full h-[300px] md:h-[320px] rounded-xl overflow-hidden relative bg-slate-200">
          {
              image?(
                <>
                <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer' onChange={fileChangeHandler}  />
                <img src={image} className='w-full h-full object-cover' alt="" />
                </>
              ):(
                <>
                <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer' onChange={fileChangeHandler} />
            <div className="order flex flex-col items-center justify-center gap-5 w-full h-full ">
              <img src={tambahGambar} className='w-[60px]' alt="" />
              <p className='font-medium text-[#1fa0e2] '>Tambahkan Gambar</p>
            </div>
                </>
              )
            }
          </div>
          <input type="text" className='w-full p-2 rounded-lg bg-slate-200 outline-[#1fa0e2] Company' value={formData.namaCompany} onChange={(e)=>setFormData({...formData,namaCompany:e.target.value})} placeholder='Masukkan Nama Company'/>
          <select  className='w-full p-2 rounded-lg bg-slate-200 outline-[#1fa0e2]' value={formData.typeCompany} onChange={(e)=>setFormData({...formData,typeCompany:e.target.value})}>
            <option value=''>Tipe Company</option>
            <option value="Kafe">Kafe</option>
            <option value="Tempat Wisata">Tempat Wisata</option>
            <option value="Minimarket">Minimarket</option>
            <option value="Hotel">Hotel</option>
            <option value="Angkringan">Angkringan</option>
          </select>
          <input type="text" className='w-full p-2 rounded-lg bg-slate-200 outline-[#1fa0e2]' placeholder='Masukkan Nomor Telepon' value={formData.phone_number} onChange={(e)=>setFormData({...formData,phone_number:e.target.value})}/>
          <textarea className='w-full p-2 rounded-lg bg-slate-200 outline-[#1fa0e2]'placeholder='Masukkan Deskripsi'  value={formData.deskripsi} onChange={(e)=>setFormData({...formData,deskripsi:e.target.value})}/>

    </div>
  )
}

export default CompanyInfo
