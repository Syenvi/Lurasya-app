import React from 'react'
import avatar from '../assets/Dummy/Kafe.jpg'
const Komentar = ({nama,komentar}) => {
  return (
    <div className='w-full rounded-lg flex p-3 gap-3 shadow-lg md:shadow-none md:border-b'>
      <div className='w-[10%]' >
        <div className='w-10 h-10 rounded-[50%] overflow-hidden'>
        <img src={avatar} className='w-full h-full object-cover' />
        </div>
      </div>
      <div className="komentar w-[90%]">
        <h2 className='font-semibold text-sm'>{nama}</h2>
        <p className='text-xs'>{komentar}</p>
      </div>
    </div>
  )
}

export default Komentar
