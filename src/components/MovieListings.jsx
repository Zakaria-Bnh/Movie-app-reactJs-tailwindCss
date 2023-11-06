
import { useSelector } from "react-redux"
import { getAllMovies, getAllSeries } from "../app/Slices/MovieSlice"
import {MovieCard} from './index'
import SlickSlider from "../utilities/SlickSlider"




const MovieListings = () => {
  const movies = useSelector(getAllMovies)
  const series = useSelector(getAllSeries)
  let renderedMovies, renderedSeries = ''


  renderedMovies = movies.Response === 'True' ? (
    movies.Search.map((movie, index) => (
      <MovieCard key={index} data={movie} />
    ))) 
    : (<div><h3>{movies.Error}</h3></div>);


    renderedSeries = series.Response === 'True' ? (
    series.Search.map((serie, index) => (
      <MovieCard key={index} data={serie} />
    ))) 
    : (<div><h3>{series.Error}</h3></div>);


  return (
    <div className="m-auto mx-12">
      <div className="my-12">
        <h2 className="mb-5  text-3xl text-white font-regular">Movies</h2>    
          <div className="mx-auto ">
            <SlickSlider>{renderedMovies}</SlickSlider>
            </div>    
      </div>
      <div className="my-12">
        <h2 className="mb-5 text-3xl text-white font-regular">Series</h2>
        <div className="mx-auto">
        <SlickSlider>
            {renderedSeries}
          </SlickSlider>
          </div>
      </div>
    </div>
  )
}

export default MovieListings