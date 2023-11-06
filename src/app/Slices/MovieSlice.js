import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieAPI from '../../api/MovieAPI'
import { apiKey } from '../../api/MovieAPIkey'

const initialState = {
    movies: [],
    series: [],
    MoviesAndSeriesDetails: []
}


export const fetchMovies = createAsyncThunk('Movie/fetchMovies', async (term) => {
    const movietext = 'harry'
    if (term) {
        const response = await MovieAPI.get(`?apikey=${apiKey}&s=${term}&type=movie`)
        return response.data
    } else {
        const response = await MovieAPI.get(`?apikey=${apiKey}&s=${movietext}&type=movie`)
        return response.data
    }
  }
)
export const fetchSeries = createAsyncThunk('Movie/fetchSeries', async (term) => {
    const serietext = 'friends'
    if(term) {
        const response = await MovieAPI.get(`?apikey=${apiKey}&s=${term}&type=series`)
        return response.data
    }else {
        const response = await MovieAPI.get(`?apikey=${apiKey}&s=${serietext}&type=series`)
        return response.data
    }
  }
)

export const fetchMoviesAndSeriesDetails = createAsyncThunk('Movie/fetchMoviesAndSeriesDetails', async (id) => {
    const response = await MovieAPI.get(`?apikey=${apiKey}&i=${id}&Plot=full`)
    return response.data
  }
)

const MovieSlice = createSlice({
    name: 'Movie',
    initialState,
    reducers:{
        removeMoviesAndSeriesDetails: (state, action) => {
            state.MoviesAndSeriesDetails = []
        }
    },
    extraReducers: { 
        [fetchMovies.pending] : () => {
            console.log('pending...')
        },
        [fetchMovies.fulfilled] : (state, {payload}) => {
            state.movies = payload
            console.log('success and this is payload')
        },
        [fetchMovies.rejected] : (state, action) => {
            console.log('failed', action.error)
        },
        [fetchSeries.fulfilled] : (state, {payload}) => {
            state.series = payload
            console.log('success and this is payload')
        },
        [fetchMoviesAndSeriesDetails.fulfilled] : (state, {payload}) => {
            state.MoviesAndSeriesDetails = payload
        },
        [fetchMoviesAndSeriesDetails.rejected] : (state, action) => {

            console.log('this is error for details', action.error.message)
        },
    }
})


export const getAllMovies = state => state.Movie.movies
export const getAllSeries = state => state.Movie.series
export const selectMoviesAndSeriesDetails = state => state.Movie.MoviesAndSeriesDetails

export const {removeMoviesAndSeriesDetails} = MovieSlice.actions
export default MovieSlice.reducer