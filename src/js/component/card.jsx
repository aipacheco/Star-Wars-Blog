import React from "react";
import "../../styles/card.css";

const Card = (props) =>{
return (

<div className="cartas">
<div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src={props.image} alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.url}</p>
    <div className="btn btn-primary">Learn more</div>
  </div>
</div>
</div>

)

}

export default Card