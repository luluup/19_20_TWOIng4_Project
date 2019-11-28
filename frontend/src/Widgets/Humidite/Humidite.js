import React, {Component} from 'react';
import './Humidite.css'

class Humidite extends Component {

	constructor(props) {
		super(props);
		this.state = {
			titre : "Humidité",
			icon: "https://cdn.icon-icons.com/icons2/567/PNG/512/drop_icon-icons.com_54400.png",
			humidite: 3.1
		}
	}

	render() {
		return (
			<div className="humidite">
			<p>{this.state.titre}</p>
			<div className="icon_humidite">
			<img src={this.state.icon} alt="icon"/>
			</div>

			<div className="num_humidite">
			<p>{this.state.humidite}</p>
			</div>
			</div>
		);
	}
}
export default Humidite;
