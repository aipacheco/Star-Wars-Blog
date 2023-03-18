import React, { useEffect, useState } from "react";
import "../../styles/single.css";
import { Link, useParams } from "react-router-dom";
import { getData } from "../service/index.js";



export const Single = () => {

	const [single, setSingle] = useState({})

    const params = useParams()

    useEffect(async () => {
        //setloading//
        const info = await getData(params.category, params.id);
        console.log(info)
        setSingle(info.result)
    }, [])


	return (
		<>
		<div className="single">				
		<div className="row g-0">
					<div className="col-md-4">
					<img src={`https://starwars-visualguide.com/assets/img/character/${params.id}.jpg`} className="img-fluid rounded-start" alt="..." />
					</div>
					<div className="col-md-8">
						<div className="card-body">
							<h5 className="card-title"> {single.description}</h5>
							<p className="card-text"> "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
							 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
							 laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
							  esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
							   qui officia deserunt mollit anim id est laborum."
							</p>
						</div>
					</div>
				</div>
		
	
		<Link to="/">
				<button className="btn btn-dark btn-lg" href="#" role="button">
					Volver al Inicio
				</button>
			</Link>
			</div>
	</>
	);
	}


