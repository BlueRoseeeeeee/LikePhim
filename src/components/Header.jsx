import React from 'react'

const Header = ({search}) => {
  return (
    <div className="p-4 bg-black flex items-center justify-between">
    <div className="flex items-center space-x-4">
      <div className=' flex items-center flex-row'>
        <h1 className='text-[35px] font-bold text-white'>LIKE</h1>
        <h1 className='text-[35px] font-bold text-blue-500'>PHIM</h1>
      </div>
        <nav className='flex items-center space-x-4'>
        <a href='' className='text-white'>Home</a>
        <a href='' className='text-white'>About</a>
        <a href='' className='text-white'>Contact</a>

        </nav>

    </div>
      <div className='flex items-center space-x-4'>
        <input type='text' placeholder='Search' className='p-2 text-black '/>
        <button className='p-2 text-white bg-red-500' onClick={()=>search()}>Search</button>

      </div>
    </div>
  )
}

export default Header
