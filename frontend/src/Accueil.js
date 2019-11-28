import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Button } from 'reactstrap';
import Formulaire from './Formulaire/Formulaire';
import Heure from './Widgets/Heure/Heure';
import UserProfil from './Widgets/UserProfil/UserProfil';
import LineChart from './Widgets/LineChart/LineChart';
import BarChart from './Widgets/BarChart/BarChart';
import Temperature from './Widgets/Temperature/Temperature';
import AirPollution from './Widgets/AirPollution/AirPollution';
import Humidite from './Widgets/Humidite/Humidite'

import './Accueil.css';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";


class Accueil extends Component {
	render() {
		return (

			<div className="container-fluid">
				<div className="Accueil">

					<div className="row">

						<div className="col-4">
							<UserProfil />
						</div>

						<div className="col-8">
							<div className="row justify-content-center">

								<div className="col-5">
									<Temperature />
								</div>

								<div className="col-5">
									<AirPollution />
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-7">
									<Humidite />
								</div>

								<div className="col-3">
									<Heure />
								</div>
							</div>


							<div className="row justify-content-center" >
								<div className="col-10">
									<LineChart />
								</div>
							</div>
						</div>
					</div>

					<div>
						<BarChart />
					</div>

				</div>
			</div>
		);
	}
}


export default Accueil;