import React, { useEffect, useRef, useState } from 'react'
import vektorOtp from '../assets/Enter OTP-pana.png'
import {BiArrowBack} from 'react-icons/bi'
import instance from '../API/Api';
import { useNavigate } from 'react-router-dom';

const VerifikasiOtp = () => {
  const navigate = useNavigate()
    const otpInputsRef = useRef([]);
    const [otp, setOtp] = useState('')

  useEffect(() => {
    otpInputsRef.current[0].focus();
  }, []);
  useEffect(() => {
console.log(otp);  }, [otp]);

  const handleInputChange = (e, index) => {
    setOtp(prevOtp => prevOtp + e.target.value)
    const value = e.target.value;
    if (value && index < otpInputsRef.current.length - 1) {
      otpInputsRef.current[index + 1].focus();
    }
};

const handleVerifikasi =()=>{
  alert('sampai sini')
  let data = new FormData();
data.append('otp', otp);
let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: '/auth-verification',
  headers: { 
    'Authorization': `Bearer ${localStorage.getItem('tokenVerif')}` },
  data : data
};

instance.request(config)
.then((response) => {
  console.log(JSON.stringify(response.data));
  localStorage.clear()
  navigate('/auth/login')
})
.catch((error) => {
  console.log(error);
});
}

  const handleInputKeyDown = (e, index) => {
    if (e.keyCode === 8 && e.target.value === '' && index > 0) {
      otpInputsRef.current[index - 1].focus();
      setOtp(prevOtp => prevOtp.slice(0, -1))    }
  };
  const resetResend = () => {
    setOtp('');
    otpInputsRef.current.forEach((input, index) => {
      input.value = '';
    });
    otpInputsRef.current[0].focus();
    setOtp('')
  };

  const [countdown, setCountdown] = useState(120); // Waktu hitungan mundur dalam detik (120 detik = 2 menit)
  const [canResend, setCanResend] = useState(false); // Status apakah dapat melakukan resend kode

  useEffect(() => {
    if (countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);

      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [countdown]);

  const handleResendCode = () => {
    // Logika untuk mengirim ulang kode
    setCountdown(120); // Set ulang hitungan mundur menjadi 5 menit
    setCanResend(false); // Nonaktifkan tombol resend kode
    resetResend()
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: '/auth-resend-otp',
      headers: { 
        'Authorization': `Bearer ${localStorage.getItem('tokenVerif')}`}
    };
    
    instance.request(config)
    .then((response) => {
      console.log(JSON.stringify(response.data));
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div className='md:flex w-full h-screen justify-center items-center'>
      <div className="w-full h-full p-5 flex flex-col justify-between md:justify-center items-center md:h-[70%] md:w-[80%] md:rounded-lg md:shadow-lg md:flex-row ">
    {/* ------ Desktop : Kiri ------ */}
      <div className="w-full h-full  flex flex-col justify-between items-center  md:w-[55%] md:items-start md:p-5">
        {/* ------ Header ------ */}
        <span className='w-full flex justify-start text-2xl font-bold'><BiArrowBack/></span>
        <div className="div w-full flex justify-center items-center flex-col md:items-start">
        <h1 className='font-semibold text-2xl'>Masukkan Kode Verifikasi</h1>
        <p className='text-center  text-sm opacity-75'>Kami telah mengirim kode verifikasi ke @{localStorage.getItem('emailVerif')}</p>
        </div>
        {/* ------ Header ------ */}
        <img src={vektorOtp} alt="" className='w-[70%] md:hidden' />
        {/* ------ Input OTP ------ */}
        <div className="input-Otp flex w-[85%] md:w-[80%]  justify-between">
        <input
        className='bg-slate-300 w-12 h-14 md:w-14 md:h-16 rounded-md outline-[#1fa0e2] flex text-center text-semibold'
        type="text"
        maxLength="1"
        ref={(el) => (otpInputsRef.current[0] = el)}
        onChange={(e) => handleInputChange(e, 0)}
        onKeyDown={(e) => handleInputKeyDown(e, 0)}
      />
      <input
        className='bg-slate-300 w-12 h-14 md:w-14 md:h-16 rounded-md outline-[#1fa0e2] flex text-center text-semibold'
        type="text"
        maxLength="1"
        ref={(el) => (otpInputsRef.current[1] = el)}
        onChange={(e) => handleInputChange(e, 1)}
        onKeyDown={(e) => handleInputKeyDown(e, 1)}
      />
      <input
        className='bg-slate-300 w-12 h-14 md:w-14 md:h-16 rounded-md outline-[#1fa0e2] flex text-center text-semibold'
        type="text"
        maxLength="1"
        ref={(el) => (otpInputsRef.current[2] = el)}
        onChange={(e) => handleInputChange(e, 2)}
        onKeyDown={(e) => handleInputKeyDown(e, 2)}
      />
      <input
        className='bg-slate-300 w-12 h-14 md:w-14 md:h-16 rounded-md outline-[#1fa0e2] flex text-center text-semibold'
        type="text"
        maxLength="1"
        ref={(el) => (otpInputsRef.current[3] = el)}
        onChange={(e) => handleInputChange(e, 3)}
        onKeyDown={(e) => handleInputKeyDown(e, 3)}
      />
       <input
        className='bg-slate-300 w-12 h-14 md:w-14 md:h-16 rounded-md outline-[#1fa0e2] flex text-center text-semibold'
        type="text"
        maxLength="1"
        ref={(el) => (otpInputsRef.current[4] = el)}
        onChange={(e) => handleInputChange(e, 4)}
        onKeyDown={(e) => handleInputKeyDown(e, 4)}
      /> <input
      className='bg-slate-300 w-12 h-14 md:w-14 md:h-16 rounded-md outline-[#1fa0e2] flex text-center text-semibold'
      type="text"
      maxLength="1"
      ref={(el) => (otpInputsRef.current[5] = el)}
      onChange={(e) => handleInputChange(e, 5)}
      onKeyDown={(e) => handleInputKeyDown(e, 5)}
    />
        </div>
        {/* ------ Input OTP ------ */}
        <div className="w-full flex flex-col justify-center items-center gap-2 md:items-start">
        {canResend ? (
        <button className=' font-medium text-[#1fa0e2] text-sm underline ' onClick={handleResendCode}>Kirim Ulang Kode</button>
      ) : (
        <p className='font-medium  text-sm '>Kirim ulang kode OTP: {Math.floor(countdown / 60)}:{countdown % 60}</p>
      )}
        <button className='bg-[#1fa0e2] text-white w-[50%] h-[3rem] rounded-lg ' onClick={()=>handleVerifikasi()}>Verifikasi</button>
        </div>
      </div>
          {/* ------ Desktop : Kiri ------ */}
    {/* ------ Desktop : Kanan ------ */}
    <img src={vektorOtp} alt="" className='w-[45%] hidden md:flex' />
        {/* ------ Desktop : Kanan ------ */}


      </div>

    </div>
  )
}

export default VerifikasiOtp
