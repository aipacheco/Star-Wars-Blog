import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import Carrusel from "../component/carrusel.jsx";
import {getData} from "../service";
import {useEffect, useState} from "react";

export const Home = () => {
	
useEffect (async() =>{
getData("people", "1")
},[])


  return (
    <div className="text-center mt-5" id="home">
      <Carrusel />
    </div>
  );
};
