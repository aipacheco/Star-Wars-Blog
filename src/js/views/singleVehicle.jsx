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

  console.log("el Vehículo", singleVehicle);

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
                The TIE/LN starfighter is a starfighter manufactured by Sienar
                Fleet Systems with a cargo capacity of 65. It is crewed by one
                person and can only accommodate consumables for 2 days. Its cost
                in credits is unknown. The starfighter has a length of 6.4
                meters and a maximum atmospheric speed of 1200. It is classified
                as a starfighter and has a Twin Ion Engine/Ln model. It is not
                designed to carry any passengers and has no recorded pilots. The
                TIE/LN starfighter has not appeared in any films yet.
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
