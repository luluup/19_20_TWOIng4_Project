import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link,Switch } from "react-router-dom";
import Accueil from './Accueil';
import Formulaire from './Formulaire/Formulaire'
import { Navbar, Nav, NavItem, NavLink } from 'reactstrap';




class App extends Component {
	render() {
		return (
			<div>
			<Router>
			<Navbar color="light" light expand="md">
				<Nav className="mr-auto" navbar>
					<NavItem>
						<Link to="/Accueil">Accueil</Link>
					</NavItem>

					<NavItem>
						<Link to="/Formulaire/Formulaire">Formulaire</Link>
					</NavItem>
				</Nav>
			</Navbar>
				<Switch>
					<Route exact path="/Accueil" component={Accueil}/>
					<Route path="/Formulaire" component={Formulaire} />
				</Switch>
			</Router>
			</div>
		);
	}
}


export default App;
