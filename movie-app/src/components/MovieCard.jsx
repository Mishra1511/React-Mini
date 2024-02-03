import React from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';    
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FaStar } from "react-icons/fa";


function MovieCard(props){

    return(
        <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={`https://image.tmdb.org/t/p/w500${props.data.poster_path}`}
          title="Movie Poster"
        />
        <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.data.title} <Typography variant="body2">
            {props.data.release_date}
          </Typography>
        </Typography>
        <Typography sx={{m:'8px 0px'}}>
            <FaStar /> {props.data.vote_average} {`(${props.data.vote_count})`}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.data.overview}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
        
      </CardActions>

        </Card>
    )
}

export default MovieCard;