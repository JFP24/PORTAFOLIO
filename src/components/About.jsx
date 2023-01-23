import React from 'react';

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#8293A4] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-800'>
              Sobre
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hola , Soy Juan Felipe Pulgarin.</p>
            </div>
            <div>
              <p>Apasionado al mundo de la tecnologia, soy una persona motivada, con ansias de aprender cada dia un poco mas, mejorando en mis habilidades, para otorgar a los que necesiten un poco de mi conocimiento, mira a tu alrededor, y echale un vistaso a alguno de los proyectos en los cuales he trabajado</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
