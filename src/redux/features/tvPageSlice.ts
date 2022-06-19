import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchData } from "../../../utils/requests";



const initialState:any = {
    headerShows: [],
    sectionOne: [],
    sectionTwo:[],
    sectionThree:[]
}
export const getTVHeaderShows: any = createAsyncThunk(
    'tvPageShows/getTVHeaderShows',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/tv/top_rated', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
  export const getTVSectionOne: any = createAsyncThunk(
    'tvPageShows/getTVSectionOne',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/tv/popular', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
  export const getTVSectionTwo: any = createAsyncThunk(
    'tvPageShows/getTVSectionTwo',
    async (dispatch, getState) => {
      const res = await fetchData('https://api.themoviedb.org/3/tv/on_the_air', process.env.NEXT_PUBLIC_API_KEY, 'GET')
      return res.results
  })
const TVSlice = createSlice({
    name: "tvPageShows",
    initialState,
    reducers: {},
    extraReducers: {
        [getTVHeaderShows.pending]: (state) => {
            state.headerShows = []
        },
        [getTVHeaderShows.fulfilled]: (state, action) => {
            state.headerShows = action.payload
        },
        [getTVHeaderShows.rejected]: (state) => {
            state.headerShows = []
        },
        [getTVSectionOne.pending]: (state) => {
            state.sectionOne = []
        },
        [getTVSectionOne.fulfilled]: (state, action) => {
            state.sectionOne = action.payload
        },
        [getTVSectionOne.rejected]: (state) => {
            state.sectionOne = []
        },
        [getTVSectionTwo.pending]: (state) => {
            state.sectionTwo = []
        },
        [getTVSectionTwo.fulfilled]: (state, action) => {
            state.sectionTwo = action.payload
        },
        [getTVSectionTwo.rejected]: (state) => {
            state.sectionTwo = []
        },
    }
})

export default TVSlice.reducer;