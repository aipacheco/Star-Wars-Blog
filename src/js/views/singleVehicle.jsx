import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import {getData} from "../service/index.js";

export const SingleVehicle = () => {
  const [singleVehicle, setSingleVehicle] = useState({}); //para meter un solo vehiculo
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
        setSingleVehicle(info.result.properties); //seteamos al array de singlevehicle
        setLoading(false); //para quitar el spinner de carga
      } catch (error) {
        console.log(error);
        setLoading(false); //para quitar el spinner de carga
      }
    };
    fetchData();
  }, [params.category, params.id]); //metemos aqui los params por si cambian, se vuelva a cargar la web
  
  /** Como en home, usamos los params para decirle que imagen queremos mediante el uid de la api de swapi
   * y nos traemos las propiedades del array singlevehicle para poderlas usar, p. ej {singleVehicle.name} es el 
   * nombre del vehiculo.
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
    </>)
   } </>
  );
};
