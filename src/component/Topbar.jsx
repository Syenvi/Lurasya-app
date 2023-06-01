import React, { useState } from 'react'
import EarthRight from'../assets/earth right.png'
import EarthLeft from'../assets/earth left.png'
import Hamburger from '../assets/Hamburger.png'
import {BsSearch} from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
const Topbar = ({setModal,setPartnerModal}) => {
  const [hasilKategori,setHasilKategori]=useState('Pilih Kategori')
  const navigate = useNavigate()
  const [showKategori, setShowKategori] = useState(false)
  const [navbar,setNavbar]=useState(false)
  const user = localStorage.getItem('user')
  const role = localStorage.getItem('role')
  const isLoggedIn = user !== null; // Memeriksa apakah pengguna sudah login
  const checkRole = role !== user
  const pilihKategori = ()=>(showKategori?'':'hidden')
  const changeNavbar = ()=>{
    if(window.scrollY >= 100){
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
  
  return (
    <>
    <div className={navbar?'w-full h-[10vh] bg-white sticky shadow-lg top-0 transition-all duration-300 ease-in-out flex  p-5 gap-2 justify-center  md:flex-col md:p-0 md:h-[15vh]':'w-full h-[20vh]  bg-[url(https://s-light.tiket.photos/t/01E25EBZS3W0FY9GTG6C42E1SE/discovery-desktop/hero-banner/2022/07/18/897ebe40-0e9b-40b1-8a39-7ef03ca3444d-1658117837173-81a0774262fc44bfde4ebb9345a51997.png?w=1024)] bg-cover  flex flex-col justify-center gap-2 items-center  transition-all duration-300 ease-in-out md:h-[50vh] md:justify-between'}>
      {/* ------ Topbar Desktop ------*/}
      <div className="hidden topbar w-full md:flex justify-between p-3 pl-20 pr-20 pb-0 h-[50%] items-start ">
        <h1 className={navbar?'text-[#1fa0e2] text-[25px] font-semibold ':'text-white text-[25px] font-semibold'}>Lurasya</h1>
        <div className="PenggantiHamburger flex items-center gap-5">
          {
            role === 'user'? 
            <h1 onClick={()=>setPartnerModal(true)} className={navbar?'text-black font-semibold text-lg':'text-white font-semibold text-lg'}>Jadi Partner Lurasya</h1>:null
          }
          {
            role === 'admin' || role ==='Super Admin'? <button onClick={()=>navigate('partnership/create')} className='  text-white bg-[#1fa0e2] rounded-lg w-24 h-8 font-medium text-xs'>Create +</button> :null
          }
          <button className=' group relative'>
          <div className={navbar?'bg-black w-8 h-8 rounded-full':'profileIcon w-8 h-8 rounded-full bg-white'}>
          </div>
            <ul className='bg-white w-32 absolute right-0  flex-col h-20 z-30 shadow-lg justify-evenly top-14 rounded-lg hidden group-focus:flex'>
              <li className='w-full hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Edit Profil</li>
              <li className='w-full hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Logout</li>
            </ul>
          </button>
        </div>
      </div>
      {/* ------ Topbar Desktop ------*/}



      
        <div className={navbar?'w-full flex flex-row-reverse  gap-2 items-center  md:p-3 md:h-[50%] md:pt-0 md:pr-20':'w-full flex flex-col justify-center gap-2 items-center  md:h-[50vh] md:gap-10'}>
        {/* ------ Hamburger ------ */}
        <div className={navbar?'w-auto flex justify-end md:hidden ':'w-full flex justify-end  pr-5 md:hidden'}>
        <img onClick={()=>setModal(true)} src={Hamburger} className='w-7 z-20' />
        </div >
        {/* ------ Hamburger ------ */}


        {/* ------ Greeting ------ */}
        <h1 className={navbar?'hidden':' text-white md:text-2xl '}>Hi Kamu,<span className='font-bold'>Mau kemana?</span></h1>
        {/* ------ Greeting ------ */}
        {/* ------ SearchBar ------ */}
        <div className={navbar?'bg-slate-200 rounded-3xl flex gap-3 items-center justify-between z-20 relative w-full md:w-[40%] h-7 ':'bg-white p-0 h-7 rounded-2xl flex gap-3 items-center z-20 relative w-[80%] md:w-[50%] md:h-12 md:rounded-3xl  '}>
              <ul className={navbar?`${pilihKategori()} absolute bg-slate-200 rounded-md top-10 shadow-md p-2 min md:top-16 md:left-0 md:p-5`:`${pilihKategori()} absolute bg-white rounded-md top-10  p-2 md:p-5 md:text-base md:top-16 md:rounded-lg md:left-0`}>
                <li onClick={()=>setHasilKategori('Tempat Ibadah')} className='text-[10px] md:text-base'>Tempat Ibadah</li>
                <li onClick={()=>setHasilKategori('Minimarket')} className='text-[10px] md:text-base'>Minimarket</li>
                <li onClick={()=>setHasilKategori('ATM')}className='text-[10px] md:text-base'>ATM</li>
              </ul>
            <div className={navbar?'text-[10px] w-[25%] flex justify-center items-center rounded-l-3xl text-white h-full md:items-center bg-[#1fa0e2] md:rounded-l-3xl  md:w-[20%]  ':' text-white text-[10px] w-[25%] md:w-[20%] flex justify-center h-full rounded-l-2xl items-center bg-[#1fa0e2]  md:rounded-l-3xl'}>
              <p onClick={()=>setShowKategori(!showKategori)} className='text-[9px] md:text-xs '>{hasilKategori}</p>
            </div>
              <input type="text" className={navbar?`outline-none bg-transparent text-[10px] placeholder:text-[10px] w-[65%] md:w-[70%] md:h-full md:placeholder:text-xs md:text-xs`:`outline-none bg-transparent text-[10px] placeholder:text-[10px] w-[65%] h-full md:placeholder:text-sm md:text-sm md:w-[70%] `}placeholder='Cari disini...' />
              <span className='w-[10%] flex justify-center items-center text-sm md:text-base' ><BsSearch/></span>
        </div>
        {/* ------ SearchBar ------ */}
        </div>
    </div>
    </>
    
  )
}

export default Topbar
