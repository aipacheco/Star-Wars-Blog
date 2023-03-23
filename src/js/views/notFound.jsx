import React from "react";
import {Link} from "react-router-dom";
import "../../styles/notfound.css";

export const Notfound = () => {
  return (
   <>
    <div className="notfound">
      THIS IS NOT THE PAGE YOU ARE LOOKING FOR...
      </div>
      
      <Link to="/">
            <button className="btn btn-outline-warning btn-lg" role="button">
              Volver al Inicio
            </button>
          </Link>
   </>
    
  );
};
