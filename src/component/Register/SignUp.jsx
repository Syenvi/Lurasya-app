import React from 'react'

const SignUp = ({formData,setFormData}) => {
  return (
    <div className='w-full flex flex-col items-center gap-5 '>
    <input className='p-2 outline-none rounded-md' type="email" placeholder='Masukkan Email' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} required/>
    <input className='p-2 outline-none rounded-md' type="password" placeholder='Masukkan Password' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} required/>
    <input className='p-2 outline-none rounded-md' type="password" placeholder='Konfirmasi Password' value={formData.password_confirmation} onChange={(e)=>setFormData({...formData,password_confirmation:e.target.value})} required/>
</div>
  )
}

export default SignUp
