import React, { useEffect, useState } from 'react'
import EarthRight from'../assets/earth right.png'
import EarthLeft from'../assets/earth left.png'
import Hamburger from '../assets/Hamburger.png'
import { NavLink, useNavigate } from 'react-router-dom'
import SearchBar from './SearchBar'
import { useStateContext } from '../Context/StateContext'
const Topbar = ({setModal,setPartnerModal,dataCompany,setDataCompany,getData}) => {
  const {currentLogin,setCurrentLogin} =useStateContext()
  const navigate = useNavigate()
  const [showKategori, setShowKategori] = useState(false)
  const [navbar,setNavbar]=useState(false)
  const changeNavbar = ()=>{
    if(window.scrollY >= 100){
      setNavbar(true)
    }else{
      setNavbar(false)
    }
  }
  
  window.addEventListener('scroll',changeNavbar)
  
  
  return (
    <>
    <div className={navbar?'w-full   bg-white sticky shadow-lg top-0 transition-all duration-300 ease-in-out flex  p-5 gap-2 justify-center  md:flex-col md:p-0 md:h-[15vh]':'w-full h-[20vh]  bg-[url(https://images8.alphacoders.com/125/1252336.jpg)] bg-cover  flex flex-col justify-center gap-2 items-center  transition-all duration-300 ease-in-out md:h-[50vh] md:justify-between'}>
      {/* ------ Topbar Desktop ------*/}
      <div className="hidden topbar w-full md:flex justify-between  pl-10 pr-10 pb-0 h-[50%] items-center ">
        <h1 className={navbar?'text-[#1fa0e2] text-[2rem] font-semibold ':'text-white text-[2rem] font-semibold'}>Lurasya</h1>
        <div className={navbar? `flex w-[50%]  justify-center` : ` hidden`}> 
          <SearchBar navbar={navbar} dataCompany={dataCompany} setDataCompany={setDataCompany} getData={getData}/>
        </div>
        <div className="PenggantiHamburger flex items-center gap-5">
         <button className={navbar?'text-black font-semibold text-sm':'text-white font-semibold text-sm'}>Download Aplikasi</button>
        <button  className={navbar?'text-black font-semibold text-sm':'text-white font-semibold text-sm'}>Tentang Kami</button>
          {
            currentLogin.role === 'user'? 
            <button onClick={()=>setPartnerModal(true)} className={navbar?'text-black font-semibold text-sm':'text-white font-semibold text-sm'}>Jadi Partner Lurasya</button>:currentLogin.role === 'Admin'? <button onClick={()=>navigate('partnership/create')} className='  text-white bg-[#1fa0e2] rounded-md w-[7rem] h-10 font-bold text-sm'>Create +</button>:null
          }
         
          <button className=' group relative'>
          <div className='overflow-hidden w-10 h-10 rounded-full'>
            <img src={currentLogin.images} className='w-full h-full object-cover' alt="" />
          </div>
          
            <ul className='bg-white w-32 absolute right-0  flex-col h-20 z-30 shadow-lg justify-evenly top-14 rounded-lg hidden group-focus:flex'>
              <li onClick={()=>navigate(`/${currentLogin.username}`)} className='w-full hover:bg-slate-300 pl-3 h-[50%] text-sm flex items-center '>Lihat Profil</li>
              <li onClick={()=>{
                localStorage.clear() 
                location.reload()}} className='w-full hover:bg-slate-300 pl-3 h-[50%] flex items-center text-sm'>Logout</li>
            </ul>
          </button>
        </div>
      </div>
      {/* ------ Topbar Desktop ------*/}



      
        {/* ------ Hamburger ------ */}
        <div className={navbar?'w-full flex flex-row-reverse  gap-2 items-center  md:p-3 md:hidden md:pt-0 md:pr-20':'w-full flex flex-col justify-center gap-2 items-center  md:h-[50vh] md:gap-10 '}>
        <div className={navbar?'w-auto flex justify-end md:hidden ':'w-full flex justify-end  pr-5 md:hidden'}>
        <img onClick={()=>setModal(true)} src={Hamburger} className='w-7 z-20' />
        </div >
        {/* ------ Hamburger ------ */}


        {/* ------ Greeting ------ */}
        <h1 className={navbar?'hidden':' text-white md:text-2xl '}>Hi {currentLogin.name}!,<span className='font-bold'>Mau kemana?</span></h1>
        {/* ------ Greeting ------ */}
        {/* ------ SearchBar ------ */}
        <div className={navbar? `md:hidden flex w-[90%]  ` : ` flex w-[70%] md:w-[60%] justify-center`}> 
          <SearchBar navbar={navbar}  dataCompany={dataCompany} setDataCompany={setDataCompany} getData={getData}/>
        </div>
        {/* ------ SearchBar ------ */}
        </div>
    </div>
    </>
    
  )
}

export default Topbar
