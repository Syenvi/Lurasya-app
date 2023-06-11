import React from 'react'
import {BsSearch} from 'react-icons/bs'

const SearchBar = ({navbar,pilihKategori,setHasilKategori,hasilKategori}) => {
  return (
    <div className='h-6 md:h-12 bg-white rounded-3xl flex gap-3 items-center justify-between z-20 relative w-full' >
       <button className=' group relative'>
          <div className={' w-[5rem] md:w-[8rem]  md:h-12 h-6 rounded-l-full bg-blue-400 flex items-center justify-center text-white md:text-sm font-medium text-[9px]'}>
            {hasilKategori}
          </div>
            <ul className='bg-white w-[10rem] h-[10rem] absolute left-0  flex-col  z-30 shadow-lg justify-evenly top-12 md:top-14 rounded-lg hidden group-focus:flex overflow-hidden'>
              <li onClick={()=>setHasilKategori('Kafe')} className='w-full text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Kafe</li>
              <li onClick={()=>setHasilKategori('Tempat Wisata')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Tempat Wisata</li>
              <li  onClick={()=>setHasilKategori('Minimarket')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Minimarket</li>
              <li onClick={()=>setHasilKategori('Hotel')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Hotel</li>
              <li onClick={()=>setHasilKategori('Angkrinan')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Angkringan</li>

            </ul>
          </button>
    <input type="text" className='outline-none  bg-transparent text-[10px] placeholder:text-[10px] w-[65%] md:w-[70%] md:h-full md:placeholder:text-base md:text-xl ' placeholder='Cari disini...' />
    <span className='w-[10%] bg-slate-200 h-full rounded-r-full flex justify-center items-center text-xs md:text-base' ><BsSearch/></span>
</div>
  )
}

export default SearchBar
