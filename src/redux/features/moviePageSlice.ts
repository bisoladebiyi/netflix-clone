import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../../utils/requests";



const initialState:any = {
    headerShows: [],
    sectionOne: [],
    sectionTwo:[],
    sectionThree:[]
}
export const getMovieHeaderShows: any = createAsyncThunk(
    'moviePageShows/getHeaderShows',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/movie/top_rated', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
  export const getMovieSectionOne: any = createAsyncThunk(
    'moviePageShows/getMovieSectionOne',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/movie/now_playing', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
  export const getMovieSectionTwo: any = createAsyncThunk(
    'moviePageShows/getMovieSectionTwo',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/movie/popular', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
const movieSlice = createSlice({
    name: "moviePageShows",
    initialState,
    reducers: {},
    extraReducers: {
        [getMovieHeaderShows.pending]: (state) => {
            state.headerShows = []
        },
        [getMovieHeaderShows.fulfilled]: (state, action) => {
            state.headerShows = action.payload
        },
        [getMovieHeaderShows.rejected]: (state) => {
            state.headerShows = []
        },
        [getMovieSectionOne.pending]: (state) => {
            state.sectionOne = []
        },
        [getMovieSectionOne.fulfilled]: (state, action) => {
            state.sectionOne = action.payload
        },
        [getMovieSectionOne.rejected]: (state) => {
            state.sectionOne = []
        },
        [getMovieSectionTwo.pending]: (state) => {
            state.sectionTwo = []
        },
        [getMovieSectionTwo.fulfilled]: (state, action) => {
            state.sectionTwo = action.payload
        },
        [getMovieSectionTwo.rejected]: (state) => {
            state.sectionTwo = []
        },
    }
})

export default movieSlice.reducer;