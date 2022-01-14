import React from "react";
import { Card, Button } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";
import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <section className="ggg">
      <div>
        <Card
          style={{
            width: "13rem",
            height: "30rem",
            backgroundColor: "black",
            color: "white",
          }}
        >
          <Card.Img variant="top" src={movie.posterUrl} />
          <Card.Body>
            <div className="content">
            <Link to="/desc" state={{movie:movie}}>
                {" "}
                <Button variant="primary">see more...</Button>
              </Link>
              <Card.Title>{movie.title}</Card.Title>
              <Card.Text>{movie.description}</Card.Text>
              
            </div>
          </Card.Body>
          <ReactStars
            count={5}
            //.onChange={ratingChanged}
            value={movie.rate}
            size={24}
            edit={false}
            activeColor="#ffd700"
          />
        </Card>
      </div>
    </section>
  );
}

export default MovieCard;
