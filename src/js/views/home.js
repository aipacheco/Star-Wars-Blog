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

 /* useEffect(() => {
    console.log("people", peopleList);
  }, [peopleList]);
  useEffect(() => {
    console.log("vehicles", vehiclesList);
  }, [vehiclesList]);
  useEffect(() => {
    console.log("planets", planetsList);
  }, [planetsList]);*/

  return (
    <>
      <div className="carrusel">
        {planetsList.map((planet) => (
          <Card key={planet.uid} name={planet.name} image="https://m.media-amazon.com/images/I/91QQcA418vL._AC_SL1500_.jpg">
          
            <p>{planet.url}</p>{" "}
          </Card>
        ))}
      </div>
      <div className="carrusel">
        {peopleList.map((planet) => (
          <Card key={planet.uid} name={planet.name} image="https://imgix.ranker.com/list_img_v2/995/380995/original/380995-u2"/>
        ))}
      </div>
      <div className="carrusel">
        {vehiclesList.map((planet) => (
          <Card key={planet.uid} name={planet.name} image="https://i.redd.it/8jq5dg94v3t81.jpg" />
        ))}
      </div>
    </>
  );
};
