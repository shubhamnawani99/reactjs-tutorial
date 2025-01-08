import React from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
    <Header/>
    <Outlet />  
    {/*Header and Footer remains the same 
    but the context defined at Outlet would change*/}
    <Footer/>
    </>
  )
}