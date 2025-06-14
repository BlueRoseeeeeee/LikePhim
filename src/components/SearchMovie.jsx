import React, { useState } from "react";

const SearchMovie = ({ title, data }) => {
  return (
    <div className="text-white p-10 mb-10">
      <h2 className="uppercase text-xl font-bold ">{title}</h2>
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-3  lg:grid-cols-4 mt-10 mb-20">
            {data &&
        data.map((item) => (
          <div
            key={item.id}
            className="w-[200px] h-auto group"
            // onClick={() => getTrailer(item.id)}
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

      
    </div>
  );
};

export default SearchMovie;
