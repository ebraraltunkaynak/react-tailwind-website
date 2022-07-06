import React from 'react'
import {HiOutlineMenu,  HiOutlineX} from 'react-icons/hi'
import {useState} from 'react'  

const Navbar = () => {
    const [nav,setNav]=useState(false);
    const handleNav=()=>{
        setNav(!nav);
    }
    
  return (
    
    // <div className='flex justify-between items-center h-20 max-w-[1240px] mx-auto py-4text-white'>  
    
    // <h1 className='w-full text-start text-4xl italic hover:not-italic font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>BeautyCenter </h1>
    // <ul className='hidden md:flex'>
    //     <li className='p-4 text-xl text-yellow-200'>AnaSayfa</li>
    //     <li  className='p-4 text-xl text-yellow-200'>Ürünlerimiz</li>
    //     <li  className='p-4 text-xl text-yellow-200'>Fiyatlar</li>
    //     <li  className='p-4 text-xl text-yellow-200'>İletişim</li>
    // </ul>
    <div className=' flex justify-between items-center  h-24 max-w-[1240px] mx-auto  px-4 text-white'>
       <h1 className='w-full text-start text-4xl italic hover:not-italic font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500'>BeautyCenter </h1>
         
           <ul className='hidden md:flex'>
           <li className='p-4 text-xl text-yellow-200'>AnaSayfa</li>
        <li  className='p-4 text-xl text-yellow-200'>Ürünlerimiz</li>
        <li  className='p-4 text-xl text-yellow-200'>Fiyatlar</li>
        <li  className='p-4 text-xl text-yellow-200'>İletişim</li>
           </ul>
           <div onClick={handleNav} className="block md:hidden">
            {nav ? <HiOutlineMenu size ={20}/>  :   <HiOutlineX size={20}/>}
            <div className={!nav ?  'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#2c3e50] ease-in-out duration-700 ' : 'fixed left-[-100%]'}>
           <h1 className='w-full text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-violet-500 m-4'>BeautyCenter</h1>
            <ul className=' uppercase p-4'>
            <li className='p-4 border-b text-yellow-200'>Anasayfa</li>
            <li className='p-4 border-b text-yellow-200'>Ürünlerimiz</li>
            <li className='p-4 border-b text-yellow-200'>Fiyatlar</li>
            <li className='p-4 border-b text-yellow-200'>İletişim</li>
            {/* <li className='p-4 border-b border-gray-600 '>Contact</li> */}
             </ul>
           </div>
           
           </div>
           
        
        </div>

    
    
    
    
    
         
        
  )
}

export default Navbar