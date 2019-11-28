import React from 'react';
import { Progress } from 'reactstrap';
import './Humidite.css'

const Humidite = (props) => {
  return (
    <div className="humidite">
        <p>Humidite</p>
      <div className="text-center">75%</div>
      <Progress value={75} />
    </div>
  );
};

export default Humidite;