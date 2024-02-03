import axios from "axios";

const API = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmNGJiOTg5NjZhNjYwMzU5NGEwNDZhYjFjMDhiMzhkNyIsInN1YiI6IjY1YjdhNDJkMTA4OWJhMDE3ZGY4MGJjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eOkzX9CPmFDSwUABPSEtHNIS2L6bULaYuNAj7X8x5W4`
    }
})



export async function FetchMovieBySearch(query) {
    const { data } = await API.get(`/search/movie?query=${query}&include_adult=false&language=en-US`)
    return data
}

export async function getMoviesByFilter(filter) {
    const { data } = await API.get(`/movie/${filter}`)
    return data
}

export async function getMovies({
    filter,
    query
}) {
    if (query) return await FetchMovieBySearch(query)
    if (filter) return await getMoviesByFilter(filter)
    
}