import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import "../../styles/index.css";

export const Navbar = () => {
	return (
	
		<nav className="navbar navbar-light mb-3">
			<img src={logo} alt="Logo" className="logo"/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">favoritos</span>
			</Link>
	
		</nav>
	);
};
