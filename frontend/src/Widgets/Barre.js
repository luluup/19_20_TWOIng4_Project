import React, {Component} from 'react';
import {Bar, Line, Pie} from 'react-chartjs-2';
import './Style.css';

class Barre extends Component{

	constructor(props) {
		super(props);
		this.state = 
			{
			chartData: {
				labels:["Demain", "Apres-demain", "Apres apres demain"],
				datasets:[
					{
						label:"Temperature",

						data:[7,12,9],
						backgroundColor: [
							'rgba(220, 221, 225, 0.9)',
							'rgba(220, 221, 225, 0.6)',
							'rgba(220, 221, 225, 0.2)'
						],

					}
				]
			},
			options:{
				title:{
					display: true,
					text:"Température des prochains jours",
					fontSize: 30
				},

				legend:{
					display:true,
					position:'right'
				},

				scales: {
					yAxes: [{
						ticks: {
							beginAtZero:true
						}
					}]
				}
			}
		};
	}

	render()
	{

		return(
			<div className="barre">
			<p> Barre</p>
			<Bar
			data={this.state.chartData}
			options={this.state.options}
			/>
			</div>
		);

	}
}
export default Barre;


