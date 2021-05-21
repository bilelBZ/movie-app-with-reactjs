import React from 'react'
import MovieCard from '../movieCard/MovieCard'

const MovieList = ({movielist}) => {
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {
                movielist.map(movie => <MovieCard movie={movie} key={movie.id} />)
            }
        </div>
    )
}

export default MovieList
