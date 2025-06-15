import React from 'react';
import IconRate from "../assets/rating.png"; // tên thư viện tự đặt
import IconRateHalf from "../assets/rating-half.png";
import HomeMovie from "../assets/banner-temp.jpg"
import PlayButton from "../assets/play-button.png"

const Banner = () => {
  return (
    <div className='w-full min-h-[700px] bg-banner bg-cover relative'>
      <div className='absolute w-full h-full top-0 left-0 bg-black opacity-80'></div>
      <div className='w-full h-full flex flex-col lg:flex-row items-center justify-center space-y-8 lg:space-y-0 lg:space-x-[30px] p-4 relative z-20'>
        {/* Left content */}
        <div className='flex flex-col space-y-5 items-baseline w-full lg:w-[50%] px-4 lg:px-0'>
          <p className='text-white bg-gradient-to-r from-blue-600 to-blue-300 py-1 px-3 text-md'>Cartoon</p>
          <div className='flex flex-col space-y-4'>
            <h2 className='text-white text-2xl md:text-3xl lg:text-4xl'>Nobita và Câu Chuyện Về Thế Giới Tranh Ảnh</h2>
            <div className='flex items-center space-x-3'>
              <img src={IconRate} alt='rating' className='w-6 h-6 md:w-8 md:h-8'/>
              <img src={IconRate} alt='rating' className='w-6 h-6 md:w-8 md:h-8'/>
              <img src={IconRate} alt='rating' className='w-6 h-6 md:w-8 md:h-8'/>
              <img src={IconRate} alt='rating' className='w-6 h-6 md:w-8 md:h-8'/>
              <img src={IconRateHalf} alt='rating' className='w-6 h-6 md:w-8 md:h-8'/>
            </div>
            <p className='text-white text-sm md:text-base'>
              Thông qua món bảo bối mới của Doraemon, cả nhóm bạn bước thế giới trong một bức tranh nổi tiếng và bắt gặp cô bạn bí ẩn tên Claire. Với lời mời của Claire, cả nhóm cùng đến thăm vương quốc Artoria, nơi ẩn giấu một viên ngọc quý mang tên Artoria Blue đang ngủ yên. Trên hành trình tìm kiếm viên ngọc, nhóm bạn Doraemon phát hiện một truyền thuyết về sự hủy diệt của thế giới, mà truyền thuyết đó dường như đang sống dậy! Liệu cả nhóm có thể phá hủy lời nguyền này và bảo vệ cả thế giới?
            </p>
            <div className='flex items-center space-x-4'>
              <button className='p-2 text-white bg-green-500 font-semibold text-base md:text-lg'>Chi tiết</button>
              <button className='p-2 text-white bg-red-700 font-semibold text-base md:text-lg'>Xem Phim</button>
            </div>
          </div>
        </div>
        {/* Right content */}
        <div className='w-full lg:w-[50%] flex items-center justify-center px-4 lg:px-0'>
          <div className='w-full lg:w-[90%] h-[300px] md:h-[400px] lg:h-[550px] relative group cursor-pointer'>
            <img src={HomeMovie} alt='Banner film Nobita và Câu Chuyện Về Thế Giới Tranh Ảnh'
              className='w-full h-full object-cover'
            />
            <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
              <img src={PlayButton} alt='play' className='w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20'/>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
