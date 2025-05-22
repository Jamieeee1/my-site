import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Main.css'

const Mainlayout = () => {
  return (
    <>
    <div className='Navdiv'>
        <Navbar />
    </div>
    <div className='Body'>
        <Outlet />
    </div>
    <div className='Footer'>
        <Footer />
    </div>
    </>
  )
}

export default Mainlayout
