import React from 'react';
import './styling.css'
const MovieCardDetails = ({movieList,match}) => {
    const movie = movieList.find((el)=>el.id == match.params.id)
    return (
<div className='cardDetails'>
<div width='50%' >
<h3>{movie.title}</h3>
<img width='400' src={movie.posterUrl} alt={movie.title}/>
<h6>{movie.description}</h6>
</div>
<div width='50%'>
    <h3>Trailer</h3>   
    <iframe
     title="trailer" 
      width='800'
      height="400"
       src={movie.trailer}
       allowFullScreen
       />
</div>
</div>
    )
}

export default MovieCardDetails
