import React from "react";
import APA from "./images/APA.png"
import IPA from "./images/IPA.png"
import ROJA from "./images/Roja.png"
import RUBIA from "./images/Rubia.png"
import VINO from "./images/vino1.png"
import NEGRA from "./images/Negra.png"
import "./Carrousel-styles.css"
export const Carrousel = () => {
    return(
      <div id="carouselExample" class="carousel slide backroud">
  <div class="carousel-inner black-background ">
    <div class="carousel-item active ">
      <img class="carousel-image zoom" src={RUBIA} alt="hola"/>
    </div>
    <div class="carousel-item">
      <img class="carousel-image zoom" src={ROJA} alt="..."/>
    </div>
    <div class="carousel-item">
      <img class="carousel-image zoom" src={IPA} alt="..."/>
    </div>
    <div class="carousel-item">
      <img class="carousel-image zoom" src={VINO} alt="..."/>
    </div>
    <div class="carousel-item">
      <img class="carousel-image zoom" src={NEGRA} alt="..."/>
    </div>
    <div class="carousel-item">
      <img class="carousel-image zoom" src={APA} alt="..."/>
    </div> 
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>





    )
}