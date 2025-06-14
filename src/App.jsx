import { useState,useEffect } from 'react';
import Banner from './components/Banner';
import Header from './components/Header';
import ListMovie from './components/ListMovie';

function App() {
  const [movie, setMovie]=useState([]);
  useEffect(() => {
  const fetchMovie = async () => {
    const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_MOVIE_API_KEY}`
        }
      };

const respone = await fetch(url, options);
 const result= await respone.json();
 console.log(result);
 setMovie(result.results);
  };

  fetchMovie();
}, []);

    

  return (
    <>
      <div className='bg-black pb-10'>
      <Header/>
      <Banner/>
      <ListMovie title={'Phổ biến'} data={movie.slice(0,5)}/>
      {/* <ListMovie title={'Được đánh giá cao'} data={movie}/> */}
      {/* <ListMovie title={'Sắp ra mắt'} data={movie}/> */}
        
      </div>
      
    </>
  )
}

export default App
