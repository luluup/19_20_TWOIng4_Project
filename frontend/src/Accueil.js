import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire/Formulaire';
import Heure from './Widgets/Heure/Heure';
import UserProfil from './Widgets/UserProfil/UserProfil';
import LineChart from './Widgets/LineChart/LineChart'
import BarChart from './Widgets/BarChart/BarChart'
import './Accueil.css'

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Accueil extends Component {
	render() {
		return (
			<div className="Accueil">
				<Row>
					<Col><div>
						<UserProfil />
					</div>
					</Col>
					<Col>
						<Row><Col><div>
								<LineChart />
							</div></Col>
							<Col><div className="Heure">
								<Heure />
							</div><div>
							<BarChart />
						</div> </Col>	
						</Row>
					</Col>
				</Row>
			</div>
		);
	}
}


export default Accueil;