import React, { Component } from 'react';
import './LineChart.css'
import { Doughnut } from 'react-chartjs-2';
import axios from 'axios';


class LineChart extends Component {

    componentDidMount() {
        this.getData();
    }
    constructor(props) {
        super(props);
        this.state = {
            doughnutData: {
                labels: [],
                datasets: [{
                    data: [],
                    backgroundColor: [
                        '#7A6B96',
                        '#BA6AA7',
                        '#B35A76']

                }
                ]
            },

            doughnutOptions:
            {

                title: {
                    display: true,
                    text: 'Nombre de capteur humidité, air pollution et temperature',
                    fontSize: 20
                },
                legend: {
                    display: true,
                    position: 'right'
                }

            }

        }
    }


    getData() {

        var data = [];
        var labels = [];
        var airPollution = [];
        var humidity = [];
        var temperature = [];
        var compt1 = 0;
        var compt2 = 0;
        var compt3 = 0;



        axios.get('http://localhost:3000/measure')
            .then(function (response) {

                response.data.forEach(function (element) {

                    if (element.type === "humidity") {
                        compt1++;


                    }
                    else if (element.type === "temperature") {
                        compt2++;


                    }
                    else if (element.type === "airPollution") {
                        compt3++;

                    }

                })
                data.push(compt1);
                data.push(compt2);
                data.push(compt3);

                labels.push("Humidity");
                labels.push("Temperature");
                labels.push("AirPollution");

            }).then(response => {
                this.setState({
                    doughnutData: {
                        labels,
                        datasets: [{
                            data
                        }]
                    }
                });
            })
            .catch(error => {
                console.log("Inside error");
                console.log(error);
            })
    }


    render() {
        return (
            <div classname="doughnut">

                <div className="line">        
                    <Doughnut data={this.state.doughnutData}
                        options={this.state.doughnutOptions} />
                </div>
            </div>
        )
    }
}

export default LineChart;