import React, {useContext} from "react";
import {Link} from "react-router-dom";
import logo from "../../img/logo.png";
import "../../styles/index.css";
import {Context} from "../store/appContext.js";

export const Navbar = () => {
  const {store, actions} = useContext(Context); //contexto global

  const handleDelete = (item) => { //funcion intermedia para el borrado del icono de la X de favoritos
    actions.deleteFav(item); //se llama a la funcion de flux para borrar el elemento (ver flux)
  };

  return (
    <nav className="navbar sticky-top" id="navbar">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <h3 className="my-3" id="titulo-navbar">
        STAR WARS DATABASE
      </h3>

      <div className="mx-5">
        <div className="dropdown">
          <button
            className="btn btn-outline-warning dropdown-toggle"
            id="navdrop"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
            <span className="badge badge-warning">{store.fav.length //para que el número sea dinamico cogemos el lenght del array fav de flux
            }</span>
          </button>

          {store.fav.length === 0 ? (
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <p>No hay elementos favoritos aún</p>
              </li>
            </ul>
          ) : (
            <ul className="dropdown-menu dropdown-menu-end">
              {store.fav.map((item, key) => ( //map para pintar los favoritos en el dropdown y añadir un icono de x 
                <li key={key}>
                  {item}
                  <i
                    className="fa-solid fa-xmark"
                    onClick={() => handleDelete(item) //llamamos a la funcion intermedia en la x para borrar los favoritos
                    }
                  ></i>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </nav>
  );
};
