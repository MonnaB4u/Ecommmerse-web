import React from 'react';
import './Navbar.css'
const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
     <img className="img-fluid img-logo" src="https://upload.wikimedia.org/wikipedia/commons/d/d6/Habib_Group_Logo.png" alt="" />
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse mx-5" id="navbarText">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active mx-4">
              <a class="nav-link h5" href="#">Home</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link h5" href="#">New Collection</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link h5" href="#">Order Review</a>
            </li>
            <li class="nav-item mx-4">
              <a class="nav-link h5" href="#">Pricing</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
