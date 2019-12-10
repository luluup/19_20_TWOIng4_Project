import React, { Component } from 'react';
import { Progress } from 'reactstrap';
import './Humidite.css';
import axios from 'axios';


//Moyenne de tous les capteurs d'humidite
class Humidite extends Component {

  componentDidMount() {
    this.getData();
  }

  constructor(props) {
    super(props);

    this.state = {
      humi: []
    };
  }

  getData() {

    var humiValue = [];
    var cpt = 0;
    var moyenne = 0;
    var tot = 0;

    axios.get('http://localhost:3000/Measure')
      .then(function (response) {

        response.data.forEach(function (element) {

          if (element.type == "humidity") {
            humiValue.push(element.value);
            tot = + element.value + tot;
            cpt++;
            moyenne = tot / cpt
          }
        },
        );

      }).then(response => {
        this.setState({
          humiValue,
          tot,
          moyenne,
          cpt
        });
      })
      .catch(error => {
        console.log("Inside error");
        console.log(error);
      })
  }


  render() {
    return (
      <div className="humidite">
        Humidite moyenne
      <div className="text-center">{this.state.moyenne}</div>

        <Progress multi className="progress">
          <Progress bar color="info" value={this.state.moyenne} />
          <Progress bar color="white" value="" />
        </Progress>

      </div>
    );
  };

}

export default Humidite;