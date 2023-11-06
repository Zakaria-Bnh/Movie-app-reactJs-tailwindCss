import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchMoviesAndSeriesDetails,
  selectMoviesAndSeriesDetails,
  removeMoviesAndSeriesDetails
} from "../app/Slices/MovieSlice";
import { useParams } from "react-router-dom";

const MovieDetailes = () => {
  const dispatch = useDispatch();
  const data = useSelector(selectMoviesAndSeriesDetails);
  const { imdbID } = useParams();

  useEffect(() => {
    dispatch(fetchMoviesAndSeriesDetails(imdbID));
    return () => {
      dispatch(removeMoviesAndSeriesDetails());
    }
  }, [dispatch, imdbID]);

  console.log(data);
  return (
    <div className="flex flex-col-reverse items-center md:items-start my-12 gap-12 md:flex-row justify-evenly px-[40px] text-white font-light">
      <div className="flex-1">
        <div className="text-3xl">{data.Title}</div>
        <div className="pl-[3px] text-blue-300 mt-5 flex">
          <span>IMdb rating : <span className="mr-5">{data.imdbRating}</span></span>
          <span>IMdb votes : <span className="mr-5">{data.imdbVotes}</span></span>
        </div>
        <div className="mt-5 leading-7">{data.Plot}</div>
        <div className="info">
          <div>
            <span className="py-3 font-semibold w-[100px] inline-block">Director</span>
            <span className="text-blue-300">{data.Director}</span>
          </div>
          <div>
            <span className="py-3 font-semibold w-[100px] inline-block">Stars</span>
            <span className="text-blue-300">{data.Actors}</span>
          </div>
          <div>
            <span className="py-3 font-semibold w-[100px] inline-block">Generes</span>
            <span className="text-blue-300">{data.Genre}</span>
          </div>
          <div>
            <span className="py-3 font-semibold w-[100px] inline-block">Awards</span>
            <span className="text-blue-300">{data.Awards}</span>
          </div>
        </div>
      </div>
      <div className="flex-2 ">
        <img className="w-[400px] md:w-[350px] lg:w-[400px]" src={data.Poster} alt={data.title} />
      </div>
    </div>
  );
};

export default MovieDetailes;
