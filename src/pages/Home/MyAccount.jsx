import React, { useEffect, useState } from 'react';
import profil from '../../assets/Dummy/profil.jpeg';
import { CgFeed } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoBookmarksOutline } from 'react-icons/io5';
import Feed from '../../component/Feed';
import { NavLink, useNavigate, useParams } from 'react-router-dom';
import {BiArrowBack} from 'react-icons/bi'
import { useStateContext } from '../../Context/StateContext';
import instance from '../../API/Api';

const MyAccount = ({partnerModal,setPartnerModal}) => {
  const {currentLogin,setCurrentLogin} =useStateContext()
// {------ STATE UNTUK MENAMPUNG DATA PROFIL ------}

    const [profilNama, setProfilNama] = useState('')
    const [profilUsername, setProfilUsername] = useState('')
    const [profilRole, setProfilRole] = useState('')
    const [profilPhoto,setProfilPhoto]=useState('')
    const [profilLikes,setProfilLikes]=useState('')
    const [profilPost,setProfilPost]=useState('')
    const [profilBiodata, setProfilBiodata] = useState('')
    const [profilCompany,setProfilCompany]=useState([])
    const [profilLiked,setProfilLiked]=useState([])
    const [profilBookmarks,setProfilBookmarks]=useState([])

// {------ STATE UNTUK MENAMPUNG DATA PROFIL ------}


// {------ PERTAMA KALI LOADING HALAMAN ------}

// {------ Mengambil Param Username dari Link ------}
const username = useParams()
// {------ Mengambil Param Username dari Link ------}
    useEffect(()=>{
    
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `/read-profile/${username.username}`,
  headers: { 
    'Authorization': `Bearer ${localStorage.getItem('token')}`, 
   }
};

instance.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  const profil = response.data.users
  setProfilNama(profil.name)
  setProfilUsername(profil.username)
  setProfilPhoto(profil.profile)
  setProfilRole(profil.role)
  setProfilBiodata(profil.biodata)
  setProfilLikes(response.data.likes)
  setProfilPost(response.data.content.length)
  setProfilCompany(response.data.content)
  setProfilLiked(response.data.liked)
  setProfilBookmarks(response.data.marked)
})
.catch((error) => {
  console.log(error);
});

    },[username])

  useEffect(()=>{
    if(profilRole === 'Admin'){
      setActiveTab('post')
     }else{
      setActiveTab('like')
     }
  },[profilRole])
// {------ PERTAMA KALI LOADING HALAMAN ------}


  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("post")
  const activeLink = (tabActive)=> (activeTab === tabActive?'border-b-2 border-black p-2 md:border-b-4':' p-2')
  const getData = () => {
    if (activeTab === 'post') {
      return <>
      {profilCompany.map((item,index) => {
        return (
          <span onClick={()=>navigate(`/${item.username}/company/${item.id}`)}>
            <Feed
              key={item.id}
              src={item.images}
              id={item.id}
            />
          </span>
        );
      })}
      </>
    
    } else if (activeTab === 'like') {
      // Logika untuk mengambil data like
      return <>
        {profilLiked.map((item,index) => {
        return (
          <span onClick={()=>navigate(`/${item.username}/company/${item.id}`)}>
            <Feed
              key={index}
              src={item.images}
              id={item.id}
            />
          </span>
        );
      })}
      </>;
    } else if (activeTab === 'bookmark') {
      // Logika untuk mengambil data bookmark
      return <>    
      {profilBookmarks.map((item,index) => {
        return (
          <span onClick={()=>navigate(`/${item.username}/company/${item.id}`)}>
            <Feed
              key={index}
              src={item.images}
              id={item.id}
            />
          </span>
        );
      })}
      </>;
    }
  };
  return (
    <div className="relative w-full h-full">
    <div className="w-full h-full flex flex-col justify-center items-center gap-5 ">
      <div className="top w-full p-2 md:p-3 shadow-md  font-semibold sticky top-0 bg-white flex items-center justify-center" >
      <span className='text-md md:text-xl font-bold absolute left-5' onClick={()=>navigate('/')}><BiArrowBack/></span>
      <h1 className="text-center text-sm md:text-lg">{profilNama}</h1>
        </div>    
      <div className="img-container rounded-[50%] w-[100px] h-[100px] overflow-hidden md:w-[150px] md:h-[150px]">
        <img src={profilPhoto} alt="Profile" className='w-full h-full object-cover'/>
      </div>
      <div className="info gap-3 flex flex-col items-center w-full ">
        <div className="total flex w-[20%] justify-between md:w-[10%]">
          <span className="flex flex-col text-xs items-center md:text-base md:font-semibold">
            <p>{profilPost}</p>
            <p>Post</p>
          </span>
          <span className="flex flex-col text-xs items-center md:text-base md:font-semibold">
            <p>{profilLikes}</p>
            <p>Likes</p>
          </span>
        </div>
        {/* ------ KONDISI JIKA AKUN SENDIRI ADA EDIT PROFIL ------ */}
        {
          JSON.parse(localStorage.getItem('username')) === profilUsername?
        <div onClick={()=>navigate(`/editprofil/${username.username}`)} className="edit text-xs bg-slate-200 p-2 px-5 rounded-md md:p-3 md:px-8">
          <button className='md:text-base font-medium'>Edit profil</button>
        </div>:null
        }
        {/* ------ KONDISI JIKA AKUN SENDIRI ADA EDIT PROFIL ------ */}

        <div className="bio text-xs flex">
          <p className="text-center">{profilBiodata}
          </p>
        </div>
        <div className="w-full container-pbl dan konten">
        <div className="pbl flex border-b-2 w-full justify-evenly sticky top-8 bg-white md:text-2xl md:static">
          {
            profilRole === 'Admin' ? 
            <NavLink className={activeLink('post')} onClick={()=>setActiveTab('post')}>
          <span className='flex flex-col items-center justify-center'>
          <CgFeed />
          <p className='hidden md:flex font-medium text-sm'>Company</p>
          </span>
        </NavLink >:null
          }
          <NavLink  className={activeLink('like')} onClick={()=>setActiveTab('like')}>
            <span className='flex flex-col items-center justify-center'>
            <AiOutlineHeart />
          <p className='hidden md:flex font-medium text-sm'>Suka</p>
          </span>
          </NavLink>
          <NavLink  className={activeLink('bookmark') } onClick={()=>setActiveTab('bookmark')}>
            <span className='flex flex-col items-center justify-center'>
            <IoBookmarksOutline />
          <p className='hidden md:flex font-medium text-sm'>Disimpan</p>
          </span>
          </NavLink>
        </div>
        <div className="grid grid-cols-3 w-full overflow-hidden  md:grid md:grid-cols-6 md:p-5 md:gap-5 " >
        {getData()}
        </div>
        </div>
        
      </div>
    </div>
    </div>
  );
};

export default MyAccount;
