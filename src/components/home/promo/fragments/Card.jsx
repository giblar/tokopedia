import React from 'react'

const Card = () => {
  return (
    <div className='h-[20rem] w-[10rem] rounded-xl border bg-white min-w-40 shadow-xl'>
      <img src="image/product.jpg" className='w-full aspect-square object-cover rounded-t-lg' alt="" />
      <div className='mx-2'>
        <h1 className=' text-[16px]'>Lorem ipsum dolor sit </h1>
        <p className='text-[16px] font-bold'>Rp.300.000</p>
        <p className='text-[14px] text-red-700'> <del className='text-gray-700'>133.000</del> 45%</p>
        <p className='text-gray-600 text-sm'>jakarta selatan</p>
        <div className='flex text-gray-700 text-sm'>
            <span className='flex text-md'><img src="image/icon/star.svg" alt="" className='w-5 h-5'/>4.5</span>
            |
            <p>terjual 23</p>
        </div>
      </div>
    </div>
  )
}

export default Card
