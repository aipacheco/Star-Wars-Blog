import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import {getData} from "../service/index.js";

export const SinglePeople = () => { 
  const [singlePeople, setSinglePeople] = useState({}); //para mostrar una sola persona
  const [loading, setLoading] = useState(true); //para el spinner de carga
  const params = useParams(); //los params para cambiar el redireccionamiento

  useEffect(() => {
    //console.log("los params", params) para ver lo que hay
    const fetchData = async () => { 
      try {
        setLoading(true); //para mostrar el spinner mientras se carga la info
        const info = await getData(params.category, params.id); 
        /*traemos la funcion get de index.js y le damos la categoria e id por los params
        los params son los que hemos utilizado como props en la card diciendole props.category y props.id
        */
        setSinglePeople(info.result.properties); //seteamos al array de persona sola
        setLoading(false); //para quitar el spinner de carga
      } catch (error) {
        console.log(error);
        setLoading(false); //para quitar el spinner de carga
      }
    };
    fetchData();
  }, [params.category, params.id]); //metemos aqui los params por si cambian, se vuelva a cargar la web
  
  /** Como en home, usamos los params para decirle que imagen queremos mediante el uid de la api de swapi
   * y nos traemos las propiedades del array singlePeople para poderlas usar, p. ej {singlePeople.name} es el 
   * nombre del personaje.
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
        <>
          <div className="single">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
                  className="img-fluid rounded-start"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h1 className="card-title"> {singlePeople.name}</h1>
                  <p className="card-text">
                    {" "}
                    {singlePeople.name} is a {singlePeople.gender} character
                    from the Star Wars saga. He was born in the year{" "}
                    {singlePeople.birth_year}. He has {singlePeople.eye_color}{" "}
                    eyes, {singlePeople.hair_color} hair, and{" "}
                    {singlePeople.skin_color} skin. His height is{" "}
                    {singlePeople.height} cm and his weight is{" "}
                    {singlePeople.mass} kg.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Link to="/">
            <button className="btn btn-outline-warning btn-lg" role="button">
              Volver al Inicio
            </button>
          </Link>
        </>
      )}
    </>
  );
};
