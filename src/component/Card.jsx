import React from 'react'
import gambarKafe from '../assets/Dummy/Kafe.jpg'
import star from '../assets/star.png'
import { useNavigate } from 'react-router-dom'
const Card = ({src}) => {
  const navigate = useNavigate()
  return (
    <div  className=' rounded-md overflow-hidden cursor-pointer'>
      <img src={src} />
    </div>
  )
}

export default Card
