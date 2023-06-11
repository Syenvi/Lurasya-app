import React from 'react'
import {IoHome} from 'react-icons/io5'
import add from '../assets/plus.png'
import {RiUser3Fill} from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
import { useStateContext } from '../Context/StateContext'
const Botbar = ({setPartnerModal,isLoggedIn}) => {
  const {currentLogin,setCurrentLogin} =useStateContext()

  const check = ()=>(currentLogin.name !== null?'':'hidden')
  const navigate = useNavigate()
  const activeLink = ({isActive})=>(isActive? 'flex flex-col justify-center items-center gap-1 text-md text-[#1fa0e2]':'flex flex-col justify-center items-center gap-1 text-md text-slate-500')
  return (
    <div className={`${check() } w-full h-[5vh] justify-evenly flex items-center fixed bottom-0 shadow-[4px_4px_12px_rgba(0,0,0,0.25)] rounded-t-lg z-10 bg-white md:hidden `}>
      <NavLink className={activeLink} exact to='/'>
        <i ><IoHome/></i>
      </NavLink>
      {
        (currentLogin.role === 'Admin' || currentLogin.role === 'user')?<span  onClick={()=>{
          if(currentLogin.role === 'Admin'){
            navigate('/partnership/create')
          }else{
            setPartnerModal(true)
          }
        }}>
          <img src={add} className='w-[20px]' />
        </span>:null
      }
      
      <NavLink className={activeLink} to={`/${JSON.parse(localStorage.getItem('username'))}`}>
        <i ><RiUser3Fill/></i>
      </NavLink>
    </div>
  )
}

export default Botbar
