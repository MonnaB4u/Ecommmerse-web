import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import fakeData from '../../Data/index';
import './Navbar.css'

const Navbar = () => {
  const [loggedInusers, setLoggedInUsers] = useContext(UserContext);
  const navigate = useNavigate()
  const handleNavigation = (() => {
    navigate('/')
  })

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <p onClick={() => handleNavigation()} className="mx-5 h3 text-primary">Electronic - <small className="text-danger">Market</small> </p>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-5" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mx-4">
              <a class="nav-link h5" href="/">Home</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link h5" href="/newProduct">New Collection</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link h5" href="/orderReview">Order Review</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link h5" href="/AddFavourite">Favourite</a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link h5" href="/admin">Admin</a>
            </li> */}

            <li class="nav-item mx-4 my-3 ">
              <a href="login" className="loginbtn bg-danger p-3 text-white mx-5">{loggedInusers.name} - {loggedInusers.name ? "Log Out" : "Log In"}</a>
            </li>

          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
