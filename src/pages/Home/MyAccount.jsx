import React, { useState } from 'react';
import profil from '../../assets/Dummy/profil.jpeg';
import { CgFeed } from 'react-icons/cg';
import { AiOutlineHeart } from 'react-icons/ai';
import { IoBookmarksOutline } from 'react-icons/io5';
import Feed from '../../component/Feed';
import { NavLink, useNavigate } from 'react-router-dom';

const MyAccount = ({partnerModal,setPartnerModal}) => {
  const role = localStorage.getItem('role')
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("post")
  const activeLink = (tabActive)=> (activeTab === tabActive?'border-b-2 border-black p-2':' p-2')
  return (
    <div className="relative w-full h-full">

    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
      <h1 className="text-center text-sm p-2 shadow-md w-full font-semibold sticky top-0 bg-white">Syahdinn</h1>
      <div className="img-container rounded-[50%] w-[100px] overflow-hidden">
        <img src={profil} alt="Profile" />
      </div>
      <div className="info gap-3 flex flex-col items-center">
        <div className="total flex w-[20%] justify-between ">
          <span className="flex flex-col text-xs items-center">
            <p>4</p>
            <p>Post</p>
          </span>
          <span className="flex flex-col text-xs items-center">
            <p>1000</p>
            <p>Likes</p>
          </span>
        </div>
        <div onClick={()=>navigate('/editprofil/3')} className="edit text-xs bg-slate-200 p-2 px-5 rounded-md">
          <p>Edit profil</p>
        </div>
        <div className="bio text-xs flex">
          <p className="text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium, cumque.
          </p>
        </div>
        <div className="pbl flex border-b-2 w-full justify-evenly sticky top-8 bg-white ">
          {
            role != 'user' ? 
            <NavLink className={activeLink('post')} onClick={()=>setActiveTab('post')}>
          <CgFeed />
        </NavLink >:null
          }
          <NavLink  className={activeLink('like')} onClick={()=>setActiveTab('like')}>
            <AiOutlineHeart />
          </NavLink>
          <NavLink  className={activeLink('bookmark') } onClick={()=>setActiveTab('bookmark')}>
            <IoBookmarksOutline />
          </NavLink>
        </div>
        <div className="grid grid-cols-3 w-full overflow-hidden " >
        <Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
          <Feed/><Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
          <Feed/>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MyAccount;
