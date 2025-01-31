import React from "react";
import "../styles/movieCard.css"; // Import styles

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} />
      <h3>{movie.title}</h3>
    </div>
  );
};

export default MovieCard;

