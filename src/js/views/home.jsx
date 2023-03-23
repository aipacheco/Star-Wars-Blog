import React from "react";
import "../../styles/home.css";
import Card from "../component/card.jsx";
import {getData} from "../service/index.js";
import {useEffect, useState} from "react";

export const Home = () => {
  const [loading, setLoading] = useState(false) //estado para el spinner de carga
  const [peopleList, setPeopleList] = useState([]); //para meter las personas en el array
  const [vehiclesList, setVehiclesList] = useState([]); //para los vehiculos
  const [planetsList, setPlanetsList] = useState([]); // para los planetas

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); //para mostrar el spinner mientras carga los datos
        const people = await getData("people", ""); //se usa la funcion getdata de index.js pasandole los datos de people y el id vacio
        setPeopleList(people.results); //se setea al array de personas
  
        const vehicles = await getData("vehicles", ""); //se usa la funcion getdata de index.js pasando los datos de vehicles, id vacio
        setVehiclesList(vehicles.results); //se setea al array de vehiculos
  
        const planets = await getData("planets", ""); //se usa la funcion getdata de index.js pasando datos de planetas, id vacio
        setPlanetsList(planets.results); //se setea al array de planetas
  
        setLoading(false); //cuando acaba esto, se pone a false para que no se muestre el spinner
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchData(); //se llama a la funcion que se ha creado arriba 
  }, []);
  
/** el renderizado condicional, si está loading muestra el spinner y si no la web 
 * para poder usar la API de imágenes de la visualguide, le tenemos que decir si son characters, vehicles o planets
 * y añadir el uid (es el id proporcionado por la API de swapi a la que estamos haciendo GET en index.js )
 */
  return (
<>

{loading ? (
   <div className="d-flex justify-content-center">
   <div className="spinner-grow text-light" role="status">
  <span className="sr-only">Loading...</span>
</div>
 </div>
    ) : (
    <div className="container">
      <div className="carrusel">
        {peopleList.map((people, key) => (
          <Card
            key={key}
            name={people.name}
            category={"people"}
            id={people.uid}
            className="card-image"
            image={`https://starwars-visualguide.com/assets/img/characters/${people.uid}.jpg`}
          />
        ))}
      </div>
      <div className="carrusel">
        {planetsList.map((planet, key) => (
          <Card
            key={key}
            category={"planets"}
            name={planet.name}
            id={planet.uid}
            className="card-image"
            image={
              key === 0
                ? "https://oakthorne.net/wiki/images/Tatooine.jpg"
                : `https://starwars-visualguide.com/assets/img/planets/${planet.uid}.jpg`
            }
          ></Card>
        ))}
      </div>
      <div className="carrusel">
        {vehiclesList.map((vehicle, key) => (
          <Card
            key={key}
            name={vehicle.name}
            category={"vehicles"}
            id={vehicle.uid}
            className="card-image"
            image={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
          />
        ))}
      </div>
    </div>
  )}
  </>
)
};
