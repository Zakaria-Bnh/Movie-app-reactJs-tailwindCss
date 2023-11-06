import { useEffect } from 'react'
import MovieListings from './MovieListings' 

import { useDispatch } from 'react-redux'
import { fetchMovies, fetchSeries } from '../app/Slices/MovieSlice'


const Home = () => {

  const dispatch = useDispatch()

  useEffect(() => {
   dispatch(fetchMovies())
   dispatch(fetchSeries())
  },[dispatch])


  return (
    <div className='py-12'>
      <MovieListings />
    </div>
    )
}

export default Home