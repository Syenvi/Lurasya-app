import React, { useEffect, useState } from 'react'
import {BiArrowBack} from 'react-icons/bi'
import {MdPhotoCamera} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'
import { useStateContext } from '../Context/StateContext'
import instance from '../API/Api'

const EditProfil = () => {
  const {currentLogin} = useStateContext()
  const [editNama, setEditNama] = useState('')
  const [editBiodata, setEditBiodata] = useState('')
  const [photo,setPhoto] =useState('')
     //state untuk menyimpan gambar preview sebelum dikirimkan
  const [image, setImage] = useState(null)
  //fungsi untuk event onChange pada input type file
  const fileChangeHandler = (e)=>{
    //Mengambil value bukan (e.target.value) tetapi (e.target.files[0])
    //Membuat Object URL agar bisa ditampilkan gambar yang dipilih
    setPhoto(e.target.files[0])
    setImage(URL.createObjectURL(e.target.files[0]))

  }
  const navigate = useNavigate()
  useEffect(()=>{
    setImage(currentLogin.images)
    fetch(currentLogin.images)
          .then(res => res.blob())
          .then(blob =>{
            console.log(blob);
            const nameFile = currentLogin.images
            const file = new File([blob], nameFile,{type: blob.type})
            setPhoto(file)
          })
    setEditNama(currentLogin.name)
    setEditBiodata(currentLogin.biodata)
  },[])

  const handleSubmit=()=>{
    let data = new FormData();
    data.append('name', editNama);
    data.append('biodata', editBiodata);
data.append('profile', photo);

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/update-bio-profile',
  headers: { 
    'Authorization': `Bearer ${currentLogin.token}`},
  data : data
};

instance.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  localStorage.setItem('name',JSON.stringify(response.data.name))
  localStorage.setItem('profile',JSON.stringify(response.data.profile))
  localStorage.setItem('biodata',JSON.stringify(response.data.biodata))
  location.reload()
})
.catch((error) => {
  console.log(error);
});
  }

  return (
    <div className="w-full h-screen flex justify-center items-center">
    <div className='w-full h-full flex flex-col  md:w-[80%] md:h-[80%] md:bg-white md:border md:shadow-lg md:rounded-xl justify-center md:relative'>
      {/* ------ ATAS ------ */}
      <div className="top-bar flex justify-between h-[7vh] items-center p-5 bg-whote shadow-lg  font-bold md:absolute  md:top-0 fixed top-0 w-full">
        <span onClick={()=>navigate(`/${currentLogin.username}`)}><BiArrowBack/></span>
        <h1 className='text-sm'>Edit Profil</h1>
        <h1 className='text-sm' onClick={()=>handleSubmit()}>Save</h1>
      </div>
      {/* ------ ATAS ------ */}
      {/* ------ BAWAH ------ */}
      <div className="container-bawah flex flex-col items-center">

      <div className="img-container w-full md:w-[60%] h-[25vh] md:h-[15vh] flex items-center justify-center md:justify-start md:border md:rounded-none md:rounded-t-xl md:p-5 md:gap-5">
        <div className="img-mask w-[150px] h-[150px] md:w-[80px] md:h-[80px]  relative " >
        <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer z-20' onChange={fileChangeHandler}  />
        <span className='p-2 bg-[#1fa0e2] absolute bottom-0 right-0 rounded-full text-white text-lg md:text-xs z-10'><MdPhotoCamera/></span>
        <img src={image} className='w-full h-full object-cover rounded-full'/>
        </div>
        <div className='hidden md:flex flex-col'>
          <h1 className='font-semibold'>{currentLogin.username}</h1>
          <span className='relative'>
          <p className='text-[#1fa0e2] underline font-medium'>Ubah foto profil</p>
          <input type="file" id='input' className=' w-full h-full absolute opacity-0 cursor-pointer z-20' onChange={fileChangeHandler}  />
          </span>
        </div>
      </div>
      <div className="main  rounded-lg w-full p-5 md:w-[60%] md:border md:rounded-none md:rounded-b-xl flex flex-col gap-5">
        <span className='flex flex-col md:flex-row md:w-full  md:justify-between '>
        <label className='w-[30%]'>Nama</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg md:w-[70%] outline-[#1fa0e2]' value={editNama} onChange={(e)=>setEditNama(e.target.value)}/>
        </span>
         <span className='flex flex-col md:flex-row md:w-full  md:justify-between'>
        <label className='w-[30%]'>Biodata</label>
        <textarea type="text" className='p-2 bg-slate-200 rounded-lg md:w-[70%] min-h-[100px] max-h-[100px] outline-[#1fa0e2] h-[200px] 'onChange={(e)=>setEditBiodata(e.target.value)} value={editBiodata}/>
        </span>
        <span className='flex flex-col md:flex-row md:w-full  md:justify-between opacity-60'>
        <label className='w-[30%]'>Email</label>
        <input type="text" className='p-2 bg-slate-200 rounded-lg md:w-[70%] outline-none' value={currentLogin.email} disabled/>
        </span>

        
      </div>
      </div>

            {/* ------ BAWAH ------ */}

    </div >
    </div>
  )
}

export default EditProfil
