import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import {getData} from "../service/index.js";

export const SinglePlanet = () => {
  const [singlePlanet, setSinglePlanet] = useState({}); //para un solo vehiculo
  const [loading, setLoading] = useState(true); //para mostrar el spinner de carga
  const params = useParams(); //nos traemos los params

  useEffect(() => {
    //console.log("los params", params) para ver lo que hay
    const fetchData = async () => { 
      try {
        setLoading(true); //para mostrar el spinner mientras se carga la info
        const info = await getData(params.category, params.id); 
        /*traemos la funcion get de index.js y le damos la categoria e id por los params
        los params son los que hemos utilizado como props en la card diciendole props.category y props.id
        */
        setSinglePlanet(info.result.properties); //seteamos al array de singleplanet
        setLoading(false); //para quitar el spinner de carga
      } catch (error) {
        console.log(error);
        setLoading(false); //para quitar el spinner de carga
      }
    };
    fetchData();
  }, [params.category, params.id]); //metemos aqui los params por si cambian, se vuelva a cargar la web
  
  /** Como en home, usamos los params para decirle que imagen queremos mediante el uid de la api de swapi
   * y nos traemos las propiedades del array singlePlanet para poderlas usar, p. ej {singlePlanet.name} es el 
   * nombre del planeta.
   */
  return (
    <>
    {loading ? (
      <div className="d-flex justify-content-center">
        <div className="spinner-grow text-light" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
    ) : 
   ( <>
      <div className="single">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={
                params.id === "1"
                  ? "https://oakthorne.net/wiki/images/Tatooine.jpg"
                  : `https://starwars-visualguide.com/assets/img/planets/${params.id}.jpg`
              }
              alt="Planet Image"
              style={params.id === "1" ? {width: "400px", height: "400px"} : {}}
              className="img-fluid rounded-start"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title"> {singlePlanet.name}</h1>
              <p className="card-text">
                {singlePlanet.name} is a planet with a {singlePlanet.climate}{" "}
                 climate. It has a diameter of {singlePlanet.diameter} kilometers
                and a {singlePlanet.gravity} gravity. The planet takes{" "}
                {singlePlanet.orbital_period} days to complete one orbit and has
                a rotation period of {singlePlanet.rotation_period} hours.{" "}
                {singlePlanet.name} surface is {singlePlanet.terrain} {" "}
                terrain with level {singlePlanet.surface_water}% {" "}water. The planet has
                a population of {singlePlanet.population} people.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link to="/">
        <button
          className="btn btn-outline-warning btn-lg"
          href="#"
          role="button"
        >
          Volver al Inicio
        </button>
      </Link>
    </>)
   } </>
  );
};
