import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire/Formulaire';
import Heure from './Widgets/Heure/Heure';
import UserProfil from './Widgets/UserProfil/UserProfil';


import { BrowserRouter as Router, Route, Link } from "react-router-dom";



class Accueil extends Component {
	render() {
		return (
			<div className="Accueil">
			<div className="Heure">
			<Heure/>
			</div>
			<div>
			<UserProfil/>
			</div>
			</div>	
		);
	}
}


export default Accueil;