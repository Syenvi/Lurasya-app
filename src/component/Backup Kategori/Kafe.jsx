import React, { useState } from 'react'
import Card from '../Card'
import { NavLink } from 'react-router-dom';

const Kafe = () => {
  const [kafeAktif,setKafeAktif]= useState('Yogyakarta')
  const activeLinkKafe = (kategori) =>
  kategori === kafeAktif
      ? 'bg-[#e7f2ff] border-1 border-[#1fa0e2] rounded-3xl p-2 pl-5 pr-5 text-[#1fa0e2] flex justify-center items-center'
      : 'bg-white border-1 border-[#c1c1c1] rounded-3xl p-2 pl-5 pr-5 text-[#c1c1c1] justify-center items-center';
  const handleKafeClick = (kategori)=>{
        setKafeAktif(kategori)
      }
  return (
      <div className="rekomendasi-kafe flex w-full flex-col border-t-4 h-[310px] justify-between pl-4 pr-4">
       <div className="kata">
       <h2 className='font-medium text-md'>Tempat Bertemu dan Bersantap </h2>
        <p className='text-[10px]'>Jelajahi kafe-kafe terbaik di sekitar Anda. Nikmati momen istimewa dengan teman atau bersantai sendiri di kafe yang cocok dengan selera Anda.</p>
       </div>
        <div className="kategori text-xs flex overflow-scroll gap-2">
          <NavLink
            className={activeLinkKafe('Yogyakarta')}
            onClick={() => handleKafeClick('Yogyakarta')}
          >
            <button>Yogyakarta</button>
          </NavLink>
          <NavLink
            className={activeLinkKafe('Malang')}
            onClick={() => handleKafeClick('Malang')}
          >
            <button>Malang</button>
          </NavLink>
          <NavLink
            className={activeLinkKafe('Surabaya')}
            onClick={() => handleKafeClick('Surabaya')}
          >
            <button>Surabaya</button>
          </NavLink>
          <NavLink
            className={activeLinkKafe('Bandung')}
            onClick={() => handleKafeClick('Bandung')}
          >
            <button className='w-24'>Bandung</button>
          </NavLink>
          <NavLink
            className={activeLinkKafe('Kafe')}
            isActive={() => kategoriAktif === 'Kafe'}
            onClick={() => handleKafeClick('Kafe')}
          >
            <button>Kafe</button>
          </NavLink>
        </div>
        <div className="card flex gap-2 overflow-scroll w-full h-[190px] items-start ">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>
          <Card/>

        </div>
      </div>
  )
}

export default Kafe
