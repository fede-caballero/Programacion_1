import React, {Component} from 'react';
import { Navbar } from './components/Navbar';
import { Carrousel } from './components/Carrousel';
import { Imagenes } from './components/Imagenes';
import "./App.css"
export const App = ()=> {
    return (
      <div class="background"> 
        <Navbar />
        <hr></hr>
       <Carrousel />
       <hr></hr>
       <div>
       <Imagenes />
       </div>
      </div>   )
}
export default App