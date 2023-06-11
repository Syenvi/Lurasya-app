import React, { useEffect, useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {MdPhotoCamera} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../Context/StateContext'

const EditProfil = () => {
  const {currentLogin} = useStateContext()

     //state untuk menyimpan gambar preview sebelum dikirimkan
  const [image, setImage] = useState(null)
  //fungsi untuk event onChange pada input type file
  const fileChangeHandler = (e)=>{
    //Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    // setPhoto(e.target.files[0])
    //Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setImage(URL.createObjectURL(e.target.files[0]))

  }
  const navigate = useNavigate()
  useEffect(()=>{
    setImage(currentLogin.images)



  },[])
  return (
    <div className="w-full h-full flex justify-center items-center">
    <div className='w-full h-screen flex flex-col justify-between md:w-[40%]'>
      <div className="top-bar flex justify-between h-[7vh] items-center p-5 bg-whote shadow-lg md:shadow-none font-bold">
        <span onClick={()=>navigate(`/${currentLogin.username}`)}><BiArrowBack/></span>
        <h1 className='text-sm'>Edit Profil</h1>
        <h1 className='text-sm'>Save</h1>
      </div>
      <div className="img-container w-full h-[25vh] flex items-center justify-center">
        <div className="img-mask w-[150px] h-[150px]  relative" >
        <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer z-20' onChange={fileChangeHandler}  />
        <span className='p-2 bg-[#1fa0e2] absolute bottom-0 right-0 rounded-full text-white text-lg z-10'><MdPhotoCamera/></span>
        <img src={image} className='w-full h-full object-cover rounded-full'/>
        </div>
      </div>
      <div className="main  rounded-lg p-5 bg-teal-400">
        <span className='flex flex-col'>
        <label>Nama</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg outline-[#1fa0e2]'/>
        </span>
         <span className='flex flex-col'>
        <label>Biodata</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg outline-[#1fa0e2] h-[200px] '/>
        <span className='flex flex-col opacity-60'>
        <label>Username</label>
        <input disabled type="text" className='p-2 bg-slate-200 rounded-lg outline-[#1fa0e2] '/>
        </span>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Email</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg outline-none' disabled/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Provinsi</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg outline-none' disabled/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Kabupaten</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg outline-none' disabled/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Kecamatan</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg outline-none' disabled/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Desa</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg outline-none' disabled/>
        </span>
        
      </div>
    </div >
    </div>
  )
}

export default EditProfil
