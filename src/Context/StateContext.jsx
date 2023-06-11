import React, { createContext, useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Context= createContext()
export const StateContext = ({children}) => {

    
    const currentLogin ={
        id: JSON.parse(localStorage.getItem('id')),
        name: JSON.parse(localStorage.getItem('name')),
        username: JSON.parse(localStorage.getItem('username')),
        email: JSON.parse(localStorage.getItem('email')),
        role: JSON.parse(localStorage.getItem('role')),
        images: JSON.parse(localStorage.getItem('profile')),
        biodata: JSON.parse(localStorage.getItem('biodata')),
        provinsi: JSON.parse(localStorage.getItem('provinsi')),
        kota: JSON.parse(localStorage.getItem('kota')),
        kecamatan: JSON.parse(localStorage.getItem('kecamatan')),
        desa: JSON.parse(localStorage.getItem('desa')),
        token: JSON.parse(localStorage.getItem('token'))
    }
    return (
        <Context.Provider value={{currentLogin}}>{children}</Context.Provider>
  )
}

export const useStateContext = ()=> useContext(Context)