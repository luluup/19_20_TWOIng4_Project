import React, { PureComponent } from 'react';
import './LineChart.css'

import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
  {
    name: '1', humidity: 4000, airquality: 2400, amt: 2400,
  },
  {
    name: '2', humidity: 1800, airquality: 4398, amt: 2210,
  },
  {
    name: '3', humidity: 2800, airquality: 3398, amt: 2210,
  },
  {
    name: '4', humidity: 800, airquality: 2498, amt: 210,
  },
  {
    name: '5', humidity: 4800, airquality: 3398, amt: 2210,
  }
];

export default class LineChartW extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';

  render() {
    return (
      <div className = "line">
            <p className="titre">Humidité</p>
            <div className="test">
            <LineChart
          width={500}
          height={200}
          data={data}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" interval="preserveEnd" />
          <YAxis interval="preserveEnd" />
          <Legend />
          <Line type="monotone" dataKey="humidity" stroke="#8884d8" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="airquality" stroke="#82ca9d" />
                </LineChart>
                </div>

      </div>
    );
  }
}
