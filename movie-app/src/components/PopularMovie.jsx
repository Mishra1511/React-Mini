import { useState } from "react";
import { useEffect } from "react";
import MovieCard from "./MovieCard";
import Grid from '@mui/material/Grid';
import CircularProgress from '@mui/material/CircularProgress';

import TextField from '@mui/material/TextField';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { getMovies } from "../API/api";

function PopularMovies(){
    const[data,setData]=useState(null);
    const[load,setLoad]=useState(false);
    const [search, setSearch] = useState('')
    const [selectedFilter, setSelectedFilter] = useState("now_playing")

useEffect(()=>{

    const timer = setTimeout(() => {
        setLoad(true)
        getMovies({
          query: search,
          filter: selectedFilter
        })
          .then(val => setData(val))
          .finally(() => setLoad(false))
      }, 1000)
  
      return () => {
        clearTimeout(timer)
      }

    }, [search, selectedFilter])

    if(load){
        return(
            <div style={{width:'100vw',height:'100vh', display:'flex', justifyContent:'center',alignItems:'center'}}>
                <CircularProgress/>
            </div>
        ) 
    }


    return (
        <div>

            {selectedFilter === 'top_rated'?(
                <h1>Top Rated ({data?.total_results})</h1>
            ) : selectedFilter ==='popular'? (
                <h1>Popular ({data?.total_results})</h1>
            ):( 
                <h1>Now Playing ({data?.total_results})</h1> )}
           

            <TextField onChange={(e) => setSearch(e.target.value)} value={search} label="Search...." variant="filled" />
            <Select value={selectedFilter} onChange={(e) => setSelectedFilter(e.target.value)}>
                <MenuItem value="now_playing">Now Playing</MenuItem>
                <MenuItem value="popular">Popular</MenuItem>
                <MenuItem value="top_rated">Top Rated</MenuItem>
            </Select>
            <div>
                <Grid container spacing={5}>
                    {data?.results?.map(movie => 
                        <Grid item key={movie.id} xl={2} lg={3} md={6} sm={12}>
                            <MovieCard data={movie}/>
                        </Grid>)}
                </Grid>
                
            </div>
        </div>
    )
}

export default PopularMovies;