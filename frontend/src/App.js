import React, { Component } from 'react';
import './App.css';
import Heure from './Widgets/Heure';
import Barre from './Widgets/Barre';
import Drapeau from './Widgets/Drapeau';
import Calendrier from './Widgets/Calendrier';
import Navbar from './Navbar';

class App extends Component {
	render() {
		return (


			<div className="page">
			<header>
			
			<div className="navbar">
			<Navbar />
			</div>
			
			</header>

			<div className="widgets">

			<div className="date">
			<Calendrier />
			</div>

			<div className="heure">
			<Heure />
			</div>

			<div className="barre">
			<Barre />
			</div>

			<div className="drapeau">
			<Drapeau />
			</div>

			</div>
			</div>
		);
	}
}


export default App;
