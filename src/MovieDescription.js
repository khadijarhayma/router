import React from "react";
import { Link, useLocation } from "react-router-dom";

function MovieDescription() {
  const location = useLocation();
  const { movie } = location.state;
  return (
    <div>
      <Link to="/"> Home</Link>
      <div className="desc">
        <img src={movie.posterUrl} className="picture" />
        <div>
          <h1 > {movie.title}</h1>

          <p>{movie.description}</p>
        </div>
      </div>
    </div>
  );
}

export default MovieDescription;
