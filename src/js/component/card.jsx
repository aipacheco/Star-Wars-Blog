import React from "react";
import "../../styles/card.css";

const Card = (props) =>{
return (

<div className="cartas">
<div className="card" style={{ width: '18rem' }}>
  <img className="card-img-top" src="..." alt="Card image cap"></img>
  <div className="card-body">
    <h5 className="card-title">{props.name}</h5>
    <p className="card-text">{props.url}</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
</div>

)

}

export default Card