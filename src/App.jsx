import { useState,useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import ListMovie from './components/ListMovie';
import SearchMovie from './components/SearchMovie';


function App() {
  const [movie, setMovie]=useState([]);
  const [movieTopRate, setMovieTopRate]= useState([]);
  const [upCommingMovie, setUpcommingMovie]= useState([]);
  const [movieSearch, setMovieSearch]= useState([]);

  const handleSearch= async (vlSearch)=>{
    setMovieSearch([])
    try {
    const url = `https://api.themoviedb.org/3/search/movie?query=${vlSearch}&include_adult=false&language=vi&page=1`;
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
        }
      };
      const searchByTitile= await fetch(url,options);
      const data= await searchByTitile.json();
       console.log('Danh sách phim được tìm thấy',data);
      setMovieSearch(data.results);
      
    } catch (error) {
      console.log(error);
      
    }

  }
  useEffect(() => {
  const fetchMovie = async () => {
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
        }
      };
       const url_popular_movie = 'https://api.themoviedb.org/3/movie/popular?language=vi&page=1';
       const url_topRate_movie= 'https://api.themoviedb.org/3/movie/top_rated?language=vi&page=1';
       const url_upComming_movie= 'https://api.themoviedb.org/3/movie/upcoming?language=vi&page=1';
// const respone = await fetch(url_popular_movie, options);
//  const result= await respone.json();
//  console.log(result);
// Promise.all() la 1 Promise, nen phai await no truoc khi destructuring
      const [res1,res2,res3]= await Promise.all([
        fetch(url_popular_movie, options),
        fetch(url_topRate_movie, options),
        fetch(url_upComming_movie,options)
      ])
      const popular_movie_data= await res1.json();
      const topRate_movie_data= await res2.json();
      const upComming_movie_data= await res3.json();
      console.log(popular_movie_data.results);
      setMovie(popular_movie_data.results);
      setMovieTopRate(topRate_movie_data.results);
      setUpcommingMovie(upComming_movie_data.results);
  };

  fetchMovie();
}, []);

    

  return (
    <>
      <div className='bg-black pb-10'>
      <Header search={handleSearch}/>
      <Banner/>
      {movieSearch.length>0?<SearchMovie title={'Kết quả tìm kiếm'} data={movieSearch}/>:(
      <> 
      {/* Không cho dùng 3 thẻ đồng cấp nên là dùng thẻ đóng rỗng <></>của React */}
      <ListMovie title={'Phổ biến'} data={movie}/> 
      <ListMovie title={'Được đánh giá cao'} data={movieTopRate}/>
      <ListMovie title={'Sắp ra mắt'} data={upCommingMovie}/>
      </>
      )}
      
    
      </div>
      
    </>
  )
}

export default App
