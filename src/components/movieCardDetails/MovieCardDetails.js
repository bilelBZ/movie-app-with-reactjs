import React from 'react'
import { Card } from 'react-bootstrap'

const MovieCardDetails = ({movielist,match}) => {
    const movie = movielist.find((el)=>el.id == match.params.id)
    return (
<div>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={movie.posterUrl} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>
    <Card.Text>
      {movie.description}
    </Card.Text>
  </Card.Body>
</Card>
<div>
    <h3>Trailer</h3>
    <div>
    {movie.trailer}
    </div>
</div>
</div>
    )
}

export default MovieCardDetails
