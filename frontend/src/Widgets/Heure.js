import React, {Component} from 'react';
import './Style.css';


class Heure extends Component{

	constructor(props) {
		super(props);
		this.state = 
			{
			heure: new Date()
		};
	}

	tick() {
		this.setState({heure: new Date()});
	}

	// exécutée après que la sortie du composant a été injectée dans le DOM 
	//Mettre en place un timer
	componentDidMount() {
		this.timer = setInterval(() => this.tick(),1000);

	}
	//Netoie le timer
	componentWillUnmount() {
		clearInterval(this.timer);
	}

	render()
	{

		return(
			<div className="heure">
			<p>Heure</p>
			<p>{this.state.heure.toLocaleTimeString()}</p>
			</div>
		);




	}
}
export default Heure;


