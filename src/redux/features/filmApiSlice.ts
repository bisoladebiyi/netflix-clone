import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const filmApi = createApi({
    reducerPath: "filmApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
    endpoints: (builder) => ({
        getHeaderShows: builder.query<any, void>({
            query: () => `movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getHomeSectionOne: builder.query<any, void>({
            query: () => `movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getHomeSectionTwo: builder.query<any, void>({
            query: () => `tv/airing_today?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getHomeSectionThree: builder.query<any, void>({
            query: () => `tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getTVHeaderShows: builder.query<any, void>({
            query: () => `tv/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getTVSectionOne: builder.query<any, void>({
            query: () => `tv/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getTVSectionTwo: builder.query<any, void>({
            query: () => `tv/on_the_air?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getMovieHeaderShows: builder.query<any, void>({
            query: () => `movie/top_rated?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getMovieSectionOne: builder.query<any, void>({
            query: () => `movie/now_playing?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),
        getMovieSectionTwo: builder.query<any, void>({
            query: () => `movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}&language=en-US`
        }),

    })

})

export const {
    useGetHeaderShowsQuery,
    useGetHomeSectionOneQuery,
    useGetHomeSectionTwoQuery,
    useGetHomeSectionThreeQuery,
    useGetTVHeaderShowsQuery,
    useGetTVSectionOneQuery,
    useGetTVSectionTwoQuery,
    useGetMovieHeaderShowsQuery,
    useGetMovieSectionOneQuery,
    useGetMovieSectionTwoQuery
} = filmApi