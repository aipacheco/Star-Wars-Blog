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
    <>
      <div className="container container-fluid d-flex">
        {planetsList.map((planet) => (
          <Card key={planet.uid} name={planet.name}>
            {" "}
            <p>{planet.url}</p>{" "}
          </Card>
        ))}
      </div>
      <div className="container container-fluid d-flex">
        {peopleList.map((planet) => (
          <Card key={planet.uid} name={planet.name} />
        ))}
      </div>
      <div className="container container-fluid d-flex">
        {vehiclesList.map((planet) => (
          <Card key={planet.uid} name={planet.name} />
        ))}
      </div>
    </>
  );
};
