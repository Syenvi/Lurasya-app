import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Home'
import MyAccount from './MyAccount'
import Botbar from '../../component/Botbar'
import Bookmark from './Bookmark'

const HomeRoute = () => {
  const [modal, setModal] = useState(false)
  const [partnerModal, setPartnerModal] = useState(false);

  return (
    <>
        <Routes>
        <Route path='/' exact element={<Home modal={modal} setModal ={setModal}  partnerModal={partnerModal} setPartnerModal ={setPartnerModal}/>} />
        <Route path='/profile' exact element={<MyAccount/>} />
        <Route path='/create' exact element={<Bookmark/>}/>
        </Routes>
        <Botbar partnerModal={partnerModal} setPartnerModal ={setPartnerModal}/>
    </>
  )
}

export default HomeRoute
