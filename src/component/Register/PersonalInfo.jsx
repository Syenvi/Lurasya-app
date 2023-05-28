import React from 'react'

const PersonalInfo = ({formData,setFormData}) => {
  return (
    <div className='w-full flex flex-col items-center '>
        <input required className='p-2 outline-none rounded-md' type="text" placeholder='First Name'value={formData.name} onChange={(e)=>setFormData({...formData,name:e.target.value})} />
    </div>
  )
}

export default PersonalInfo
