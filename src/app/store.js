import { configureStore } from "@reduxjs/toolkit";
import MovieReducer from './Slices/MovieSlice'



export const store = configureStore({
    reducer: {
        Movie: MovieReducer,
    },
})