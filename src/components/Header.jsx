import React from 'react'

const Header = () => {
  return (
    <div className="p-4 bg-blue-600 flex items-center justify-between">
    <div className="flex items-center space-x-4">
        <h1 className='text-[50px] font-bold text-[#b0eb67]'>LIKEPHIM</h1>
        <nav className='flex items-center space-x-4'>
        <a href='' className='text-white text-[20px]'>Home</a>
        <a href='' className='text-white text-[20px] '>About</a>
        <a href='' className='text-white text-[20px]'>Contact</a>

        </nav>

    </div>
      <div className='flex items-center space-x-4'>
        <input type='text' placeholder='Search' className='p-4 text-black'/>
        <button className='p-2 text-black bg-[#b0eb67]'>Search</button>

      </div>
    </div>
  )
}

export default Header
