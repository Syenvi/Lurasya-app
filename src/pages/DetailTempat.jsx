import React, { useState } from 'react'
import {BsShareFill} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlineComment} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'
import {IoBookmarksOutline} from 'react-icons/io5'
import {IoSend} from 'react-icons/io5'
import {GoKebabVertical} from 'react-icons/go'
import gambarwaifu from '../assets/Dummy/Kafe.jpg'
import { NavLink, useNavigate } from 'react-router-dom'
import Komentar from '../component/Komentar'
import {BiEditAlt} from 'react-icons/bi'
import {BsTrash3Fill} from 'react-icons/bs'
const DetailTempat = ({setShowDetail}) => {
  const [modal, setModal] = useState(false)
  const animateModal = () =>(modal?'':'translate-y-full')
  const backgroundModal = ()=> (modal?'flex':'hidden')
  const changeBookmark = ()=>(bookmark? <BsBookmarksFill className='text-[#1fa0e2]'/> : <IoBookmarksOutline/>)
  const [bookmark, setBookmark] = useState(false)
    const navigate = useNavigate()
  return (
    <div className='w-full h-screen fixed z-50 flex  justify-center items-center '>
     <div className='relative md:fixed z-50 w-full md:w-[80%] h-screen md:h-[70%] rounded-lg  flex justify-center items-center md:flex-row flex-col md:rounded-xl md:overflow-hidden'>
    <div className='w-full h-full flex flex-col md:flex-row z-40 items-center gap-3 bg-white relative md:gap-0'>
      {/* ------ KIRI ------- */}
      <div className="left md:w-[55%] md:relative md:h-full ">
        <nav className='w-full flex justify-between p-5 absolute md:hidden z-50 top-0'>
            <span className='bg-white rounded-[50%] p-2 ' onClick={()=>navigate('/')}><IoIosArrowBack/></span>
            <button className=' group relative'>
              <span className='bg-white rounded-[50%] p-2 flex justify-center items-center'><GoKebabVertical/></span>
              <ul className='hidden group-focus:flex absolute flex-col gap-2 p-3  right-0 top-10 bg-white  rounded-md text-sm w-[150px]'>
                <li className='flex items-center gap-2 '>
                  <BiEditAlt/>
                  <p>Edit</p>
                </li>
                <li className='flex items-center gap-2 '>
                  <BsTrash3Fill/>
                  <p>Hapus</p>
                </li>
              </ul>
            </button>
        </nav>
      <div className="img-container w-full  overflow-hidden rounded-b-2xl shadow-lg max-h-[75vh] md:h-full md:rounded-none relative z-10">
        <img src={gambarwaifu} className='w-full h-full object-cover' />
        <div className="maps w-16 h-16 absolute rounded-xl bg-white right-4 bottom-4"></div>
      </div>
      </div>
      {/* ------ KANAN ------- */}
      <div className='w-[90%] flex-flex-col gap-2 md:w-[45%] md:h-full '>
       <div className="flex justify-between w-full items-center md:flex-col md:items-start md:h-full">
          <div className="title  md:h-[10%] md:p-2 md:flex w-full md:justify-between">
        <div className="judul w-full">
        <h2 className='font-semibold'>Pantai Depok</h2>
          <p className='text-xs'>Kafe - Tirtohargo,Kretek,Bantul</p>
        </div>
          <button className=' group relative hidden md:flex'>
              <span className='bg-white rounded-[50%] p-2 flex justify-center items-center'><GoKebabVertical/></span>
              <ul className='hidden group-focus:flex absolute flex-col gap-2 p-3  right-0 top-10 bg-white  rounded-md text-sm w-[150px]'>
                <li className='flex items-center gap-2 '>
                  <BiEditAlt/>
                  <p>Edit</p>
                </li>
                <li className='flex items-center gap-2 '>
                  <BsTrash3Fill/>
                  <p>Hapus</p>
                </li>
              </ul>
            </button>
          </div>
          <div className="hidden md:flex min-h-[70%] max-h-[70%] border w-full">

          </div>
          <div className='flex w-full items-center gap-2 md:flex-col md:h-[20%] md:items-start md:p-2'>
          <div className="icon flex gap-2 w-full  justify-end">
          <span onClick={()=>setBookmark(!bookmark)} className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' >{changeBookmark()}</span>
          <span onClick={()=>{
            if (window.innerWidth < 768){
            setModal(true)}}} className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' ><AiOutlineComment/></span>
          <span className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' ><BsShareFill/></span>
          </div>
              <div className="add-comment w-full  h-10 md:flex  items-center hidden">
              <input type="text" className='w-[90%] h-full outline-none rounded-lg bg-slate-200'/>
              <IoSend className='w-[10%] text-lg'/>
              </div>
          </div>
       </div>
        <div className= 'md:hidden'>
            <h3 className='font-semibold'>Deskripsi</h3>
            <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum quidem officiis labore. Provident, quaerat incidunt natus inventore aperiam in atque necessitatibus odit, animi eius esse nisi nihil, pariatur odio?</p>
        </div>
      </div>
    </div>
    <div className='w-full h-screen md:hidden z-50'>
      
            <div className={`w-full h-auto rounded-t-3xl bg-white flex flex-col justify-center  z-50 fixed bottom-0 duration-300 ease-in-out ${animateModal()}`}>
             <div className='flex items-center justify-center border-b-2 relative p-3 '>
              <h2>Reactions</h2>
              <MdOutlineCancel className='absolute top-3 right-3 text-xl text-[#1fa0e2]' onClick={()=>setModal(false)}/>
             </div>
             <div className='w-full max-h-[50vh] flex flex-col p-3 items-center overflow-y-scroll relative'>
                <Komentar nama='Syahdinn' komentar='tempat ini sangat menarik dan sangat saya rekomendasi bahkan untuk semua kalangan,mulaidari anak kecil,remaja bahkan sampai orang dewasa'/>
                <Komentar nama='Udinnn' komentar='bagus'/>
               
             </div> 
            <div className='flex w-full gap-5 items-center p-3 sticky bottom-0 shadow-lg border-t-2'>
              <input type="text" className='w-full outline-none bg-slate-200 rounded-2xl text-xs p-2 pl-3' />
              <span  className='bg-slate-200 shadow-md rounded-[50%] text-[#1fa0e2] p-2 ' >
              <IoSend/>
              </span>
            </div>
          </div>
          <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ${backgroundModal()} z-20 `} onClick={()=>setModal(false)}>
            </div>
          </div>
          <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[rgba(0,0,0,0.5)] hidden md:flex  z-20 `} onClick={()=>setShowDetail(false)} >
            </div>
          </div>
    </div>
  )
}

export default DetailTempat
