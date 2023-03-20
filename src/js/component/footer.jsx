import React, { Component } from "react";
//import sableder from '../../img/sableder.png';
import sableizq from '../../img/sableizq.png';


export const Footer = () => (
	<nav className="navbar fixed-bottom" id="footer">
		<p>
		<img src={sableizq} alt="sable" className="sable"/>Diseñado por Ana Pacheco
			<a href="http://www.4geeksacademy.com" target="_blank">4Geeks Academy</a>
		</p>
		</nav>
);

