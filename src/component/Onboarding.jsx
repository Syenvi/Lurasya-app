import React, { Component } from "react";
import onboarding1 from '../assets/RegisterImg/Onoboarding_1 1.png'
import onboarding2 from '../assets/RegisterImg/Onboarding_2 1.png'
import onboarding3 from '../assets/RegisterImg/Onboarding_3 1.png'
import Carousel from "./Carousel";
import { useNavigate } from "react-router-dom";

const Onboarding = () => {
    const navigate = useNavigate()
    const slides = [onboarding1,onboarding2,onboarding3]
  return (
    <div className='w-full h-screen justify-around p-5 items-center  flex flex-col md:p-3'>
        <div className="w-[300px] md:w-[200px] ">
            <Carousel autoSlide={true}>
                {
                    slides.map((item)=>(
                        <img src={item} />
                    ))
                }
            </Carousel>
        </div>
        <div className="text w-full flex flex-col items-center gap-3">
    <h1 className="text-2xl font-semibold text-[#1fa0e2] text-center md:text-xl">Selamat Datang di Lurasya</h1>
    <p className="text-xs text-center  font-medium text-[#1fa0e2] md:w-[80%] md:text-xs"> Dengan aplikasi kami, Anda dapat menemukan tempat-tempat yang menarik dan sesuai dengan minat Anda.</p>
        </div>

    <div className="flex flex-col gap-3 w-full items-center">
    <button onClick={()=>navigate('/auth/login')} className="w-full bg-white border border-white text-[#1fa0e2] font-medium p-3 rounded-lg md:w-[80%] md:p-2 md:text-xs">Masuk</button>
    <button onClick={()=>navigate('/auth/register')} className="w-full bg-[#1fa0e2] border border-[#1fa0e2] text-white font-medium p-3 rounded-lg md:w-[80%] md:p-2 md:text-xs">Buat Akun</button>
    </div>
    <p className="text-xs text-center md:w-[70%] md:text-[10px] ">Dengan melanjutkan, Anda menyetujui persyaratan layanan dan kebijakan privasi kami</p>
    </div>
  )
}

export default Onboarding
