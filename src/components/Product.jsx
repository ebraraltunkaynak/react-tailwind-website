import React from 'react'
import Nail from "../img/nail.jpg"
import Hair from "../img/sac.jpg"
import Kesim from "../img/kesim.jpg"

import Makeup from "../img/makeup.jpg"
import Mank from     '../img/mank.jpg'
import Art from '../img/art.jpg'
import Examp from  "../img/3.jpg"
import Bride from '../img/bride.jpg'
const Product = () => {
  return (
    <div className='w-full h-screen bg-[#2c3e50 text-gray-300]'>
        <div className='max-w-[1080px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
         <p className='text-4xl text-white font-bold inline border-b-4 border-pink-500' >BeautyCenter</p>
         <p className='py-4 text-white text-2xl text-bold'>Hizmetlerimiz</p>

 
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#9b59b6] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Nail} alt='nail' className=' w-full h-full transition-all'/>
                </div>
                <div className='shadow-md shadow-[#2ecc71] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Hair} alt='nail' className=' w-full h-full transition-all'/>
                </div>
                <div className='shadow-md shadow-[#9b59b6] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Kesim} alt='nail' className=' w-full h-full transition-all'/>
                </div>
                <div className='shadow-md shadow-[#2ecc71] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Bride} alt='nail' className=' w-full h-full transition-all'/>
                </div>
                <div className='shadow-md shadow-[#9b59b6] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Makeup} alt='nail' className=' w-full h-full transition-all'/>
                </div>
                <div className='shadow-md shadow-[#2ecc71] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Mank} alt='nail' className=' w-full h-full transition-all'/>
                </div>
                <div className='shadow-md shadow-[#9b59b6] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Art} alt='nail' className=' w-full h-full transition-all'/>
                </div>
                <div className='shadow-md shadow-[#2ecc71] hover:shadow-lg hover:scale-110
                 duration-500'>
                    <img src={Examp} alt='nail' className=' w-full h-full transition-all'/>
                </div>
            </div>
            
            
            </div>




   </div>

  )
}

export default Product