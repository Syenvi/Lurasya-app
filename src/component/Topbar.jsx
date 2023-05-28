import React, { useState } from 'react'
import EarthRight from'../assets/earth right.png'
import EarthLeft from'../assets/earth left.png'
import Hamburger from '../assets/Hamburger.png'
import {BsSearch} from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
import {MdOutlineCancel} from 'react-icons/md'
import pemasaran from '../assets/modalPartner/bullhorn.png'
import gratis from '../assets/modalPartner/free.png'
import growth from '../assets/modalPartner/growth.png'
import pengusaha from '../assets/modalPartner/cooperation.png'
import cancel from '../assets/icons/cancel.png'
const Topbar = ({modal,setModal,partnerModal,setPartnerModal}) => {
  const [hasilKategori,setHasilKategori]=useState('Pilih Kategori')
  const navigate = useNavigate()
  const animateModal = () =>(modal?'':'translate-y-full')
  const backgroundModal = ()=> (modal?'flex':'hidden')
  const animatePartnerModal = () =>(partnerModal?'':'translate-y-full')
  const backgroundPartnerModal = ()=> (partnerModal?'flex':'hidden')
  const [navbar,setNavbar]=useState(false)
  const user = localStorage.getItem('user')
  const [showKategori, setShowKategori] = useState(false)
  const pilihKategori = ()=>(showKategori?'':'hidden')
  const isLoggedIn = user !== null; // Memeriksa apakah pengguna sudah login
  const changeNavbar = ()=>{
    if(window.scrollY >= 10){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  window.addEventListener('scroll',changeNavbar)
  const handleLogout = () => {
    // Logika logout disini
    localStorage.removeItem('user');
    setModal(false)
    // Tambahan logika lain yang diperlukan saat logout
  };
  const handlePartnerModal = () => {
    setModal(false); // Menutup modal sebelumnya (jika ada)
    setPartnerModal(true);
  };
  
  return (
    <>
    <div className={navbar?'w-full h-[10vh] bg-white sticky shadow-lg top-0 transition-all duration-300 ease-in-out flex flex-row-reverse p-5 gap-2 items-center':'w-full h-[20vh] bg-[#1fa0e2] bg-[url(https://img.freepik.com/free-vector/realistic-travel-background-with-elements_52683-77784.jpg?w=740&t=st=1684982187~exp=1684982787~hmac=84d5c2fb43de30cebefbc2cb86a48d61975e05b511721635fccd150bae4aba38)] bg-cover flex flex-col justify-center gap-2 items-center sticky top-0 transition-all duration-300 ease-in-out'}>
      
        {/* ------ Hamburger ------ */}
        <div className={navbar?'w-auto flex justify-end':'w-full flex justify-end  pr-5'}>
        <img onClick={()=>setModal(true)} src={Hamburger} className='w-7 z-20' />
        </div >
        {/* ------ Hamburger ------ */}
        {/* ------ Greeting ------ */}
        <h1 className={navbar?'hidden':' text-[#1fa0e3] '}>Hi Kamu,<span className='font-bold'>Mau kemana?</span></h1>
        {/* ------ Greeting ------ */}
        {/* ------ SearchBar ------ */}
        <div className={navbar?'bg-slate-200 p-2 rounded-2xl flex gap-3 items-center justify-between z-20 relative w-full':'bg-white p-2 rounded-2xl flex gap-3 items-center z-20 w-[80%] '}>
            <div className={navbar?'text-[10px] w-[20%] ':'border-r-2 text-[10px] w-[25%] relative'}>
              <p onClick={()=>setShowKategori(!showKategori)} className='text-[10px]'>{hasilKategori}</p>
              <ul className={navbar?`${pilihKategori()} absolute bg-slate-200 rounded-md top-10 shadow-md p-2 min`:`${pilihKategori()} absolute bg-white rounded-md top-10  p-2 min`}>
                <li onClick={()=>setHasilKategori('Tempat Ibadah')} className='text-[10px]'>Tempat Ibadah</li>
                <li onClick={()=>setHasilKategori('Minimarket')} className='text-[10px]'>Minimarket</li>
                <li onClick={()=>setHasilKategori('ATM')}className='text-[10px]'>ATM</li>
              </ul>
            </div>
              <input type="text" className={navbar?`${pilihKategori()}outline-none bg-transparent text-[10px] placeholder:text-[10px] w-[65%]`:`${pilihKategori()}outline-none bg-transparent text-[10px] placeholder:text-[10px] w-[65%]`}placeholder='Cari disini...' />
              <span className='w-[10%]' ><BsSearch/></span>
        </div>
        {/* ------ Greeting ------ */}
    </div>
       <div className='w-full'>
            <div className={`w-full h-auto rounded-t-3xl bg-white flex flex-col justify-center p-5 z-30 fixed bottom-0 duration-300 ease-in-out ${animateModal()}`}>
              <span onClick={()=>setModal(false)} >
                <img src={cancel}className='w-5 ' />
              </span>
              <h2 className='font-semibold text-2xl pt-2 pb-2'>Menu</h2>
              <NavLink onClick={handlePartnerModal}><p className='pt-2 pb-2'>Jadi Partner Lurasya</p></NavLink>
              <NavLink><p className='pt-2 pb-2'>Infromasi Lebih Lanjut</p></NavLink>
                 {isLoggedIn ? (
            // Jika pengguna sudah login, tampilkan tombol logout
            <button onClick={handleLogout} className='pt-2 pb-2 pl-12 pr-12 rounded-md bg-[#e2f7ff] text-[#1fa0e2]'>Logout</button>
          ) : (
            // Jika pengguna belum login, tombol login dan register tidak ditampilkan
            <div className='flex w-full justify-evenly'>
            <button onClick={()=>navigate('/login')} className='pt-2 pb-2 pl-12 pr-12 rounded-md bg-[#e2f7ff] text-[#1fa0e2] '>Masuk</button>
            <button onClick={()=>navigate('/register')} className='pt-2 pb-2 pl-12 pr-12 rounded-md bg-[#1fa0e2] text-[#e2f7ff]'>Daftar</button>
            </div>
          )}
            
          </div>
          <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ${backgroundModal()} z-20 `} onClick={()=>setModal(false)}>
            </div>
          </div>
          <div className='w-full relative'>
            <div className={`w-full h-auto rounded-t-3xl bg-white flex flex-col justify-center z-30 fixed bottom-0 duration-300 ease-in-out ${animatePartnerModal()} `}>
              <div className="top w-full shadow-lg sticky top-0 h-[7vh] flex p-5 ">
              <span onClick={()=>setPartnerModal(false)} >
                <img src={cancel} className='w-5 ' />
              </span>
              </div>
              <div className="desc p-5 flex flex-col gap-2">
              <h2 className='font-semibold text-2xl '>Yuk Jadi partner Lurasya!</h2>
              <p className='text-xs'>Gabung dan dapetin peluang menyambut lebih banyak tamu untuk usahamu.Daftarkan Caffe,Angkringan,Hotel dan nikmati keuntungannya</p>
              <div className="kelebihan flex flex-col gap-2 ">
                <div className='flex w-full  gap-3  '>
                  <img src={gratis} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Bergabung tanpa adanya biaya pendaftaran!</h3>
                    <p className='text-xs'>Bergabunglah Secara Gratis dan Mulai Membangun Bisnismu</p>
                  </span>
                </div>
                <div className='flex  gap-3  w-full'>
                  <img src={growth} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Kembangkan Usahamu dengan Aplikasi Kami</h3>
                    <p className='text-xs'>Kamu bisa merekomendasikan semua usahamu,bukan cuma hanya satu loh!</p>
                  </span>
                </div>
                <div className='flex w-full  gap-3 '>
                  <img src={pengusaha} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Jadilah Pengusaha Sukses dengan Bantuan Aplikasi Kami</h3>
                    <p className='text-xs'>Lampaui Batasanmu dan Capai Puncak Kesuksesan dengan Bantuan Aplikasi Kami yang Memaksimalkan Potensi Bisnismu</p>
                  </span>
                </div>
                <div className='flex w-full  gap-3 '>
                  <img src={pemasaran} className='w-12 h-12'/>
                  <span className='flex flex-col gap-1'>
                    <h3 className='text-sm font-medium'>Pemasaran luas</h3>
                    <p className='text-xs'>Usahamu akan dipasarkan ke jutaan pengguna Lurasya</p>
                  </span>
                </div>
                <p className='text-xs'>Mulsai sekarang dengan proses registrasi yang mudah dan cepat!</p>
                <div className="gabung-sekarang w-full flex flex-col items-center gap-5 rounded-lg bg-slate-100 p-2 shadow-2xl">
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
          </div>
          <div className={`fixed top-0 duration-300 ease-in-out left-0 w-full h-full bg-[rgba(0,0,0,0.5)] ${backgroundPartnerModal()} z-20 `} onClick={()=>setPartnerModal(false)}>
            </div>
          </div>
    </>
    
  )
}

export default Topbar
