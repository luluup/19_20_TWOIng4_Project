import React, {Component} from 'react';
import './Temperature.css'

class Temperature extends Component {

	constructor(props) {
		super(props);
		this.state = {
			titre:"Temperature",
            icon: "https://i0.wp.com/www.nana-turopathe.com/wp-content/uploads/2015/07/soleil-e1435759702694.png?zoom=1.5&resize=647%2C437&ssl=1",
			temp: 30
		}
	}

	render() {
		return (
            <div className="temperature">
                <div className="titre">
                    {this.state.titre}
                    </div>
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



