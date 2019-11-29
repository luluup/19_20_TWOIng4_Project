import React, { Component } from 'react';
import './AirPollution.css'

class AirPollution extends Component {

	constructor(props) {
		super(props);
		this.state = {
			titre: "Air Pollution",
			icon: "https://www.airparif.asso.fr/_img/curseur_citeair_total.png",
			airpollution: 3.1
		}
	}

	render() {
		return (
			<div className="airpollution">
				<p>{this.state.titre}</p>
				<div className="icon_pollution">
					<img src={this.state.icon} alt="icon" />
				</div>

				<div className="num_pollution">
					<p>{this.state.airpollution}</p>
				</div>
			</div>
		);
	}
}
export default AirPollution;
