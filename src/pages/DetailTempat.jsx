import React, { useState } from 'react'
import {BsShareFill} from 'react-icons/bs'
import {IoIosArrowBack} from 'react-icons/io'
import {AiOutlineComment} from 'react-icons/ai'
import {MdOutlineCancel} from 'react-icons/md'
import {BsBookmarksFill} from 'react-icons/bs'
import {IoBookmarksOutline} from 'react-icons/io5'
import {IoSend} from 'react-icons/io5'
import gambarTempat from '../assets/Dummy/Kafe.jpg'
import gambarwaifu from '../assets/Dummy/Yoimiya.jpeg'
import { NavLink, useNavigate } from 'react-router-dom'
import Komentar from '../component/Komentar'
const DetailTempat = () => {
  const [modal, setModal] = useState(false)
  const animateModal = () =>(modal?'':'translate-y-full')
  const backgroundModal = ()=> (modal?'flex':'hidden')
  const changeBookmark = ()=>(bookmark? <BsBookmarksFill className='text-[#1fa0e2]'/> : <IoBookmarksOutline/>)
  const [bookmark, setBookmark] = useState(false)
    const navigate = useNavigate()
  return (
    <>
    <div className='w-full h-full flex flex-col items-center gap-3'>
        <nav className='w-full flex justify-between p-5 fixed top-0'>
            <span className='bg-white rounded-[50%] p-2 ' onClick={()=>navigate('/')}><IoIosArrowBack/></span>
        </nav>
      <div className="img-container w-full  overflow-hidden rounded-b-2xl shadow-lg max-h-[75vh]">
        <img src={gambarwaifu} className='w-full h-full object-cover' />
      </div>
      <div className='w-[90%] flex-flex-col gap-2'>
       <div className="flex justify-between w-full items-center ">
          <div className="title  ">
          <p className='text-xs'>Kafe - Tirtohargo,Kretek,Bantul</p>
        <h2 className='font-semibold'>Pantai Depok</h2>
          </div>
          <div className='flex  items-center gap-2'>
          <span onClick={()=>setBookmark(!bookmark)} className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' >{changeBookmark()}</span>
          <span onClick={()=>setModal(true)} className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' ><AiOutlineComment/></span>
          <span className='w-7 bg-slate-200 shadow-md h-7 p-2 flex items-center rounded-[50%] ' ><BsShareFill/></span>

          </div>
       </div>
            <div className='w-full flex flex-col items-center text-xs'>
                <span>4,8</span>
                <p>436 Review</p>
            </div>
        <div>
            <h3 className='font-semibold'>Deskripsi</h3>
            <p className='text-xs'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod voluptatum quidem officiis labore. Provident, quaerat incidunt natus inventore aperiam in atque necessitatibus odit, animi eius esse nisi nihil, pariatur odio?</p>
        </div>
      </div>
    </div>
    <div>
            <div className={`w-full h-auto rounded-t-3xl bg-white flex flex-col justify-center  z-30 fixed bottom-0 duration-300 ease-in-out ${animateModal()}`}>
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
    </>
  )
}

export default DetailTempat
