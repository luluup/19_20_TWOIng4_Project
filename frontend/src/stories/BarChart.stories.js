import React from "react";
import { storiesOf } from "@storybook/react";
import BarChart from '../Widgets/BarChart/BarChart'

export const barChart = {
    date: '2000-01', minimal: 1000, maximal: 2400, amt: 2400,

    date: '2000-02', minimal: 2000, maximal: 3398, amt: 2210,

    date: '2000-03', minimal: 2000, maximal: 9800, amt: 2290,

    date: '2000-04', minimal: 2780, maximal: 3908, amt: 2000,

    date: '2000-05', minimal: 1890, maximal: 4800, amt: 2181,

    date: '2000-06', minimal: 2390, maximal: 3800, amt: 2500,

    date: '2000-07', minimal: 3490, maximal: 4300, amt: 2100,

    date: '2000-08', minimal: 900, maximal: 2400, amt: 2400,

    date: '2000-09', minimal: 300, maximal: 2398, amt: 2210,

    date: '2000-10', minimal: 2000, maximal: 9800, amt: 2290,

    date: '2000-11', minimal: 2780, maximal: 3908, amt: 2000,

    date: '2000-12', minimal: 1890, maximal: 4800, amt: 2181,
};

storiesOf('BarChart', module)

    .add('default', () => <BarChart {...barChart} />

    );