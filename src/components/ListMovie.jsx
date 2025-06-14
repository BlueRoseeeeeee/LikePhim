import React from 'react';
import ImgTemp from "../assets/DoraemonKhungLong.jpg"

function ListMovie({title,data}) { //title là props
  return (
    <div className='text-white p-10 mb-5'>
    <h2 className='upperCase text-md font-bold'>{title}</h2>
    {/*  danh sách card */}
    <div className='flex items-center space-x-4 mt-6'>
    {data.length>0 && data.map((item)=>(
        <div key={item.id} 
        className='w-[200px] h-[300px] relative group'>
        <div className='group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer'> 
            <div className='absolute top-0 left-0 w-full h-full bg-black/40 '/>
            <img src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
             className='w-full h-full object-cover '
             alt='{item.title}'
             />
            <div className='absolute bottom-4 left-4'>
                <p className='upperCase text-md text-center'>
                    {item.title||item.original_title}
                </p>
             </div>
        </div>
        </div>

    ))}
         
    

        </div>
    </div>

  )
}
export default ListMovie
