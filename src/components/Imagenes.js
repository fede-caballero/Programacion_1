import React from "react";
import Imagen from "./images/tostados.webp"
import Imagen_2 from "./images/depositphotos_37524563-stock-photo-black-background-or-luxury-gray.jpg"
import "./Imagenes-styles.css"
import Imagen_1 from "./images/bifelomo.jpg"
export const Imagenes = () => {
    return(
        <div>
            <img src={Imagen} class="img_1 rounded float-start" alt="..."/>
            <img src={Imagen_1}class="img_1 rounded float-end" alt="..."/>
            <img src={Imagen_2}class="img_1 rounded float-end" alt="..."/>
        </div>
    )
}