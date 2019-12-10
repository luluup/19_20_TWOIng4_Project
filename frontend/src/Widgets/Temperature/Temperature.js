import React, { Component } from 'react';
import './Temperature.css'
import axios from 'axios';

// Nombre de capteurs
class Temperature extends Component {

	componentDidMount() {
		this.getData();
	  }

	constructor(props) {
		super(props);
		this.state = {
			titre: "Nombre de capteurs"
		}
	}

	getData() {

		var cpt = 0;

		axios.get('http://localhost:3000/Sensor')
			.then(function (response) {

				response.data.forEach(function (element) {
					cpt++;
				},
				);
			}).then(response => {
				this.setState({
					cpt
				});
			})
			.catch(error => {
				console.log("Inside error");
				console.log(error);
			})
	}

	render() {
		return (
			<div className="temperature">
				<div className="titre">
					{this.state.titre}
					<p>{this.state.cpt}</p>
				</div>
			</div>
		);
	}
}
export default Temperature;



