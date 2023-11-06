import { Link } from "react-router-dom"



const MovieCard = ({data}) => {
  return (
    <div className='cursor-pointer mx-2 bg-gray-800 rounded-lg overflow-hidden'>
      <Link to={`/movie/${data.imdbID}`}>
      <div className='hover:scale-105 transition-all duration-300'>
        <div className='h-[300px]'>
          <img className="w-full h-full" src={data.Poster} alt={data.Title} />
        </div>
        <div className="p-[20px] h-[200px]">
          <div className="h-full flex flex-col justify-between">
            <h4 className="text-sm sm:text-lg md:text-xl text-white font-regular mb-[10px] ">{data.Title}</h4>
            <p className="font-bold text-lg text-white">{data.Year}</p>
          </div>
        </div>
      </div>
      </Link>
    </div> 
  )
}

export default MovieCard