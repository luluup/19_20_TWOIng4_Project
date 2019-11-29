import React, {Component} from 'react';
import './Heure.css'


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
                <div className="titre">Heure</div>

                <div className="horloge">{this.state.heure.toLocaleTimeString()}</div>
			</div>
		);




	}
}
export default Heure;


