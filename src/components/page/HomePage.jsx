import React from 'react'
import Navbar from '../navbar/Navbar'
import Home from '../home/Home'
import Footer from '../home/footer/Footer';
const HomePage = () => {
  return (
    <div>
      <div className='md:hidden block'>
      <div className='text-center flex items-center justify-center h-screen  ' >
        <h1 className='text-red-700 font-bold  text-3xl'>webiste ini hanya bisa diakses dalam mode dekstop!</h1>
      </div>
      </div>
      <div className='hidden md:block'>
      <Navbar></Navbar>
      <Home></Home>
      <Footer></Footer>
      </div>
    </div>
  )
}

export default HomePage
