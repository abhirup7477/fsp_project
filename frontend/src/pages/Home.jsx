import React from 'react';
import { Link } from "react-router-dom";

import "../styles/home.css"
import MovieCard from '../components/MovieCard';

export default function Home() {

  const trendingMovies = [
    { id: 1, title: "SMILE", image: "movie1.jpg" },
    { id: 2, title: "REMEMORY", image: "movie2.jpg" },
  ];

  const popularMovies = [
    { id: 3, title: "MOONLIGHT", image: "movie3.jpg" },
    { id: 4, title: "FAST X", image: "movie4.jpg" },
  ];

  return (
    <div className='homepage'>
      <div className="header">
        <div className='navbar'>
          <div className="logo">
            <img src="logo.svg" alt="logo" className="logo" />
          </div>
          <div className='navbar-buttons'>
            <div calssName="navbar-links">
              <Link to="/" className="navLink">Home</Link>
              <Link to="/aboutus" className="navLink">About Us</Link>
            </div>
            <div className="login">
              <Link to="/login">
                <button className="loginButton">Log in</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="logo">
          <img src="/logo.jpg" alt="logo" />
        </div>
      </div>

      <div className="banner">
        <h1>Featured Show</h1>
        <p>Watch the latest and greatest now!</p>
      </div>

      <section className="movies-section">
        <h2>Trending Now</h2>
        <div className="movies-container">
          {trendingMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>

      <section className="movies-section">
        <h2>Popular Movies</h2>
        <div className="movies-container">
          {popularMovies.map((movie) => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </section>
    </div>
  )
}
