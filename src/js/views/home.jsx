import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import {getData} from "../service/index.js";
import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export const Home = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [vehiclesList, setVehiclesList] = useState([]);
  const [planetsList, setPlanetsList] = useState([]);
  
  const navigate = useNavigate();

  useEffect(async () => {
    const people = await getData("people", "");
    setPeopleList(people.results);
  


    const vehicles = await getData("vehicles", "");
    setVehiclesList(vehicles.results);

    const planets = await getData("planets", "");
    setPlanetsList(planets.results);
  }, []);
 

  return (
    <>
      <div className="carrusel">
        {planetsList.map((planet, key) => (
       
          <Card
            key={key}
            category={"planet"}
            name={planet.name}
            id={planet.uid}
            image="https://m.media-amazon.com/images/I/91QQcA418vL._AC_SL1500_.jpg"
          ></Card>
        ))}
      </div>
      <div className="carrusel">
        {peopleList.map((people, key) => (
          <Card
            key={key}
            name={people.name}
            category={"people"}
            image="https://imgix.ranker.com/list_img_v2/995/380995/original/380995-u2"
          />
        ))}
      </div>
      <div className="carrusel">
        {vehiclesList.map((vehicle, key) => (
          <Card
            key={key}
            name={vehicle.name}
            category={"vehicle"}
            image="https://i.redd.it/8jq5dg94v3t81.jpg"
          />
        ))}
      </div>
    </>
  );
 
};
