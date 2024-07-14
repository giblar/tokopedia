import React from 'react'

export const Card = (props) => {
    const {nama, image, harga, daerah, rating , terjual} = props;
    
  return (
   
    <div className='h-[20rem] w-[10rem] rounded-xl border bg-white min-w-40 shadow-xl'>
      <img src={image} className='w-full aspect-square object-cover rounded-t-lg' alt="" />
      <div className='mx-2'>
        <h1 className=' text-[16px]'>{nama} </h1>
        <p className='text-[16px] font-semibold'>Rp.{harga}</p>
        <p className='text-[14px] text-red-700'> <del className='text-gray-700'>133.000</del> 45%</p>
        <p className='text-gray-600 text-sm'>{daerah}</p>
        <div className='flex text-gray-700 text-sm'>
            <span className='flex text-md'><img src="image/icon/star.svg" alt="" className='w-5 h-5'/>{rating}</span>
            |
            <p>terjual +{terjual}</p>
        </div>
      </div>
    </div>
  )
}
