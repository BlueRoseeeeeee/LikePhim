import React, { useState } from "react";
import Modal from 'react-modal';
import YouTube from 'react-youtube';
const opts = {
      height: '390',
      width: '640',
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
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl font-bold ">{title}</h2>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3  lg:grid-cols-4 mt-10 mb-20">
            {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-auto group"
             onClick={() => getTrailer(item.id)}
          >
          {/* //lưu ý chỗ này */}
          <div className="relative h-[300px] overflow-hidden">
            <div className="group-hover:scale-110 transition-transform duration-500 ease-in-out w-full h-full cursor-pointer">
              <div className="absolute top-0 left-0 w-full h-full bg-black/40 " />
              <img
                src={`${import.meta.env.VITE_IMG_URL}${item.poster_path}`}
                className="w-full h-full object-cover "
                alt="{item.title}"
              />
            </div>
         </div>
            <div className="mt-10">
              <p className="upperCase text-md text-center text-white">
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
            overlay:{
                position:'fixed',
                zIndex:1000000
            },
            content:{
                top:"50%",
                left:"50%",
                right:"auto",
                bottom:"auto",
                marginRight:"-50%",
                transform: "translate(-50%,-50%)"
            }
        }}
        contentLabel="Example Modal"
      >
    <YouTube videoId={trailerKey} opts={opts}  />
      </Modal>

      
    </div>
  );
};

export default SearchMovie;
