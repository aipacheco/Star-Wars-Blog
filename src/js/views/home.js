import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import Carrusel from "../component/carrusel.jsx";
import {getData} from "../service/index.js";
import {useEffect, useState} from "react";

export const Home = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [vehiclesList, setVehiclesList] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);

  useEffect(async () => {
    const people = await getData("people", "");
    setPeopleList(people.results);

    const vehicles = await getData("vehicles", "");
    setVehiclesList(vehicles.results);

    const planets = await getData("planets", "");
    setPlanetsList(planets.results);
  }, []);

  useEffect(() => {
    console.log("people", peopleList);
  }, [peopleList]);
  useEffect(() => {
    console.log("vehicles", vehiclesList);
  }, [vehiclesList]);
  useEffect(() => {
    console.log("planets", planetsList);
  }, [planetsList]);

  return (
    <div className="container" id="home">
      {planetsList.map((planet) => (
        <Card
          key={planet.id}
          name={planet.name}
          description={planet.description}
          imageUrl={planet.imageUrl}
        />
      ))}
    </div>
  );
};
