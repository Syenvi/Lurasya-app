import React, { useState } from 'react'
import EarthRight from'../assets/earth right.png'
import EarthLeft from'../assets/earth left.png'
import Hamburger from '../assets/Hamburger.png'
import {BsSearch} from 'react-icons/bs'
import { NavLink, useNavigate } from 'react-router-dom'
const Topbar = ({modal,setModal,partnerModal,setPartnerModal}) => {
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
    </>
    
  )
}

export default Topbar
