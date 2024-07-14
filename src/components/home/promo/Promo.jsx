
import Card from './fragments/Card'
import React, { useState, useEffect } from "react";
const Promo = () => {

  const [x, setX] = useState(0);

  const handleNavigation = (e) => {
    const window = e.currentTarget;
    if (x > window.scrollX) {
      console.log("scrolling up");
    } else if (x < window.scrollX) {
      console.log("scrolling down");
    }
    setX(window.scrollX);
  };

  useEffect(() => {
    setX(window.scrollX);

    window.addEventListener("scroll", (e) => handleNavigation(e));
  }, []);
  return (
    <div className='flex items-center'>
        <div className='bg-[#FFE0A2] h-[400px] z-[-10] w-[300px] absolute rounded-xl ml-2 px-5 flex items-center'>
           <div className=' font-semibold'>
           <p className='text-2xl'>Diskon sampai dengan</p>
           <span className='text-6xl'>95%</span>
           </div>
        </div>
    <div className='flex ml-[17%]  px-2 w-[70%] overflow-x-auto'>
    <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      
    </div>
     
    </div>
  )
}

export default Promo
