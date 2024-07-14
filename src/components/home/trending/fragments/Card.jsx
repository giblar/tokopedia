import React from 'react'

const Card = () => {
  return (
    <div className='min-w-10 max-w-[30rem] border border-gray-200 shadow-xl rounded-lg flex'>
        <img src="image/laptop.webp" className='object-cover w-[40%] aspect-square' alt="" />
        <div className='px-2'>
        <h1 className='font-semibold '>judul judul skripsi</h1>
        <p className='text-xs text-gray-600 font-light'>409rb produk</p>
        </div>
    </div>
  )
}

export default Card