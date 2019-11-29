import React, { Component } from 'react';
import { Bar } from 'react-chartjs-2';
import './BarChart.css'


class BarChart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dataBar: {
                labels: ['Pays 1', 'Pays 2', 'Pays3', 'Pays4'],
                datasets: [
                    {
                        label: 'Temperature',
                        data: [12, 20, 3, 18],
                        backgroundColor: '#f2052d ',
                        borderWidth: 1
                    },
                    {
                        label: 'Humidité',
                        data: [20,10,40,60],
                        backgroundColor: '#05f2bd',
                        borderWidth: 1
                    },
                    {
                        label: 'Qaulité de l air',
                        data: [14, 23, 67,2],
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

    render() {
        return (
            <div className="barchart">
                <div className="titre">Informations de nos capteurs dans le monde</div>
                <div className="graph">
                    <Bar width={900} height={300}data={this.state.dataBar} options={this.state.barChartOptions} />
                </div>
            </div>
        );
    }
}

export default BarChart;