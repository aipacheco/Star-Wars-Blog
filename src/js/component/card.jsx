import React from "react";
import "../../styles/card.css";
import { Link } from "react-router-dom";

const Card = (props) =>{
return (

<div className="cartas">
<div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={props.image} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
  </div>
  <div className="card-footer">

  <Link to={`single/${props.category}/${props.id}`}> 
    <button type="button" className="btn btn-outline-secondary">Info</button>
    </Link>
  <div className="btn btn-outline-secondary"><i className="fa-regular fa-heart"></i></div>
  </div>
</div>
</div>

)

}

export default Card