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
    <div className="container">
      <div className="carrusel">
        {planetsList.map((planet, key) => (
          <Card
            key={key}
            category={"planet"}
            name={planet.name}
            id={planet.uid}
            image={key === 0 ? "https://oakthorne.net/wiki/images/Tatooine.jpg" : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`
            }
          ></Card>
        ))}
      </div>
      <div className="carrusel">
        {peopleList.map((people, key) => (
          <Card
            key={key}
            name={people.name}
            category={"people"}
            id={people.uid}
            image={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
          />
        ))}
      </div>
      <div className="carrusel">
        {vehiclesList.map((vehicle, key) => (
          <Card
            key={key}
            name={vehicle.name}
            category={"vehicle"}
            id={vehicle.uid}
            image={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
          />
        ))}
      </div>
    </div>
  );
};
