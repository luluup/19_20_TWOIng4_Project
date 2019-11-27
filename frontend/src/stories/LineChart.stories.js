import React from "react";
import { storiesOf } from "@storybook/react";
import LineChart from '../Widgets/LineChart/LineChart'

export const lineChart = {

        name: '1', humidity: 4000, airquality: 2400, amt: 2400,

        name: '2', humidity: 1800, airquality: 4398, amt: 2210,

        name: '3', humidity: 2800, airquality: 3398, amt: 2210,

        name: '4', humidity: 800, airquality: 2498, amt: 210,

        name: '5', humidity: 4800, airquality: 3398, amt: 2210,

};

storiesOf('LineChart', module)

        .add('default', () => <LineChart {...lineChart} />

        );