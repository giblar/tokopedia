import React from 'react'
import SectionLeft from './sectionLeft/SectionLeft'
import SectionRight from './sectionRight/SectionRight'
import BubleB from './buble/BubleB'

const Section = () => {
  // fjkdsj ikan hiu makan tomat si gemoy raja warung
  return (
    <div className='w-[90%] flex-col flex rounded-xl shadow-xl shadow-y-2xl border border-gray-200 gap-y-4 pb-8 pt-4'>
      <div className='flex justify-center w-full gap-x-10 '>
        <SectionLeft />
        <SectionRight />
      </div>
      <div className='justify-center items-center flex  overflow-x-auto'>
        <BubleB />
      </div>
    </div>
  )
}

export default Section
