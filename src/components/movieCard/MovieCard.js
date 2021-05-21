import React from "react";
import { Button, Card } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const MovieCard = ({ movie }) => {
  return (
    <div className="col-md-3">
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          alt={movie.title}
          style={{ height: "23rem" }}
        />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <Card.Text>
            <ReactStars
              count={5}
              isHalf={true}
              edit={false}
              value={movie.rate}
              size={24}
              activeColor="#ffd700"
            />
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
