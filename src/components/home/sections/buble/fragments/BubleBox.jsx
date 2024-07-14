import React from 'react'

const BubleBox = (props) => {
    const { image, text}= props
  return (
    <div className='flex  items-center gap-2 border border-gray-400 justify-center px-2 min-w-3  rounded-full'>
     <img src={`image/${image}`} alt="" className='w-8 ' />
     <h1 className='text-sm'>{text}</h1>
    </div>
  )
}

export default BubleBox
