import React from "react";
import  Img from "./images/Lomo_sand.jpg";
import "./Card-styles.css"
export const Card = () => {
    return(
      <div class="Card" style="width: 50px;">
      <img src={Img} class="Card-img-top" alt="..."/>
      <div class="Card-body">
        <p class="Card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
      </div>
    </div>
    )
}
