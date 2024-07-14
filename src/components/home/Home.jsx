import React from 'react';
import Banner from './banner/Banner';
import Section from './sections/Section';
import Promo from './promo/Promo';
import Trending from './trending/Trending';
import Rekomendasi from './rekomendasi/Rekomendasi';
import Foru from './foru/Foru';
import { ListCard } from './foru/listCard/ListCard';

const Home = () => {
  return (
    <div>
      <div className='flex flex-col w-full justify-center items-center mt-[15vh] gap-y-4'>
        <div className="w-[90%]">
          <Banner />
        </div>
        <Section />
        <div className="w-full my-[3rem]">
          <Promo />
        </div>
        <div>
          <Trending />
        </div>
        <div>
          <Rekomendasi />
        </div>
      </div>

      <div className='flex flex-col w justify-center items-center mt-[15vh] mb-[20vh] gap-y-4'>
        <div className=' '>
          <div className='sticky top-[5.3rem] shadow-bottom-md w-full px-10 bg-white mb-10 py-2'>
            <Foru />
          </div>
          <ListCard />
        </div>
      </div>
    </div>
  );
};

export default Home;
