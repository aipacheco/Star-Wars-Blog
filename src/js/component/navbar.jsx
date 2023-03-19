import React, {useContext} from "react";
import {Link} from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/index.css";
import {Context} from "../store/appContext.js";

export const Navbar = () => {

  const {store, actions} = useContext(Context);

  const handleDelete = (item) => {
    actions.deleteFav(item);
  };

  return (
    <nav className="navbar sticky-top" id="navbar">
        <Link to="/"><img src={logo} alt="Logo" className="logo" /></Link> 

      <div className="mx-5">
        <div className="dropdown">
          <button
            className="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <ul className="dropdown-menu dropdown-menu-end">
            {store.fav.map((item, key) => (
              <li key={key}>
                {item}
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => handleDelete(item)}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

