import React, { useState } from 'react'
import { BrowserRouter, NavLink, Route, Routes, useNavigate } from 'react-router-dom'
import Home from './Home'
import MyAccount from './MyAccount'
import Botbar from '../../component/Botbar'
import Bookmark from './Bookmark'
import cancel from '../../assets/icons/cancel.png'
import {MdOutlineCancel} from 'react-icons/md'
import pemasaran from '../../assets/modalPartner/bullhorn.png'
import gratis from '../../assets/modalPartner/free.png'
import growth from '../../assets/modalPartner/growth.png'
import pengusaha from '../../assets/modalPartner/cooperation.png'
import DetailTempat from '../DetailTempat'

const HomeRoute = () => {

  const user = localStorage.getItem('user')
  const isLoggedIn = user !== null; // Memeriksa apakah pengguna sudah login
  const role = localStorage.getItem('role')
  const checkRole = role !== 'user'
  const animateModal = () =>(modal?'':'translate-y-full')
  const backgroundModal = ()=> (modal?'flex':'hidden')
  const animatePartnerModal = () =>(partnerModal?'md:translate-y-[-25%] md:rounded-2xl':'translate-y-full ')
  const backgroundPartnerModal = ()=> (partnerModal?'flex':'hidden')
  const [modal, setModal] = useState(false)
  const [partnerModal, setPartnerModal] = useState(false);

  const handlePartnerModal = () => {
    setModal(false); // Menutup modal sebelumnya (jika ada)
    setPartnerModal(true);
  };
  const handleLogout = ()=>{
    localStorage.removeItem('user')
  }
  const navigate = useNavigate()
  return (
    <>
    
        <Routes>
        <Route path='/' exact element={<Home modal={modal} setModal ={setModal}  partnerModal={partnerModal} setPartnerModal ={setPartnerModal}/>} />
        <Route path='/profile' exact element={<MyAccount/>} />
        <Route path='/create' exact element={<Bookmark/>}/>
        </Routes>
        <Botbar partnerModal={partnerModal} setPartnerModal ={setPartnerModal} isLoggedIn={isLoggedIn}/>

        {/* ---------- Hamburger ---------- */}
        <div className='w-full'>
            <div className={`w-full h-auto rounded-t-3xl bg-white flex flex-col justify-center p-5 z-30 fixed bottom-0 duration-300 ease-in-out ${animateModal()}`}>
              <span onClick={()=>setModal(false)} >
                <img src={cancel}className='w-5 ' />
              </span>
              <h2 className='font-semibold text-2xl pt-2 pb-2'>Menu</h2>
              {
                checkRole?null:
              <NavLink onClick={handlePartnerModal}><p className='pt-2 pb-2'>Jadi Partner Lurasya</p></NavLink>
              }
              <NavLink><p className='pt-2 pb-2'>Infromasi Lebih Lanjut</p></NavLink>
                 
            {/* // Jika pengguna sudah login, tampilkan tombol logout */}
            <button onClick={handleLogout} className='pt-2 pb-2 pl-12 pr-12 rounded-md bg-[#e2f7ff] text-[#1fa0e2]'>Logout</button>
         
          </div>
        {/* ---------- Hamburger ---------- */}
        {/* ---------- Promo Partnership ---------- */}

            
          <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-screen bg-[rgba(0,0,0,0.5)] ${backgroundModal()} z-20  `} onClick={()=>setModal(false)}>
            </div>
          </div>
          <div className='w-full relative flex justify-center items-center '>
            <div className={`w-full h-auto rounded-t-3xl bg-white flex flex-col justify-center z-30 fixed bottom-0 duration-300 ease-in-out ${animatePartnerModal()}  md:h-[70vh] md:w-[70%] `}>
              <div className="top w-full shadow-lg sticky top-0 h-[7vh] flex p-5 md:shadow-none md:justify-end md:items-center md:fixed">
              <span onClick={()=>setPartnerModal(false)} >
                <img src={cancel} className='w-5 ' />
              </span>
              </div>
              <div className="desc p-5 flex flex-col gap-2 md:gap-5 md:p-10">
              <h2 className='font-semibold text-2xl '>Yuk Jadi partner Lurasya!</h2>
              <p className='text-xs'>Gabung dan dapetin peluang menyambut lebih banyak tamu untuk usahamu.Daftarkan Caffe,Angkringan,Hotel dan nikmati keuntungannya</p>
              <div className="kelebihan flex flex-col gap-2 md:flex-row md:flex-wrap">
                <div className='flex w-full  gap-3 md:w-[49%] md:border md:p-2 md:border-slate-400 rounded-lg  '>
                  <img src={gratis} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Bergabung tanpa adanya biaya pendaftaran!</h3>
                    <p className='text-xs'>Bergabunglah Secara Gratis dan Mulai Membangun Bisnismu</p>
                  </span>
                </div>
                <div className='flex  gap-3 md:w-[49%] md:border md:p-2 md:border-slate-400 rounded-lg  w-full'>
                  <img src={growth} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Kembangkan Usahamu dengan Aplikasi Kami</h3>
                    <p className='text-xs'>Kamu bisa merekomendasikan semua usahamu,bukan cuma hanya satu loh!</p>
                  </span>
                </div>
                <div className='flex w-full  gap-3 md:w-[49%] md:border md:p-2 md:border-slate-400 rounded-lg '>
                  <img src={pengusaha} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Jadilah Pengusaha Sukses dengan Bantuan Aplikasi Kami</h3>
                    <p className='text-xs'>Lampaui Batasanmu dan Capai Puncak Kesuksesan dengan Bantuan Aplikasi Kami yang Memaksimalkan Potensi Bisnismu</p>
                  </span>
                </div>
                <div className='flex w-full  gap-3 md:w-[49%] md:border md:p-2 md:border-slate-400 rounded-lg '>
                  <img src={pemasaran} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Pemasaran luas</h3>
                    <p className='text-xs'>Usahamu akan dipasarkan ke jutaan pengguna Lurasya</p>
                  </span>
                </div>
              </div>
                <p className='text-xs md:text-center'>Mulsai sekarang dengan proses registrasi yang mudah dan cepat!</p>
                <div className="gabung-sekarang w-full flex flex-col items-center gap-5 rounded-lg bg-slate-100 p-2 shadow-2xl md:shadow">
                  <span className='flex w-full justify-center gap-3'>
                    <img src={gratis}className='w-10' />
                    <img src={growth}className='w-10' />
                    <img src={pengusaha}className='w-10' />
                    <img src={pemasaran}className='w-10' />
                  </span>
                  <button onClick={()=>navigate('partnership/create')} className='w-full bg-blue-300 p-2 rounded-md text-sm '>Gabung Sekarang</button>
                </div>
              </div>
          </div>
          <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ${backgroundPartnerModal()} z-20 `} onClick={()=>setPartnerModal(false)}>
            </div>
          </div>
                  {/* ---------- Partnership ---------- */}
             
    </>
  )
}

export default HomeRoute
