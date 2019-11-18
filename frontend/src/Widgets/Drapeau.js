import React, {Component} from 'react';
import './Style.css';

class Drapeau extends Component{

	constructor(props) {
		super(props);
		this.state = 
			{

			icon: "https://www.macapflag.com/1032434-home_default_clothing/flamme-de-baignade-reglementaire-rouge.jpg",
			message: "ATTENTION baignade interdite ! "			
		};
	}


	render()
	{

		return(
			<div className="drapeau">

			<p>{this.state.message}</p>
			<div className="imageDrap">
			<img src={this.state.icon} alt="imageDrapeau"/>
			</div>
			</div>
		);

	}
}
export default Drapeau;


