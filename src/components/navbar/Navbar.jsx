import React, { useState } from 'react';
import BoxEmail from './fragments/BoxEmail';
import Box from '../home/sections/sectionLeft/fragments/Box';

const Navbar = () => {
  const [isEmail, setEmail] = useState(false);
  const togleEmail = () => {
    setEmail(!isEmail);
  };

  return (
   <div>
     <div className='flex justify-between px-10 border-b items-center fixed w-full top-0 bg-white'>
      <div>
        <img src="image/icon/tokopedia.svg" alt="Tokopedia" />
      </div>
      <div className='w-[40rem] pt-4'>
        <div className='flex flex-col '>
        <div className='flex items-center'>
            <span className='mr-2'>Kategori</span>
            <div className='flex border rounded-md w-full group focus-within:border-green-500'>
              <img src="/image/icon/search.svg" alt="Search" className='px-2' />
              <input 
                type="text" 
                className='w-full h-10 px-2 peer outline-none' 
                placeholder='Cari Di Tokopedia' 
              />
            </div>
          </div>
          <div className='flex gap-2 self-center text-gray-400 mt-2 hover:text-green-600'>
            <span>tv advan</span>
            <span>tv advan</span>
            <span>tv advan</span>
            <span>tv advan</span>
            <span>tv advan</span>
          </div>
        </div>
      </div>
      <div className='flex gap-4 border-r px-2 py-1'>
      <button className='' onClick={togleEmail}>
       <img src="image/icon/cart.svg" alt="Mail" className='w-6 h-6' />
       </button>
        <button className='' onClick={togleEmail}>
       <img src="image/icon/bell.svg" alt="Mail" className='w-6 h-6' />
       </button>
       <button className='' onClick={togleEmail}>
       <img src="image/icon/mail.svg" alt="Mail" className='w-6 h-6' />
       </button>
      </div>
      <div className=' gap-3 gap-y-2'>
        <div className='flex gap-6'>
        <div className='flex items-center gap-2'>
          <div className='bg-gray-200 p-2 rounded-full'>
          <img src="image/icon/store.svg" alt="Store" className='w-6 h-6' />
          </div>
          <p>Toko</p>
        </div>
        <div className='flex items-center gap-2'>
          <img src="image/icon/user.svg" alt="User" className='w-10 h-10' />
          <p>User</p>
        </div>
        </div>
        <div className='flex items-center gap-2 text-xs'>
          <img src="image/icon/location.svg" alt="Location" />
          <p>Dikirim ke <span className='font-bold'>user location</span></p>
        </div>
      </div>
      
    </div>
    <div className={`fixed ${isEmail ? '' : 'hidden'}`}>
    <BoxEmail/>
    </div>
   </div>
  );
};

export default Navbar;
