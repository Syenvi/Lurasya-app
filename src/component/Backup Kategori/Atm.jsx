import React, { useState } from 'react'
import Card from './Card'
import { NavLink } from 'react-router-dom';

const Atm = () => {
    const [atmAktif,setAtmAktif]= useState('Yogyakarta')
  const activeLinkAtm = (kategori) =>
  kategori === atmAktif
      ? 'bg-[#e7f2ff] border-1 border-[#1fa0e2] rounded-3xl p-2 pl-5 pr-5 text-[#1fa0e2] flex justify-center items-center'
      : 'bg-white border-1 border-[#c1c1c1] rounded-3xl p-2 pl-5 pr-5 text-[#c1c1c1] justify-center items-center';
  const handleAtmClick = (kategori)=>{
        setAtmAktif(kategori)
      }
  return (
    <div className="rekomendasi-atm flex w-full flex-col border-t-4 h-[310px] justify-between pl-4 pr-4">
       <div className="kata">
       <h2 className='font-medium text-md'>Akses Keuangan yang Mudah</h2>
        <p className='text-[10px]'>Temukan mesin ATM terdekat yang memudahkan Anda untuk melakukan transaksi keuangan. Dapatkan kemudahan dalam menemukan ATM terpercaya dan aman di sekitar Anda untuk memenuhi kebutuhan finansial Anda. </p>
       </div>
        <div className="kategori text-xs flex overflow-scroll gap-2">
          <NavLink
            className={activeLinkAtm('Yogyakarta')}
            onClick={() => handleAtmClick('Yogyakarta')}
          >
            <button>Yogyakarta</button>
          </NavLink>
          <NavLink
            className={activeLinkAtm('Malang')}
            onClick={() => handleAtmClick('Malang')}
          >
            <button>Malang</button>
          </NavLink>
          <NavLink
            className={activeLinkAtm('Surabaya')}
            onClick={() => handleAtmClick('Surabaya')}
          >
            <button>Surabaya</button>
          </NavLink>
          <NavLink
            className={activeLinkAtm('Bandung')}
            onClick={() => handleAtmClick('Bandung')}
          >
            <button className='w-24'>Bandung</button>
          </NavLink>
          <NavLink
            className={activeLinkAtm('Kafe')}
            onClick={() => handleAtmClick('Kafe')}
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

export default Atm
