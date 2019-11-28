import React, { PureComponent } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import './BarChart.css'

const data = [
    {
        date: '2000-01', minimal: 1000, maximal: 2400, amt: 2400,
    },
    {
        date: '2000-02', minimal: 2000, maximal: 3398, amt: 2210,
    },
    {
        date: '2000-03', minimal: 2000, maximal: 9800, amt: 2290,
    },
    {
        date: '2000-04', minimal: 2780, maximal: 3908, amt: 2000,
    },
    {
        date: '2000-05', minimal: 1890, maximal: 4800, amt: 2181,
    },
    {
        date: '2000-06', minimal: 2390, maximal: 3800, amt: 2500,
    },
    {
        date: '2000-07', minimal: 3490, maximal: 4300, amt: 2100,
    },
    {
        date: '2000-08', minimal: 900, maximal: 2400, amt: 2400,
    },
    {
        date: '2000-09', minimal: 300, maximal: 2398, amt: 2210,
    },
    {
        date: '2000-10', minimal: 2000, maximal: 9800, amt: 2290,
    },
    {
        date: '2000-11', minimal: 2780, maximal: 3908, amt: 2000,
    },
    {
        date: '2000-12', minimal: 1890, maximal: 4800, amt: 2181,
    },
];

const monthTickFormatter = (tick) => {
    const date = new Date(tick);

    return date.getMonth() + 1;
};

const renderQuarterTick = (tickProps) => {
    const { x, y, payload } = tickProps;
    const { value, offset } = payload;
    const date = new Date(value);
    const month = date.getMonth();
    const quarterNo = Math.floor(month / 3) + 1;
    const isMidMonth = month % 3 === 1;

    if (month % 3 === 1) {
        return <text x={x + offset} y={y - 4} textAnchor="middle">{`Pays${quarterNo}`}</text>;
    }

    const isLast = month === 11;

    if (month % 3 === 0 || isLast) {
        const pathX = Math.floor(isLast ? x + offset * 2 : x) + 0.5;

        return <path d={`M${pathX},${y - 4}v${-35}`} stroke="red" />;
    }
    return null;
};
export default class BarChartW extends PureComponent {
    static jsfiddleUrl = 'https://jsfiddle.net/alidingling/xqjtetw0/';


    render() {
        return (
            <div className="bar">
                <p className = "titre">Températures minimales/maximales des 3 derniers mois par pays</p>
                <BarChart
                    width={1000}
                    height={300}
                    data={data}
                    margin={{
                        top: 5, right: 30, left: 20, bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" tickFormatter={monthTickFormatter} />
                    <XAxis dataKey="date" axisLine={false} tickLine={false} interval={0} tick={renderQuarterTick} height={1} scale="band" xAxisId="quarter" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="minimal" fill="#06ed44" />
                    <Bar dataKey="maximal" fill="#ff0551" />
                </BarChart>
            </div>
        );
    }
}