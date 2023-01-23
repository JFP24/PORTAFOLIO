import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi';

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#8293A4]'>
      {/* Container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-gray-600'>Hola , Mi nombre es</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Juan Felipe
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#020203]'>
          Desallorador web
        </h2>
        <p className='text-[#020203] py-4 max-w-[700px]'>
          Desarrollador web, amante a la tecnologia y a este bello arte que es la programacion , especializado en el desarrollo backend.
        </p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
            View Work
            <span className='group-hover:rotate-90 duration-300'>
              <HiArrowNarrowRight className='ml-3 ' />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
