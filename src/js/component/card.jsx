import React, {useContext} from "react";
import "../../styles/card.css";
import {Link} from "react-router-dom";
import {Context} from "../store/appContext.js";

const Card = (props) => {
  const {store, actions} = useContext(Context);

  const singlePage =
    props.category == "people"
      ? "singlePeople"
      : props.category == "vehicles"
      ? "singleVehicle"
      : props.category == "planets"
      ? "singlePlanet"
      : null;

  const handleClick = () => {
    actions.addFav(props.name);
  };

  return (
    <div className="cartas">
      <div className="card" style={{width: "18rem"}}>
        <img
          className="card-img-top"
          src={props.image}
          alt="Card image cap"
        ></img>
        <div className="card-body">
          <h5 className="card-title">{props.name}</h5>
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
