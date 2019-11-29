import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Accueil from './Accueil';
import Formulaire from './Formulaire/Formulaire'
import { Navbar, Nav, NavItem, NavLink, NavbarBrand } from 'reactstrap';




class App extends Component {
	render() {
		return (
			<div className>
				<Router>
					<Navbar color="light" light expand="md">
						<NavbarBrand>Dashboard</NavbarBrand>
						<Nav className="mr-auto" navbar>
							<NavItem>
								<NavLink><Link to="/Accueil">Accueil</Link></NavLink>

							</NavItem>

							<NavItem>
								<NavLink><Link to="/Formulaire/Formulaire">Formulaire</Link></NavLink>
							</NavItem>
						</Nav>
					</Navbar>
					<Switch>
						<Route exact path="/Accueil" component={Accueil} />
						<Route path="/Formulaire" component={Formulaire} />
					</Switch>
				</Router>
			</div>
		);
	}
}


export default App;
