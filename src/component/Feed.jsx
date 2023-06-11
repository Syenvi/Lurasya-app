import React from 'react'
import feed from '../assets/Dummy/Kafe.jpg'

const Feed = ({src,id}) => {
  return (
    <div className='w-[33,3%] md:w-[16,66%] h-[170px] md:h-[300px] border-2 border-t-0  md:border-none md:rounded-md'>
      <img src={src} className='w-full h-full object-cover' />
    </div>
  )
}

export default Feed
