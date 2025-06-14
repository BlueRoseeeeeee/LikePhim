import React from 'react';
import IconRate from "../assets/rating.png"; // tên thư viện tự đặt
import IconRateHalf from "../assets/rating-half.png";
import HomeMovie from "../assets/banner-temp.jpg"
import PlayButton from "../assets/play-button.png"

const Banner = () => {
  return (
    <div className='w-full h-[700px] bg-banner bg-cover relative'>
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
            <div className='flex items-center space-x-4'>
            <button className='p-2 text-white bg-green-500 font-semibold text-lg'> Chi tiết</button>
            <button className='p-2 text-white bg-red-700 font-semibold text-lg'> Xem Phim</button>


            </div>

            </div>
        </div>
        {/* Nội dung bên phải */}
        <div className='w-[50%]'>
            <div className='w-[90%] h-[550px] relative group cursor-pointer'>
                <img src={HomeMovie} alt='Banner film Nobita và Câu Chuyện Về Thế Giới Tranh Ảnh'
                    className='w-full h-full object-fit'
                />
                <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in-out'>
                    <img src={PlayButton} alt='play' className='w-20 h-20'/>
                </div>
            </div>
        </div>
    </div>
      
    </div>
  )
}

export default Banner
