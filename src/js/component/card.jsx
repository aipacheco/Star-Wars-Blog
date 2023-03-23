import React, {useContext} from "react";
import "../../styles/card.css";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext.js";

const Card = (props) => {
  const {store, actions} = useContext(Context); //contexto global

  const singlePage = //se crea la constante para poderla usar en el link hacia la vista detallada
    props.category == "people" //si es para people
      ? "singlePeople" //tiene que poner el string de singlePeople
      : props.category == "vehicles" //si son vehiculos
      ? "singleVehicle" //tiene que poner el string de singleVehicle
      : props.category == "planets" //si son planetas
      ? "singlePlanet" //tiene que poner el string de singlePlanets
      : null;

  const handleClick = () => { //funcion intermedia para llamar a la funcion de flux 
    actions.addFav(props.name); //funcion de flux para añadir favoritos
  };
/** El <Link de abajo redirige dependiendo del condicional que hemos creado arriba pasandole los props
 * dependiendo del ternario le dará una categoría y el id sobre el que pulsamos> */
  return (
    <div className="cartas">
      <div className="card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h6 className="card-title">{props.name}</h6>
        </div>
        <div className="card-footer">
          <Link to={`${singlePage}/${props.category}/${props.id}`}>
            <button type="button" className="btn btn-outline-warning">
              Info
            </button>
          </Link>
          <div className="btn btn-outline-warning" onClick={handleClick}>
            <i className="fa-regular fa-heart"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
