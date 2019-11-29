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
                <div className="row">

					<div className="row">

						<div className="col-md-4 col-xs-12">
							<UserProfil />
						</div>

						<div className="col-md-8 col-xs-12">
							<div className="row justify-content-center">

								<div className="col-md-5 col-xs-3">
									<Temperature />
								</div>

                                <div className="col-md-5 col-xs-3">
									<AirPollution />
								</div>
							</div>

							<div className="row justify-content-center">
								<div className="col-md-7 col-xs-12">
									<Humidite />
								</div>

								<div className="col-md-3">
									<Heure />
								</div>
							</div>


							<div className="row justify-content-center" >
								<div className="col-sm-10 col-xs-12">
									<LineChart />
								</div>
							</div>
						</div>
                    </div>
                 

                    <div className="row justify-content-center" >
                        <div className="col-xs-12">
                            <BarChart />
                        </div>
                    </div>

               </div>
          </div>
		);
	}
}


export default Accueil;