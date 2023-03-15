import React from "react";
import Card from "./card.jsx";

const Carrusel = (card) =>{

return (
    <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <div className="cards-wrapper">
{card}
    </div>
    </div>
  </div>
</div>
)}

export default Carrusel