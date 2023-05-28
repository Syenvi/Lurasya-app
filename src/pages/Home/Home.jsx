import React, { useState } from 'react';
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

const Home = ({modal,setModal,partnerModal,setPartnerModal}) => {
  return (
    <div className="w-full h-full flex flex-col gap-5 items-center  ">
      <Topbar modal={modal} setModal ={setModal}  partnerModal={partnerModal} setPartnerModal ={setPartnerModal}/>
      <main className='w-[80%] columns-2 gap-2 mx-auto space-y-2'>
        <Card src={gambar1}/>
        <Card src={gambar2}/>
        <Card src={gambar3}/>
        <Card src={gambar4}/>
        <Card src={gambar5}/>
        <Card src={gambar6}/>
        <Card src={gambar7}/>
        <Card src={gambar5}/>
        <Card src={gambar6}/>
        <Card src={gambar7}/>
      </main>
    </div>
  )
}

export default Home
