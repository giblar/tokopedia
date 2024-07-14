import React from 'react'
import Card from '../promo/fragments/Card'
const Rekomendasi = () => {
  return (
    <div>
        <div className='flex items-center gap-7 mb-10'>
        <h1 className='font-semibold text-2xl'>Berdasarkan Pencarianmu</h1>
        <span className='text-green-600 font-semibold cursor-pointer hover:text-green-800'>Lihat Semua</span>
        </div>
        <div className='flex gap-4'>
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

export default Rekomendasi