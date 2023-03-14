import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import Carrusel from "../component/carrusel.jsx"

export const Home = () => (
	<div className="text-center mt-5" id="home">
		<Carrusel/>
		<Card />
	</div>
);
