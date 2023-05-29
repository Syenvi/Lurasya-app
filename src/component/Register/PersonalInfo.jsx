import React from 'react'

const PersonalInfo = ({formData,setFormData}) => {
  return (
    <div className='w-full flex flex-col  '>
      <label >Masukkan Nama</label>
        <input required className='p-2 bg-slate-200 outline-none rounded-md' type="text" placeholder='Nama'value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
    </div>
  )
}

export default PersonalInfo
