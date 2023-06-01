import React from 'react'

const SignUp = ({formData,setFormData}) => {
  return (
    <div className='w-full flex flex-col  gap-2 '>
      <span className='w-full '>

      <label>Masukkan Email</label>
    <input className='p-2 bg-slate-200 outline-none w-full rounded-md' type="email" placeholder='lurasya2023@gmail.com' value={formData.email} onChange={(e)=>setFormData({...formData,email:e.target.value})} required/>
      </span>
    <span className='w-full '>
      <label>Masukkan Password</label>
    <input className='p-2 bg-slate-200 outline-none w-full rounded-md' type="password" placeholder='+8 Karakter' value={formData.password} onChange={(e)=>setFormData({...formData,password:e.target.value})} required/>
      </span>
      <span className='w-full '>

    <label>Masukkan Konfirmasi Password</label>

    <input className='p-2 bg-slate-200 outline-none w-full rounded-md' type="password" placeholder='+8 Karakter' value={formData.password_confirmation} onChange={(e)=>setFormData({...formData,password_confirmation:e.target.value})} required/>
      </span>
</div>
  )
}

export default SignUp
