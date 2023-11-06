import { Link } from "react-router-dom";
import { BiSolidUserCircle, BiSearchAlt2 } from "react-icons/bi";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchMovies, fetchSeries } from "../app/Slices/MovieSlice";

const Header = () => {
  const [searchTerm, setsearchTerm] = useState('')
  const [ismenu, setismenu] = useState(false)
  const dispatch = useDispatch()



  const handleMobilesearch = () => {
    setismenu(!ismenu)
    dispatch(fetchMovies(searchTerm))
    dispatch(fetchSeries(searchTerm))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(fetchMovies(searchTerm))
    dispatch(fetchSeries(searchTerm))
    setsearchTerm('')
  }


  return (
    <div className={`bg-gray-800 p-4 px-[40px] flex items-center ${ismenu? '': 'justify-between'} gap-4 md:justify-around`}>
      <Link to={"/"}>
        <div className={`${ismenu? 'hidden' : 'block'} md:block text-orange-300 text-3xl font-bold `}>MovieAPP</div>
      </Link>
      <form className={`${ismenu ? 'flex' : 'hidden'} flex-1 md:flex-initial md:flex items-center gap-2`} onSubmit={e => handleSubmit(e)}>
        <input
          className="w-full md:w-[300px] py-2 px-3 bg-gray-700 text-white outline-none border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-orange-300"
          type="text"
          value={searchTerm}
          onChange={e => setsearchTerm(e.target.value)}
          placeholder="Search movies"
        />{" "}
        <button className="hidden md:block" type="submit">
          <BiSearchAlt2 className="text-white w-[30px] h-[30px] flex-1" />
        </button>
      </form>
      <BiSearchAlt2 onClick={() => handleMobilesearch()} className="md:hidden text-white w-8 h-8 cursor-pointer"/>
      <div className="cursor-pointer hidden md:block">
        <BiSolidUserCircle className="text-white w-[38px] h-[38px]" />
      </div>
    </div>
  );
};

export default Header;
