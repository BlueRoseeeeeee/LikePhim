import React, { useState } from "react";
import Modal from 'react-modal';
import YouTube from 'react-youtube';
const opts = {
      height: '390',
      width: '100%',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

const SearchMovie = ({ title, data }) => {
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
    <div className="text-white p-4 md:p-10 mb-10">
      <h2 className="uppercase text-lg md:text-xl font-bold mb-4 md:mb-6">{title}</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 md:gap-6 lg:gap-8">
        {data && data.map((item) => (
          <div
            key={item.id}
            className="w-full group cursor-pointer"
            onClick={() => getTrailer(item.id)}
          >
            <div className="relative aspect-[2/3] overflow-hidden rounded-lg">
              <div className="group-hover:scale-105 transition-transform duration-500 ease-in-out w-full h-full">
                <div className="absolute top-0 left-0 w-full h-full bg-black/40" />
                <img
                  src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                  className="w-full h-full object-cover"
                  alt={item.title || item.original_title}
                />
              </div>
            </div>
            <div className="mt-2 md:mt-4">
              <p className="text-sm md:text-base text-center text-white line-clamp-2">
                {item.title || item.original_title}
              </p>
            </div>
          </div>
        ))}
        </div>
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
        contentLabel="Trailer  Modal"
      >
    <YouTube videoId={trailerKey} opts={opts}  />
      </Modal>

      
    </div>
  );
};

export default SearchMovie;
