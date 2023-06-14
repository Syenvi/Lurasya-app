import React, { useEffect, useState } from 'react';
import { NavLink, Navigate, useNavigate } from 'react-router-dom';
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
import DetailTempat from '../DetailTempat';
import { useStateContext } from '../../Context/StateContext'
import instance from '../../API/Api';

const Home = ({modal,setModal,partnerModal,setPartnerModal,setSelectedId,selectedId,selectedUsername,setSelectedUsername}) => {
  //------ STATE UNTUK DATA DARI BACKEND ------

  // const [namaAdmin, setNamaAdmin] = useState('')
  // const [namaCompany, setNamaCompany] = useState('')
  // const [profilAdmin,setProfilAdmin ] = useState('')
  // const [kategoriCompany, setKategoriCompany] = useState('')
  // const [fotoCompany, setFotoCompany] = useState('')
  // const [komentarCompany, setKomentarCompany] = useState('')
  // const [kecamatan, setKecamatan] = useState('')
  // const [kota, setKota] = useState('')
  // const [provinsi, setProvinsi] = useState('')
  
  const [dataCompany, setDataCompany] = useState([])

  //------ STATE UNTUK DATA DARI BACKEND SELESAI ------

  const [loading, setLoading] = useState(false)

  // ------ Mengambil Semua Data ------
  useEffect(()=>{
    if(currentLogin.role === ''){
      navigate('/')
    }
    getData()
  },[])
  useEffect(()=>{
    
  },[dataCompany])
  const getData =()=>{
    setLoading(true)
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `/read-all`,
      headers: {
        'Authorization': `Bearer ${currentLogin.token}`
      }
    };
    
    instance.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
      setDataCompany(response.data.user)
      setLoading(false)
    })
    .catch((error) => {
      console.log(error);
      setLoading(false)

    }); 
  }
    // ------ Mengambil Semua Data End ------

 const navigate=useNavigate()
 const {currentLogin,setCurrentLogin} =useStateContext()

{/* ---------- Detail Tempat ---------- */}

// ------ INI INGIN KAYA IG TAPI BLM BISA ------
// const [showDetail, setShowDetail] = useState(false)
// const handleDetail = (username,id) =>{
//   console.log(username);
//   if (window.innerWidth > 768 ) {
//   setSelectedId(id)
//   setSelectedUsername(username)
//   window.history.pushState(null, '', `/${username}/company/${id}`)
//   setShowDetail(true)

//     // navigate('/detail/123')
// } else if(window.innerWidth < 768 ){
//   setSelectedId(id)
//   setSelectedUsername(username)
//  navigate(`/${username}/company/${id}`)

// }else{
//   return null
// }
// }
// ------ INI INGIN KAYA IG TAPI BLM BISA ------

     {/* ---------- Detail Tempat END ------*/}
// console.log(currentLogin);
  return (
    currentLogin.name === null?
    <div className="w-full h-screen  flex relative justify-start items-center">
  <img src="https://images5.alphacoders.com/605/605588.jpg" className='w-full h-full object-cover absolute scale-x-[-1]' />
  <div className="w-full h-full absolute bg-black opacity-75"></div>
  <h1 className='text-white text-[40px] w-[40%] font-bold absolute ml-16'>Cari tempat yang ingin kamu tuju disini !</h1>
<div className="left w-[60%] h-screen  hidden md:flex  relative">
</div>
<div className="right w-full md:w-[40%] md:rounded-l-2xl animasi-background fixed right-0 shadow-xl  ">
      <Onboarding/>
</div>
      
    </div>
      :
    <div className="w-full h-full flex flex-col gap-10 items-center  relative">
      {/* {
        showDetail?<DetailTempat setShowDetail={setShowDetail} selectedUsername={selectedUsername} selectedId={selectedId} showDetail={showDetail}/>:null
      } */}
      <Topbar modal={modal} setModal ={setModal} getData={getData} partnerModal={partnerModal} setPartnerModal ={setPartnerModal} dataCompany={dataCompany} setDataCompany={setDataCompany}/>
      <main className='w-[80%] columns-2 gap-2 mx-auto space-y-2 md:columns-4 md:w-[90%] md:gap-5 md:space-y-5'>
        
        {
          dataCompany.map((item,id)=>(
              <button onClick={()=>navigate(`/${item.username}/company/${item.id}`)}>
                <Card src={item.images}/>
              </button>
              
          ))
        }
      </main>
    </div>
  )
}

export default Home
