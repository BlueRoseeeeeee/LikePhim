import { useState,useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import ListMovie from './components/ListMovie';

function App() {
  const [movie, setMovie]=useState([]);
  const [movieTopRate, setMovieTopRate]= useState([]);
  const [upCommingMovie, setUpcommingMovie]= useState([]);
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
      <Header/>
      <Banner/>
      <ListMovie title={'Phổ biến'} data={movie.slice(0,5)}/>
      <ListMovie title={'Được đánh giá cao'} data={movieTopRate.slice(0,5)}/>
      <ListMovie title={'Sắp ra mắt'} data={upCommingMovie.slice(0,5)}/>
        
      </div>
      
    </>
  )
}

export default App
