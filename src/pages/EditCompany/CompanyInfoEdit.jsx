import React, { useState } from 'react'
import tambahGambar from '../../assets/image.png'

const CompanyInfoEdit   = ({formData,setFormData}) => {
  const [image, setImage] = useState(null)
  // const [photo, setPhoto] = useState(null)
  //fungsi untuk event onChange pada input type file
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
       <div className="image-container w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden relative bg-slate-200">
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
          <input type="text" className='w-full p-2 rounded-lg bg-slate-200' placeholder='Nama Company' value={formData.namaCompany} onChange={(e)=>setFormData({...formData,namaCompany:e.target.value})}/>
          <input type="text" className='w-full p-2 rounded-lg bg-slate-200' placeholder='Type Company' value={formData.typeCompany} onChange={(e)=>setFormData({...formData,typeCompany:e.target.value})}/>
          <input type="text" className='w-full p-2 rounded-lg bg-slate-200' placeholder='Telp.' value={formData.phone_number} onChange={(e)=>setFormData({...formData,phone_number:e.target.value})}/>
    </div>
  )
}

export default CompanyInfoEdit
