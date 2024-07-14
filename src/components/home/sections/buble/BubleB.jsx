import React from 'react'
import BubleBox from './fragments/BubleBox'

const BubleB = () => {
  return (
    <div className='flex'>
      <BubleBox
      image="now.png"
      text="belanja 2 jam tiba"
      />
        <BubleBox
      image="kategori.png"
      text="kategori"
      />
        <BubleBox
      image="handphone.png"
      text="handphone & tablet"
      />
        <BubleBox
      image="topUp.png"
      text="Top up Dan tagihan"
      />
        <BubleBox
      image="headphone.png"
      text="Elektronik"
      />
        <BubleBox
      image="perawatanHewan.png"
      text="perawatan Hewan"
      />
        <BubleBox
      image="travel.png"
      text="Travel "
      />
    </div>
  )
}

export default BubleB
