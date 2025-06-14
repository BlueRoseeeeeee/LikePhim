import React from 'react';
import IconRate from "../assets/rating.png"; // tên thư viện tự đặt
import IconRateHalf from "../assets/rating-half.png";

const Banner = () => {
  return (
    <div className='w-full h-[800px] bg-banner bg-cover relative'>
    <div className='absolute  w-full h-full top-0 left-0 bg-black opacity-80'></div>
    <div className='w-full h-full flex items-center justify-center space-x-[30px] p-4 relative z-20'>
     {/* nội dung bên trái */}
        <div className='flex flex-col space-y-5 items-baseline w-[50%]'>
            <p className='text-white bg-gradient-to-r from-red-600 to-red-300 py-1 px-3  text-md'>Cartoon</p>
            <div className='flex flex-col space-y-4'>
            <h2 className='text-white text-3xl'>Nobita và Câu Chuyện Về Thế Giới Tranh Ảnh</h2>
            <div className='flex items-center space-x-3'>
            <img src={IconRate} alt='rating' className='w-8 h-8'/>
            <img src={IconRate} alt='rating' className='w-8 h-8'/>
            <img src={IconRate} alt='rating' className='w-8 h-8'/>
            <img src={IconRate} alt='rating' className='w-8 h-8'/>
            <img src={IconRateHalf} alt='rating' className='w-8 h-8'/>
            </div>
            <p className='text-white'>
                Thông qua món bảo bối mới của Doraemon, cả nhóm bạn bước thế giới trong một bức tranh nổi tiếng và bắt gặp cô bạn bí ẩn tên Claire. Với lời mời của Claire, cả nhóm cùng đến thăm vương quốc Artoria, nơi ẩn giấu một viên ngọc quý mang tên Artoria Blue đang ngủ yên. Trên hành trình tìm kiếm viên ngọc, nhóm bạn Doraemon phát hiện một truyền thuyết về sự hủy diệt của thế giới, mà truyền thuyết đó dường như đang sống dậy! Liệu cả nhóm có thể phá hủy lời nguyền này và bảo vệ cả thế giới?
            </p>

            </div>
        </div>
        {/* Nội dung bên phải */}
        <div className='w-[50%]'>Image</div>
    </div>
      
    </div>
  )
}

export default Banner
