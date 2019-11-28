import React, {Component} from 'react';
import './Temperature.css'

class Temperature extends Component {

	constructor(props) {
		super(props);
		this.state = {
			titre:"Temperature",
			icon: "https://www.icone-png.com/png/27/26653.png",
			temp: 30
		}
	}

	render() {
		return (
			<div className="temperature">
		<p>{this.state.titre}</p>
			<div className="icon_temperature">

			<img src={this.state.icon} alt="icon_temp"/>

			</div>

			<div className="degre">
			<p>{this.state.temp} °C</p>
			</div>
			</div>
		);
	}
}
export default Temperature;



