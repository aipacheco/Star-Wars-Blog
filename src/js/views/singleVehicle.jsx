import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import {getData} from "../service/index.js";

export const SingleVehicle = () => {
  const [singleVehicle, setSingleVehicle] = useState({});

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const info = await getData(params.category, params.id);
      setSingleVehicle(info.result.properties);
    }
    fetchData();
  }, [params.category, params.id]);



  return (
    <>
      <div className="single">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
              className="img-fluid rounded-start"
              alt="..."
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h1 className="card-title"> {singleVehicle.name}</h1>
              <p className="card-text">
                The {singleVehicle.name} is a {singleVehicle.vehicle_class}{" "}
                {singleVehicle.model} manufactured by{" "}
                {singleVehicle.manufacturer} with a cargo capacity of{" "}
                {singleVehicle.cargo_capacity} kg. It is crewed by{" "}
                {singleVehicle.crew}{" "}
                person and can accommodate consumables for{" "}
                {singleVehicle.consumables}. Its cost in credits is{" "}
                {singleVehicle.cost_in_credits}. The{" "}
               vehicle has a length of{" "}
                {singleVehicle.length} meters and a maximum atmospheric speed of{" "}
                {singleVehicle.max_atmosphering_speed} km/h. It is designed to
                carry {singleVehicle.passengers} passengers.
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
    </>
  );
};
