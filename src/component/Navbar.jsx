import React from "react";
import { Link } from "react-router-dom";

export const Navbar = (props) => {
  console.log(props)
  return (
    <div>
      {props.title}
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            {/* <li class="nav-item active">
              <Link class="nav-link" to="/netflixhome">
                NETFLIX Home 
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixshows">
                NETFLIX SHOWS
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/netflixmovies">
                NETFLIX MOVIES
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/users">
                Users
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/employee">
                Employees
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/students">
                Student
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/books">
                Books
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/tableimp">
                Table
              </Link>
            </li>
            <li class="nav-item">
              <Link className="nav-link" to="/item">
                Item
              </Link>
            </li> */}
              {/* <li class="nav-item">
              <Link class="nav-link" to="/formdemo1">
                formdemo1
              </Link>
            </li>
             <li class="nav-item">
              <Link class="nav-link" to="/formdemo2">
                formdemo2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo3">
                formdemo3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo4">
                formdemo4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo5">
                formdemo5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo6">
                formdemo6
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo7">
                formdemo7
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo8">
                formdemo8
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo9">
                formdemo9
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo10">
                formdemo10
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo11">
                formdemo11
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/formdemo12">
                formdemo12
              </Link>
            </li> */}
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo1">
                Api Demo 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo2">
                Api Demo 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo3">
                Api Demo 3
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/Omdbapi">
                OmbdApi
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/moviedetails">
                Movie Details
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo4">
                Api Demo 4
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo5">
                Api Demo 5
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo6">
                Api Demo 6
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/UpdateUser">
                Update User
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/loginuser">
                Login
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/apidemo7">
                  Api Demo 7
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/userefdemo1">
                  use ref demo 1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/userefdemo2">
                  use ref demo 2
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/UseMemo1">
                  UseMemoDemo1
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/findmemo">
                  Find Bomb
              </Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/student11">
                Student
              </Link>
            </li>
            
          </ul>
        </div>
      </nav>
    </div>
  );
};