import React from 'react';
import { Progress } from 'reactstrap';
import './Humidite.css'

const Humidite = (props) => {
  return (
    <div className="humidite">
      Humidite
      <div className="text-center">75%</div>

          <Progress multi className="progress">
        <Progress bar color="blue" value="175"/>
        <Progress bar color="white" value="100"/>
        </Progress>
      
    </div>
  );
};

export default Humidite;