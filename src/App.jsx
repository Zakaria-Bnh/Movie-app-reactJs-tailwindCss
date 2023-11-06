import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {Header, Home, MovieDetailes,Footer, PageNotFound} from './components/index'


const App = () => {
  return (
    <div className='h-screen flex flex-col'>
      <Router>
        <Header />
        <div className="flex-1">

        <Routes>
          <Route path='/' exact element={<Home/>} />
          <Route path='/movie/:imdbID' element={<MovieDetailes/>} />
          <Route  element={<PageNotFound/>} />
        </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  )
}

export default App