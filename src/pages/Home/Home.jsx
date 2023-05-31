import React, { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Topbar from '../../component/Topbar';
import kafe from '../../assets/category/kafe.png';
import minimarket from '../../assets/category/minimarket.png';
import masjid from '../../assets/category/masjid.png';
import tempatWisata from '../../assets/category/tempat wisata.png';
import atm from '../../assets/category/Image.png';
import greeting from '../../assets/greeting.png';
import bannerCoffe from '../../assets/Banner Greeting/Banner Caffe .png'
import Card from '../../component/Card';
import gambar1 from '../../assets/Dummy/Dayoung❤️.jpeg'
import gambar2 from '../../assets/Dummy/depressed lover.jpeg'
import gambar3 from '../../assets/Dummy/Kafe.jpg'
import gambar4 from '../../assets/Dummy/Kafka - Honkai Star Rail.jpeg'
import gambar5 from '../../assets/Dummy/ns--m.png'
import gambar6 from '../../assets/Dummy/Sagiri.png'
import gambar7 from '../../assets/Dummy/Yoimiya.jpeg'
import Onboarding from '../../component/Onboarding';

const Home = ({modal,setModal,partnerModal,setPartnerModal}) => {
   const user = localStorage.getItem('user')
  const isLoggedIn = user !== null; // Memeriksa apakah pengguna sudah Login
  return (
    !isLoggedIn?
    <div className="w-full h-screen  flex relative justify-start items-center">
  <img src="https://images5.alphacoders.com/605/605588.jpg" className='w-full h-full object-cover absolute scale-x-[-1]' />
  <div className="w-full h-full absolute bg-black opacity-75"></div>
  <h1 className='text-white text-[40px] w-[40%] font-bold absolute ml-16'>Cari tempat yang kamu ingin tuju disini !</h1>
<div className="left w-[70%] h-screen  hidden md:flex  relative">
</div>
<div className="right w-full md:w-[30%] md:rounded-l-2xl bg-slate-100 fixed right-0 shadow-xl  ">
      <Onboarding/>
</div>
      
    </div>
      :
    <div className="w-full h-full flex flex-col gap-10 items-center  ">
      <Topbar modal={modal} setModal ={setModal}  partnerModal={partnerModal} setPartnerModal ={setPartnerModal}/>
      <main className='w-[80%] columns-2 gap-2 mx-auto space-y-2 md:columns-5 md:w-[90%] md:gap-5 md:space-y-5'>
        <Card src={gambar1}/>
        <Card src={gambar2}/>
        <Card src={gambar3}/>
        <Card src={gambar5}/>
        <Card src={gambar6}/>
        <Card src={gambar7}/>
        <Card src={gambar5}/>
        <Card src={gambar6}/>
        <Card src={gambar4}/>
        <Card src={gambar7}/>
        <Card src={gambar2}/>
        <Card src={gambar4}/>
        <Card src={gambar3}/>
        <Card src={gambar3}/>
        <Card src={gambar5}/>
        <Card src={gambar1}/>
        <Card src={gambar6}/>
        
      </main>
    </div>
  )
}

export default Home
