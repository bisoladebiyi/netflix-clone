import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../utils/requests";



const initialState:any = {
    headerShows: [],
    sectionOne: [],
    sectionTwo:[],
    sectionThree:[]
}
export const getHeaderShows: any = createAsyncThunk(
    'homePageShows/getHeaderShows',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/movie/now_playing', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
  export const getHomeSectionOne: any = createAsyncThunk(
    'homePageShows/getHomeSectionOne',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/movie/popular', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
  export const getHomeSectionTwo: any = createAsyncThunk(
    'homePageShows/getHomeSectionTwo',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/tv/airing_today', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
  export const getHomeSectionThree: any = createAsyncThunk(
    'homePageShows/getHomeSectionThree',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/tv/popular', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
const homeSlice = createSlice({
    name: "homePageShows",
    initialState,
    reducers: {},
    extraReducers: {
        [getHeaderShows.pending]: (state) => {
            state.headerShows = []
        },
        [getHeaderShows.fulfilled]: (state, action) => {
            state.headerShows = action.payload
        },
        [getHeaderShows.rejected]: (state) => {
            state.headerShows = []
        },
        [getHomeSectionOne.pending]: (state) => {
            state.sectionOne = []
        },
        [getHomeSectionOne.fulfilled]: (state, action) => {
            state.sectionOne = action.payload
        },
        [getHomeSectionOne.rejected]: (state) => {
            state.sectionOne = []
        },
        [getHomeSectionTwo.pending]: (state) => {
            state.sectionTwo = []
        },
        [getHomeSectionTwo.fulfilled]: (state, action) => {
            state.sectionTwo = action.payload
        },
        [getHomeSectionTwo.rejected]: (state) => {
            state.sectionTwo = []
        },
        [getHomeSectionThree.pending]: (state) => {
            state.sectionThree = []
        },
        [getHomeSectionThree.fulfilled]: (state, action) => {
            state.sectionThree = action.payload
        },
        [getHomeSectionThree.rejected]: (state) => {
            state.sectionThree = []
        }
    }
})

export default homeSlice.reducer;