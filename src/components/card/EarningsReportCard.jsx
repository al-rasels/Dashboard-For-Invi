import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Tooltip as ReTooltip, } from 'recharts';

export default function EarningsReportCard() {
  const [tooltip, setTooltip] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [year, setYear] = useState("2025");

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
  // #region Sample data

  const miniGraphData = [
    { number: 40 },
    { number: 30 },
    { number: 35 },
    { number: 25 },
    { number: 20 },
    { number: 15 },
  ];

  // set animation on mount
  useEffect(() => {
    setAnimate(true);
  }, []);



  // JSX Return
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md flex w-full relative">

      {/* ==== Tooltip (Bars Hover) ==== */}
      {tooltip && (
        <div
          className="absolute bg-gray-800 text-white px-3 py-1 text-xs rounded-md pointer-events-none"
          style={{
            top: tooltip.y - 30,
            left: tooltip.x,
            transform: "translateX(-50%)",
          }}
        >
          {tooltip.text}
        </div>
      )}

      {/* ==== LEFT CHART AREA ==== */}
      <div className="w-2/3 pr-8 border-r-2 border-gray-200 relative">

        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-800">Sells VS Collection</h2>

          <div className="flex gap-6">
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full bg-emerald-500`}></span>
              <span className="text-gray-600 text-sm">Sells</span>
            </div>
            <div className="flex items-center gap-2">
              <span className={`w-3 h-3 rounded-full bg-purple-600`}></span>
              <span className="text-gray-600 text-sm">Collection</span>
            </div>
          </div>
        </div>

        {/* ==== Custom Bar Chart ==== */}
        <div className="mx-auto flex justify-center">
          <BarChart
            style={{ width: '80%', maxWidth: '100%', maxHeight: '60vh', aspectRatio: 1.9 }}
            responsive
            data={chartData}
            margin={{
              top: 5,
              right: 0,
              left: 0,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="label" />
            <YAxis width="auto" />
            <Tooltip />
            <Legend />
            <Bar dataKey="earn" fill="#8884d8" activeBar={{ fill: 'pink', stroke: 'blue' }} radius={[10, 10, 0, 0]} />
            <Bar dataKey="exp" fill="#82ca9d" activeBar={{ fill: 'gold', stroke: 'purple' }} radius={[10, 10, 0, 0]} />

          </BarChart>
        </div>
      </div>

      {/* ==== RIGHT PANEL ==== */}
      <div className="w-1/3 pl-8 flex flex-col">

        {/* Year Dropdown */}
        <div className="flex justify-end">
          <select
            value={year}
            onChange={(e) => setYear(e.target.value)}
            className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-md text-sm font-medium"
          >
            <option>2023</option>
            <option>2024</option>
            <option>2025</option>
          </select>
        </div>

        {/* Amount */}
        <div className="mt-8">
          <h1 className="text-4xl font-semibold text-gray-800">25,825 (৳)</h1>
          <p className="text-gray-500 mt-1">Budget: 56,800</p>
        </div>

        {/* ==== Mini Graph (NO ZOOM) ==== */}
        <div className="mt-10 flex justify-center">
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
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="exp" stroke="#8884d8" fill="#8884d8" />
            </LineChart>
            <ResponsiveContainer width="90%" height="100%">
              <LineChart
                style={{ width: '100%', maxWidth: '300px', maxHeight: '200px', aspectRatio: 1.618 }}
                responsive
                data={chartData}
              >
                <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Button */}
        <button className="mt-10 bg-indigo-500 hover:bg-indigo-600 text-white py-2 rounded-lg font-medium shadow">
          Increase Button
        </button>
      </div>
    </div>
  );
}


