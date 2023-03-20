import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import {getData} from "../service/index.js";

export const SinglePlanet = () => {
  const [singlePlanet, setSinglePlanet] = useState({});
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const info = await getData(params.category, params.id);
      setSinglePlanet(info.result.properties);
      setLoading(false);
    }
    fetchData();
  }, [params.category, params.id]);


  return (
    <>
    {loading ? (
      <div className="d-flex justify-content-center">
        <div class="spinner-grow text-light" role="status">
          <span class="sr-only">Loading...</span>
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
