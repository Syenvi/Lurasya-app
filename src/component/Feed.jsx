import React from 'react'
import feed from '../assets/Dummy/Kafe.jpg'

const Feed = () => {
  return (
    <div className='w-[33,3%] h-[170px] border-2 '>
      <img src={feed} className='w-full h-full object-cover' />
    </div>
  )
}

export default Feed
