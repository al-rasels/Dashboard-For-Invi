import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Tooltip as ReTooltip, } from 'recharts';
export default function ProfitCard() {
    const chartData = [
        { label: "Jan", earn: 280, exp: 110 },
        { label: "Feb", earn: 200, exp: 120 },
        { label: "Mar", earn: 180, exp: 100 },
        { label: "Apr", earn: 190, exp: 130 },
        { label: "May", earn: 240, exp: 90 },
        { label: "Jun", earn: 260, exp: 60 },
        { label: "Jul", earn: 230, exp: 70 },
        { label: "Aug", earn: 250, exp: 80 },
        { label: "Sep", earn: 150, exp: 130 },
    ];
    return (
        <div className="w-full bg-white rounded-2xl flex flex-col justify-center items-center shadow p-6">
            <h3 className="text-gray-600">Profit</h3>
            <p className="text-gray-500 text-sm mb-4">Last Month</p>
            <div className="w-full max-w-[700px] h-[180px]">
                <LineChart
                    style={{ width: '100%', maxWidth: '700px', maxHeight: '20vh', aspectRatio: 1.518 }}
                    responsive
                    data={chartData}
                    syncId="anyId"
                    margin={{
                        top: 10,
                        right: 30,
                        left: 0,
                        bottom: 0,
                    }}
                >
                    {/* <CartesianGrid strokeDasharray="3 3" /> */}
                    {/* <XAxis dataKey="label" /> */}
                    {/* <YAxis /> */}
                    <Tooltip />
                    <Line type="monotone" dataKey="exp" stroke="#8884d8" fill="#8884d8" />
                </LineChart>
            </div>
            <div className="mt-4 flex justify-between items-center">
                <p className="text-3xl font-bold">624k</p>
                <p className="text-green-500 font-semibold">+8.24%</p>
            </div>
        </div>
    );
}



/* 

import { Line, LineChart } from 'recharts';
import { RechartsDevtools } from '@recharts/devtools';

// #region Sample data
const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

// #endregion
export default function Example() {
  return (
    <LineChart
      style={{ width: '100%', maxWidth: '300px', maxHeight: '100px', aspectRatio: 1.618 }}
      responsive
      data={data}
    >
      <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
      <RechartsDevtools />
    </LineChart>
  );
}

*/