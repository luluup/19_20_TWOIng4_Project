import React, {Component} from 'react';
import './Navbar.css';


class Navbar extends Component{


	render()
	{

		return(
			<div className="navbar">
			<div className="navbar_titre">
			<h1>Météo des plages </h1>
			</div>
			<div className="espace" />
			<div className="navbar_liens">
			<ul>
			
			<li>
			<a href ="/"> Dashboard </a> 
			</li>
			
			<li>
			<a href ="/"> Formulaire </a> 
			</li>
			
			</ul>
			
			</div>
			</div>

		);


	}
}
export default Navbar;


