import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import "../../styles/index.css";

export const Navbar = () => {
	return (
		
		<nav className="navbar sticky-top" id="navbar">
			<img src={logo} alt="Logo" className="logo"/>

			<div className="mx-5">
        <div class="dropdown">
          <button
            class="btn btn-outline-secondary dropdown-toggle"
            type="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
           Favoritos 
          </button>
          <ul class="dropdown-menu dropdown-menu-end">
            <li>
              (pruebas)
            </li>
            
          </ul>
        </div>
      </div>
		
		</nav>
		
	);
};
