import React from 'react'
import Card from './fragments/Card'

const Trending = () => {
  return (
   <div className='min-h-[40vh] px-10'>
     <div className='grid grid-cols-4 gap-5'>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
    </div>
   </div>
  )
}

export default Trending