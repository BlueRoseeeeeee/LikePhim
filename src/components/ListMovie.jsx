import React from 'react';
import { useState } from 'react';
import ImgTemp from "../assets/DoraemonKhungLong.jpg"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Modal from 'react-modal';
import YouTube from 'react-youtube';

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 6
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2
  }
};

const opts = {
  height: '390',
  width: '100%',
  playerVars: {
    autoplay: 1,
  },
};



function ListMovie({title,data}) { //title là props
    const [modalIsOpen, setModalIsOpen] = React.useState(false);
    const [trailerKey,setTrailerKey]= useState("");
    const getTrailer= async(id)=>{
        //trước khi mở cái mới thì phải reset cái cũ
        setTrailerKey('')
    try {
        const url = `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`;
        const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
        }
        };
    const respone= await fetch(url,options);
    const data= await respone.json();
    console.log('trailer:',data);
    setTrailerKey(data.results[0].key);
    setModalIsOpen(true);
  
    } catch (error) {
        console.log("Lỗi khi lấy trailer:",error);
        setModalIsOpen(false);
    }
};
  return (
    <div className='text-[#f1efef] p-4 md:p-10 mb-5'>
      <h2 className='uppercase text-lg md:text-xl font-bold mb-4 md:mb-6'>{title}</h2>
      <Carousel 
        responsive={responsive} 
        className='flex items-center'
        itemClass="px-2"
        containerClass="py-4"
      >
        {data.length > 0 && data.map((item) => (
          <div 
            key={item.id} 
            className='relative group cursor-pointer'
            onClick={() => getTrailer(item.id)}
          >
            <div className='group-hover:scale-105 transition-transform duration-500 ease-in-out'> 
              <div className='absolute top-0 left-0 w-full h-full bg-black/40'/>
              <img 
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                className='w-full h-auto aspect-[2/3] object-cover rounded-lg'
                alt={item.title}
              />
            </div>
            <div className='mt-2 md:mt-4'>
              <p className='text-sm md:text-base text-center text-white line-clamp-2'>
                {item.title || item.original_title}
              </p>
            </div>
          </div>
        ))}
      </Carousel>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={()=>setModalIsOpen(false)}
        style={{
          overlay: {
            position: 'fixed',
            zIndex: 1000000,
            backgroundColor: 'rgba(0, 0, 0, 0.75)'
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '800px',
            padding: '0',
            border: 'none',
            background: 'transparent'
          }
        }}
        contentLabel="Trailer Modal"
      >
    <YouTube videoId={trailerKey} opts={opts}  />
      </Modal>

    </div>

  )
}
export default ListMovie
