import React from "react";
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';
import "../../styles/index.css";

export const Navbar = () => {
	return (
		<div className="container container-fluid d-flex">
		<nav className="navbar" id="navbar">
			<img src={logo} alt="Logo" className="logo"/>
			<Link to="/">
				<span className="navbar-brand mb-0 h1">favoritos</span>
			</Link>
		</nav>
		</div>
	);
};
