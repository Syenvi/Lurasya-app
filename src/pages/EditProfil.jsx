import React, { useEffect, useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import profil from '../assets/Dummy/Dayoung❤️.jpeg'
import {MdPhotoCamera} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const EditProfil = () => {
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
    setImage(profil)
  },[])
  return (
    
    <div className='w-full h-screen flex flex-col justify-between'>
      <div className="top-bar flex justify-between h-[7vh] items-center p-5 bg-whote shadow-lg">
        <span onClick={()=>navigate('/profile')}><BiArrowBack/></span>
        <h1>Edit Profil</h1>
        <h1>Save</h1>
      </div>
      <div className="img-container w-full h-[25vh] flex items-center justify-center">
        <div className="img-mask w-[150px] h-[150px]  relative" >
        <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer z-20' onChange={fileChangeHandler}  />
        <span className='p-2 bg-[#1fa0e2] absolute bottom-0 right-0 rounded-full text-white text-lg z-10'><MdPhotoCamera/></span>
        <img src={image} className='w-full h-full object-cover rounded-full'/>
        </div>
      </div>
      <div className="main h-[68vh] rounded-lg p-5">
        <span className='flex flex-col'>
        <label>Nama</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg'/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Email</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg'/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Provinsi</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg'/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Kabupaten</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg'/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Kecamatan</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg'/>
        </span>
        <span className='flex flex-col opacity-60'>
        <label>Desa</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg'/>
        </span>
        
      </div>
    </div >
  )
}

export default EditProfil
