import React from 'react'
import { useState } from 'react';

const Header = ({search}) => {
   const  [textInput, setTextInput]= useState('');
  return (
<<<<<<< HEAD
    <div className="p-4 bg-black flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
      <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto justify-between">
        <div className='flex items-center flex-row'>
          <h1 className='text-2xl md:text-[35px] font-bold text-white'>LIKE</h1>
          <h1 className='text-2xl md:text-[35px] font-bold text-blue-500'>PHIM</h1>
        </div>
        <nav className='flex items-center space-x-2 md:space-x-4'>
          <a href='' className='text-white text-base md:text-lg'>Home</a>
          <a href='' className='text-white text-base md:text-lg'>About</a>
          <a href='' className='text-white text-base md:text-lg'>Contact</a>
=======
    <div className="p-4 bg-black flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className=' flex items-center flex-row'>
        <h1 className='text-[35px] font-bold text-white'>LIKE</h1>
        <h1 className='text-[35px] font-bold text-blue-500'>PHIM</h1>
      </div>
        <nav className='flex items-center space-x-4'>
        <a href='https://thichxemphim.vercel.app/' className='text-white'>Home</a>
        <a href='' className='text-white'>About</a>
        <a href='' className='text-white'>Contact</a>

>>>>>>> 4375148c47e4772e01e7d49c0d961d1698fd4f88
        </nav>
      </div>
      <div className='flex items-center space-x-2 md:space-x-4 w-full md:w-auto'>
        <input type='text' placeholder='Search' className='p-2 text-black w-full md:w-auto' onChange={(e)=>setTextInput(e.target.value)} value={textInput}/>
        <button className='p-2 text-white bg-red-500 w-full md:w-auto' onClick={()=>search(textInput)}>Search</button>
      </div>
    </div>
  )
}

export default Header
