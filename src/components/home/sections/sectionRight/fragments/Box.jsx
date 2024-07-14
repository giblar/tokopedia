import React from 'react'
import Inp from './Inp'

const Box = () => {
    return (
        <div className='border rounded-lg pb-5 px-2'>
            <div className='flex justify-between gap-x-10 border-b'>
                <div className='flex justify-between w-full mt-2 '>
                    <a href="#" className="text-gray-700 text-md font-semibold border-b-4 border-transparent hover:border-b-4 border-green-700" >Pulsa</a>
                    <a href="#" className="text-gray-700 text-md font-semibold border-b-4 border-transparent hover:border-b-4 hover:border-green-700">Paket Data</a>
                    <a href="#" className="text-gray-700 text-md font-semibold border-b-4 border-transparent hover:border-b-4 hover:border-green-700">Flight</a>
                    <a href="#" className="text-gray-700 text-md font-semibold border-b-4 border-transparent hover:border-b-4 hover:border-green-700">Paket PLN</a>

                </div>
                <div className='flex justify-center items-center border-l'>
                    <img src="image/icon/more.svg" alt="" className='w-7' />
                </div>
            </div>
            <div className="flex items-end  mt-3 flex-grow">
                <div className="flex flex-col ">
                    <label htmlFor="" className='text-sm font-semibold text-gray-700'  >Nomor Telpon</label>
                    <Inp />
                </div>
                <div className="flex flex-col">
                    <label htmlFor="" className='text-sm font-semibold text-gray-700'>Jumlah</label>
                    <Inp />
                </div>
                <button className="bg-gray-300 text-gray-500 px-8 rounded-md h-10">Beli</button>
            </div>


        </div>
    )
}

export default Box
