import React, {Component} from 'react';
import './Style.css';


class Calendrier extends Component{


	constructor(props) {
		super(props);
		
		var newDate = new Date()
		this.state = 
			{
			
			date : newDate.getDate(),
			month : newDate.getMonth(),
			year : newDate.getFullYear()

		};
	}


	render()
	{

		return(
			<div className="date">
			<p>Date</p>
			<p>{this.state.date}/{this.state.month}/{this.state.year}</p>
			</div>
		);




	}
}
export default Calendrier;


