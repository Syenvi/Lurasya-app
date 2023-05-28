import React from 'react'
import {IoHome} from 'react-icons/io5'
import {MdOutlineAddBox} from 'react-icons/md'
import {RiUser3Fill} from 'react-icons/ri'
import { NavLink, useNavigate } from 'react-router-dom'
const Botbar = ({setPartnerModal}) => {
  const navigate = useNavigate()
  const role = localStorage.getItem('role')
  const activeLink = ({isActive})=>(isActive? 'flex flex-col justify-center items-center gap-1 text-md text-[#1fa0e2]':'flex flex-col justify-center items-center gap-1 text-md text-slate-500')
  return (
    <div className='w-full h-[5vh] justify-evenly flex items-center sticky bottom-0 shadow-[4px_4px_12px_rgba(0,0,0,0.25)] rounded-t-lg z-10 bg-white '>
      <NavLink className={activeLink} exact to='/'>
        <i ><IoHome/></i>
      </NavLink>
      <span  onClick={()=>{
        if(role === 'admin' || role === 'Super Admin'){
          navigate('/partnership/create')
        }else{
          setPartnerModal(true)
        }
      }}>
        <i ><MdOutlineAddBox/></i>
      </span>
      <NavLink className={activeLink} to='/profile'>
        <i ><RiUser3Fill/></i>
      </NavLink>
    </div>
  )
}

export default Botbar