import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import instance from '../API/Api'


const SearchBar = ({navbar,dataCompany,setDataCompany,getData}) => {

  const [searchKategori, setSearchKategori] = useState('')
  const [searchKota, setSearchKota] = useState('')
  const [hasilKategori,setHasilKategori]=useState('Semua Kategori')

  const handleKategori = (kategori)=>{
    if(kategori === 'Semua Kategori'){
      setHasilKategori('Semua Kategori')
      setSearchKategori('')
    }else{
      setHasilKategori(kategori)
      setSearchKategori(kategori)
    }
  }
  const handleSearch = ()=>{
    // alert(`${searchKota} ${searchKategori}`)
    let data = new FormData();
    data.append('CompanyType', searchKategori);
    data.append('CompanyRegency', searchKota);
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/read-search',
  headers: { 
  },
  data : data
};

instance.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  setDataCompany(response.data)
})
.catch((error) => {
  console.log(error);
});

  }

  return (
    <div className='h-6 md:h-12 bg-white rounded-3xl flex gap-3 items-center justify-between z-20 relative w-full' >
       <button className=' group relative'>
          <div className={' w-[5rem] md:w-[8rem]  md:h-12 h-6 rounded-l-full bg-blue-400 flex items-center justify-center text-white md:text-sm font-medium text-[9px]'}>
            {hasilKategori}
          </div>
            <ul className='bg-white w-[10rem] h-[10rem] absolute left-0  flex-col  z-30 shadow-lg justify-evenly top-12 md:top-14 rounded-lg hidden group-focus:flex overflow-hidden'>
            <li onClick={()=>handleKategori('Semua Kategori')} className='w-full text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Semua</li>
              <li onClick={()=>handleKategori('Kafe')} className='w-full text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Kafe</li>
              <li onClick={()=>handleKategori('Tempat Wisata')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Tempat Wisata</li>
              <li  onClick={()=>handleKategori('Minimarket')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Minimarket</li>
              <li onClick={()=>handleKategori('Hotel')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Hotel</li>
              <li onClick={()=>handleKategori('Angkrinan')} className='w-full  text-xs md:text-sm hover:bg-slate-300 pl-3 h-[50%] flex items-center '>Angkringan</li>
            </ul>
          </button>
    <input type="text" className='outline-none  bg-transparent text-[10px] placeholder:text-[10px] w-[65%] md:w-[70%] md:h-full md:placeholder:text-base md:text-base ' placeholder='Masukkan Kota yang ingin kamu cari...' value={searchKota} onChange={(e)=>setSearchKota(e.target.value)}/>
    <span onClick={handleSearch} className='w-[10%] bg-slate-200 h-full rounded-r-full flex justify-center items-center text-xs md:text-base' ><BsSearch/></span>
</div>
  )
}

export default SearchBar
