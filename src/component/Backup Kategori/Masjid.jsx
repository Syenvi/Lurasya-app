import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Card from './Card';

const Masjid = () => {
    const [masjidAktif,setMasjidAktif]= useState('Yogyakarta')
    const activeLinkMasjid = (kategori) =>
    kategori === masjidAktif
        ? 'bg-[#e7f2ff] border-1 border-[#1fa0e2] rounded-3xl p-2 pl-5 pr-5 text-[#1fa0e2] flex justify-center items-center'
        : 'bg-white border-1 border-[#c1c1c1] rounded-3xl p-2 pl-5 pr-5 text-black justify-center items-center';
    const handleMasjidClick = (kategori)=>{
          setMasjidAktif(kategori)
        }
  return (
    <div>
      <div className="rekomendasi-atm flex w-full flex-col border-t-4 h-[310px] justify-between pl-4 pr-4">
       <div className="kata">
       <h2 className='font-medium text-md'>Temukan Kedamaian dan Kebersamaan</h2>
        <p className='text-[10px]'>Cari masjid terdekat yang menyediakan tempat ibadah yang nyaman dan fasilitas lengkap untuk kegiatan keagamaan Anda. Temukan tempat yang membangun kedamaian dan memperkuat kebersamaan di komunitas Anda. </p>
       </div>
        <div className="kategori text-xs flex overflow-scroll gap-2">
          <NavLink
            className={activeLinkMasjid('Yogyakarta')}
            onClick={() => handleMasjidClick('Yogyakarta')}
          >
            <button>Yogyakarta</button>
          </NavLink>
          <NavLink
            className={activeLinkMasjid('Malang')}
            onClick={() => handleMasjidClick('Malang')}
          >
            <button>Malang</button>
          </NavLink>
          <NavLink
            className={activeLinkMasjid('Surabaya')}
            onClick={() => handleMasjidClick('Surabaya')}
          >
            <button>Surabaya</button>
          </NavLink>
          <NavLink
            className={activeLinkMasjid('Bandung')}
            onClick={() => handleMasjidClick('Bandung')}
          >
            <button className='w-24'>Bandung</button>
          </NavLink>
          <NavLink
            className={activeLinkMasjid('Kafe')}
            onClick={() => handleMasjidClick('Kafe')}
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
    </div>
  )
}

export default Masjid
