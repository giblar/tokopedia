import React from 'react'

const Footer = () => {
  return (
    <div className='flex justify-between px-[3rem] border-t py-10'>
      <div>
        <h1 className='font-bold'>tokopedia</h1>
        <div className='text-gray-600'>
          <p>tentang tokopedia</p>
          <p>hak kekayaan intelektual</p>
          <p>karir</p>
          <p>blog</p>
          <p>tokopedia partners</p>
          <p>tokopedia affiliate program</p>
          <p>tokopedia B2B Digital</p>
          <p>kalkkulator indeks masa tubuh</p>
          <p>promo hari ini</p>
          <p>beli Lokal</p>
          <p>tukar tambah laptop</p>
        </div>
      </div>

      <div>
        <div>
          <h1 className='font-bold'>beli</h1>
          <div className='text-gray-600'>
            <p>tagihan dan top up</p>
            <p>tokopedia COD</p>
            <p>bebas ongkir</p>
          </div>


        </div>
        <div>
          <h1 className='font-bold'>jual</h1>
          <div className='text-gray-600'>
            <p>Pusat Edukasi seller</p>
            <p>Daftar official store</p>
          </div>

        </div>
        <div>
          <h1 className='font-bold'>beli</h1>
          <div className='text-gray-600'>
            <p>tokopedia Care</p>
            <p>syarat dan ketentuan</p>
            <p>kebijakan privasi</p>
          </div>
        </div>
      </div>

      <div>
        <div>
          <h1 className='font-bold'>keamanan dan privasi</h1>
          <div className='flex gap-1'>
            <img src="image/product.jpg" className='aspect-video w-[70px] border border-gray-700 object-cover' alt="" />
            <img src="image/product.jpg" className='aspect-video w-[70px] border border-gray-700 object-cover' alt="" />
            <img src="image/product.jpg" className='aspect-video w-[70px] border border-gray-700 object-cover' alt="" />
          </div>
        </div>
        <div>
          <h1 className='font-bold'>ikuti kami</h1>
          <div className='flex gap-2'>
            <div className='p-2 bg-red-600 w-10 rounded-full'>
              <img src="image/topUp.png" className='w-7' alt="" />
            </div>
            <div className='p-2 bg-red-600 w-10 rounded-full'>
              <img src="image/topUp.png" className='w-7' alt="" />
            </div>
            <div className='p-2 bg-red-600 w-10 rounded-full'>
              <img src="image/topUp.png" className='w-7' alt="" />
            </div>
          </div>
        </div>

      </div>

      <div className=' w-[35rem]'>
        <img src="image/images.jpeg" className='w-full' alt="" />
        <div className='flex items-center justify-center'>
          <img src="image/playStore.png" className='h-[60px]' alt="" />
          <img src="image/appStore.png" alt="" className='h-[40px]' />
          <img src="image/amazon.png" alt="" className='h-[40px]' />
        </div>
      </div>
    </div>
  )
}

export default Footer
