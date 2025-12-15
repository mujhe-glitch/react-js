// import axios from 'axios'
// import React from 'react'
// import { useParams } from 'react-router-dom'

// export const MovieDetail = () => {

//     const id = useParams().id
//     const getMovieDetail = async()=>{

//         const res = await axios.get(`https://www.omdbapi.com/?apikey=9d57be0b&i=${id}`)
//         console.log(res.data)
//     }
//   return (
//     <div>
//         <h1>MOVIE DETAIL CALLED...</h1>
//         <button onClick={()=>{getMovieDetail()}}>DETAIL</button>
//     </div>
//   )
// }
import axios from "axios";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/movieDetails.css";

export const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const getMovieDetail = async () => {
    const res = await axios.get(
      `https://www.omdbapi.com/?apikey=9d57be0b&i=${id}`
    );
    setMovie(res.data);
  };

  return (
    <div className="movie-container">

      <button className="load-btn" onClick={getMovieDetail}>
        Load Movie Details
      </button>

      {movie && (
        <div className="movie-card">
          <img src={movie.Poster} alt={movie.Title} className="movie-poster" />

          <div className="movie-details">
            <h1>{movie.Title} ({movie.Year})</h1>

            <p><strong>Genre:</strong> {movie.Genre}</p>
            <p><strong>Director:</strong> {movie.Director}</p>
            <p><strong>Actors:</strong> {movie.Actors}</p>
            <p><strong>Language:</strong> {movie.Language}</p>
            <p><strong>Country:</strong> {movie.Country}</p>

            <p className="plot"><strong>Plot:</strong> {movie.Plot}</p>

            <div className="extra">
              <p><strong>Runtime:</strong> {movie.Runtime}</p>
              <p><strong>Rated:</strong> {movie.Rated}</p>
              <p><strong>Awards:</strong> {movie.Awards}</p>
              <p><strong>Box Office:</strong> {movie.BoxOffice}</p>
              <p><strong>IMDB Rating:</strong> ⭐ {movie.imdbRating}</p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
