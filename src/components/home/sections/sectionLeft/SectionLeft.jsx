import React from 'react'
import Box from './fragments/Box'

const SectionLeft = () => {
  return (
    <div>
      <h1 className='font-semibold text-2xl mb-4'>Kategori Dan Pilihan</h1>
     <div className='flex gap-x-2'>
     <Box></Box>
      <Box></Box>
      <Box></Box>
      <Box></Box>
     </div>
    </div>
  )
}

export default SectionLeft
