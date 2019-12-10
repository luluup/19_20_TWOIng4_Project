import React, { Component } from 'react';
import './AirPollution.css';
import axios from 'axios';

// Nombre de users
class AirPollution extends Component {

	componentDidMount() {
		this.getData();
	}

	constructor(props) {
		super(props);
		this.state = {
			titre: "Nombre de Users",
		}
	}

	getData() {

		var cpt = 0;

		axios.get('http://localhost:3000/User')
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
			<div className="airpollution">
				{this.state.titre}
				<div className="num_pollution">
					{this.state.cpt}
				</div>
			</div>
		);
	}
}
export default AirPollution;
