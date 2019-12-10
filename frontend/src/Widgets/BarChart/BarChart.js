import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css'
import axios from 'axios';
import randomColor from 'randomcolor';


class BarChart extends Component {

    componentDidMount() {
        this.getData();
    }

    constructor(props) {
        super(props);
        
        this.state = {
            dataBar: {
                labels: [],
                datasets: [
                    {
                        label: [],
                        data: [],
                        backgroundColor: '#f2052d ',
                        borderWidth: 1
                    },
                    {
                        label: [],
                        data: [],
                        backgroundColor: '#05f2bd',
                        borderWidth: 1
                    },
                    {
                        label: [],
                        data: [],
                        backgroundColor: '#f205f0',
                        borderWidth: 1
                    }
                ]
            },

            barChartOptions: {
                responsive: true,
                scales: {
                    xAxes: [{
                        barPercentage: 1,
                        gridLines:
                        {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        }
                    }],
                    yAxes: [{
                        gridLines: {
                            display: true,
                            color: 'rgba(0, 0, 0, 0.1)'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }]
                }
            }
        };
    }

    getData() {

        var labels = [];
        var data = [];
        var label = [];
        var backgroundColor = [];

        axios.get('http://localhost:3000/user')
        .then(function (response) {

            response.data.forEach(function(element) {
    
                labels.push(element.location);
    
                data.push(element.personsInHouse);

                label.push(element.houseSize);
                var color= randomColor();
                backgroundColor.push(color);

    
        });

    }).then(response => {
                this.setState({dataBar: {

                    labels,
        
                    datasets: [{
                        data, 
                        label,
                        backgroundColor
        
                    }]
        
                }});
            })
            .catch(error => {
                console.log("Inside error");
                console.log(error);
            })
    }

    render() {
        return (
            <div className="barchart">
                <div className="titre">Informations de nos capteurs dans le monde</div>
                <div className="graph">
                    <Bar width={900} height={300} data={this.state.dataBar} options={this.state.barChartOptions} />
                </div>
            </div>
        );
    }
}

export default BarChart;