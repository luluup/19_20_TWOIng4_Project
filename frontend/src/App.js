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
			<div className="navbar1">
				<Router >
					<Row>
					<Navbar light expand="md">
						<Col className="dashboard" xs={{size:1, offset:0}}><NavbarBrand>Dashboard</NavbarBrand></Col>
						<Nav className="mr-auto" navbar>
							<Col xs={{size:1, offset:2}}><NavItem>
								<NavLink><Link to="/Accueil">Accueil</Link></NavLink>
							</NavItem></Col>

							<Col xs={{size:1, offset:3}}><NavItem>
								<NavLink><Link to="/Formulaire/Formulaire">Formulaire</Link></NavLink>
							</NavItem></Col>
						</Nav>
					</Navbar>
					<Switch>
						<Route exact path="/Accueil" component={Accueil} />
						<Route path="/Formulaire" component={Formulaire} />
					</Switch>
					</Row>
				</Router>
			</div>
		);
	}
}


export default App;
