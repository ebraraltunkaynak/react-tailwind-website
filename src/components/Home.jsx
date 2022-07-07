import React from 'react'
import Typed from 'react-typed'


const Home = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] mx-auto w-full   h-screen text-center  flex flex-col justify-center'>
            <p className=' text-[#e67e22] text-7xl font-bold p-2'>
                İnternete özel fiyatlar
            </p>
            <h1 className='md:text-7xl sm:text-6xl bg-clip-text text-transparent   bg-gradient-to-r from-pink-500 to-violet-500 text-4xl font-bold md:py-6'>
                BeautyCenter
            </h1>
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'> SİZE ÖZEL </p>
                <Typed
                className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
                strings={['NAILART','SAC','BOYA']}
                typeSpeed   = {100}
                backSpeed   = {140}
                loop        />
            </div>



            <p className='md:text-2xl text-xl font-bold text-gray-500'>Cart curt mahallesi cart curt sokak Yenişehir/Mersin</p>
        {/* <button className='bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black'>Get Started</button> */}
      </div>
    </div>
  );
};

  


export default Home