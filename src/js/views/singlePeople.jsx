import React, {useEffect, useState} from "react";
import "../../styles/single.css";
import {Link, useParams} from "react-router-dom";
import {getData} from "../service/index.js";

export const SinglePeople = () => {
  const [singlePeople, setSinglePeople] = useState({});

  const params = useParams();

  useEffect(() => {
    async function fetchData() {
      const info = await getData(params.category, params.id);
      setSinglePeople(info.result.properties);
    }
    fetchData();
  }, [params.category, params.id]);



  return (
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
                {singlePeople.name} is a {singlePeople.gender} character from
                the Star Wars saga. He was born in the year{" "}
                {singlePeople.birth_year}. He has {singlePeople.eye_color} eyes,{" "}
                {singlePeople.hair_color} hair, and {singlePeople.skin_color}{" "}
                skin. His height is {singlePeople.height} cm and his weight is{" "}
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
  );
};
