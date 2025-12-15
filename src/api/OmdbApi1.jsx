import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import "../assets/css/movieCard.css"

export const OmdbApi1 = () => {
    
    const [movies, setmovies] = useState([]);
    const [query, setquery] = useState("");
  
    const searchMovie=async () =>{
        const res = await axios.get(
            `http://www.omdbapi.com?apikey=817caa2a&s=${query}`
        );
        console.log(res.data.Search);
        setmovies(res.data.Search);
    };

    return (
    <div style={{textAlign:"center"}}>
        <h1>Omdb Api</h1>
        <input type='text' onChange={(event)=>{setquery(event.target.value);}}></input>
        
        <button onClick={()=>{searchMovie()}}>Search</button>
        {/* {
            <table className='table'>
            <thead>
                <tr>
                    <th>IMDBID</th>
                    <th>TITLE</th>
                    <th>YEAR</th>
                    <th>POSTER</th>
                </tr>
            </thead>
            <tbody>
                {
                    movies?.map((moive)=>{
                        return<tr>
                            <td>{moive.imdbID}</td>
                            <td>{moive.Title}</td>
                            <td>{moive.Year}</td>
                            <td>
                                <img src={moive.Poster} style={{height:"200px",width:"200px"}}></img>
                            </td>
                        </tr>
                    })
                }
            </tbody>
        </table> } */}

         <div className="container py-4">
        <div className="row g-3">
          {movies?.map((movie) => {
            return (
              <div  className="col-12 col-sm-6 col-md-4">
                <div className="card h-100">
                     <Link to={`/moviedetail/${movie.imdbID}`}>
                  <img
                    src={movie.Poster}
                    className="card-img-top card-image"
                    alt={movie.Title}
                  />
                  </Link>
                  <div className="card-body d-flex flex-column">
                    <h5 className="card-title">{movie.Title}</h5>

                    <div className="mt-auto d-flex justify-content-between card-id-year">
                      <span>
                        ID: <strong>{movie.imdbID}</strong>
                      </span>
                      <span>
                        Year: <strong>{movie.Year}</strong>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

    </div>
  )
}
