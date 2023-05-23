import React from "react";
import './Navbar-styles.css';
import Logo from './images/logo.png'
export const Navbar = () => {
  return (
    <div>
      <nav class="navbar navbar-expand-lg nav-backround"> 
        <div class="container-fluid">
          <a class="navbar-brand leftElements brands zoom underline-on-hover fonts" href="#">
            <img src={Logo} class= "logo "/>Caver  
          </a>
    </div>
    <div class="righElements">
          <button 
            class="navbar-toggler rightELements"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav rightElements ">
              <li class="nav-item">
                <a class="nav-link active, zoom underline-on-hover button fonts" aria-current="page" href="#">
                  Nuestras Cervezas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link zoom underline-on-hover button fonts" href="#">
                  Nuestro Menu
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link zoom underline-on-hover button fonts" href="#">
                  Mesas
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link zoom underline-on-hover button fonts" href="#">
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};