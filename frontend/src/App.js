import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './App.css';
import Heure from './Widgets/Heure';
import Barre from './Widgets/Barre';
import Drapeau from './Widgets/Drapeau';
import Calendrier from './Widgets/Calendrier';
import Navbar from './Navbar';
import Radial from './Widgets/Radial';
import Percent from './Widgets/Percent';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire';

class App extends Component {
	render() {
		return (

			<div className="page">
				<header>

					<div className="navbar">
						<Navbar />
					</div>

					<div className="formulaire">
						<Formulaire />
					</div>

				</header>

				<div className="widgets">
					<Container>
						<Row>
							<Col> <div className="date">
								<Calendrier />
							</div></Col>

							<Col><div className="heure">
								<Heure />
							</div></Col>
						</Row>
						<div className="barre">
							<Barre />
						</div>

						<div className="drapeau">
							<Drapeau />
						</div>

						<Row>
							<Col><div className="radial">
							<Radial />
						</div> </Col>
							<Col><div className="percent">
							<Percent />
						</div> </Col>
						</Row>
					</Container>
				</div>
			</div>
		);
	}
}


export default App;
