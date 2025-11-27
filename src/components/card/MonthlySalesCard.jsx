import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiOutlineZoomIn,
} from "react-icons/ai";
import { FaHandPaper, FaHome } from "react-icons/fa";
import { HiOutlineMenu } from "react-icons/hi";

// Sample data matching the image
const salesData = [
  { date: "07 Nov", amount: 65000 },
  { date: "08 Nov", amount: 115000 },
  { date: "09 Nov", amount: 120000 },
  { date: "10 Nov", amount: 145000 },
  { date: "11 Nov", amount: 212828 },
  { date: "12 Nov", amount: 185000 },
  { date: "13 Nov", amount: 115000 },
  { date: "14 Nov", amount: 105000 },
  { date: "15 Nov", amount: 70000 },
  { date: "16 Nov", amount: 5000 },
  { date: "17 Nov", amount: 2000 },
  { date: "18 Nov", amount: 8000 },
  { date: "19 Nov", amount: 65000 },
  { date: "20 Nov", amount: 5000 },
];

// Custom tooltip component
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-gray-900 text-white px-3 py-2 rounded-lg shadow-lg border border-gray-700">
        <p className="text-sm font-medium">{label}</p>
        <p className="text-lg font-bold text-emerald-400">
          ${payload[0].value.toLocaleString()}
        </p>
      </div>
    );
  }
  return null;
};

// Custom dot component
const CustomDot = (props) => {
  const { cx, cy } = props;
  return (
    <circle
      cx={cx}
      cy={cy}
      r={5}
      fill="#f59e0b"
      stroke="#fff"
      strokeWidth={2}
      className="drop-shadow-md"
    />
  );
};

export default function MonthlySalesCard() {
  const [zoomLevel, setZoomLevel] = useState(1);

  const handleZoomIn = () => setZoomLevel((prev) => Math.min(prev + 0.2, 2));
  const handleZoomOut = () => setZoomLevel((prev) => Math.max(prev - 0.2, 0.5));
  const handleReset = () => setZoomLevel(1);

  const formatYAxis = (value) => {
    if (value >= 1000) {
      return `${(value / 1000).toFixed(0)}k`;
    }
    return value.toString();
  };

  return (
    <div
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
      style={{ width: "530.286px", height: "530.286px" }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
        <h2 className="text-xl font-bold text-gray-800 tracking-tight">
          Monthly Sales
        </h2>
        <div className="flex items-center gap-2">
          <button
            onClick={handleZoomIn}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-900"
            title="Zoom In"
          >
            <AiOutlinePlusCircle size={20} />
          </button>
          <button
            onClick={handleZoomOut}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-900"
            title="Zoom Out"
          >
            <AiOutlineMinusCircle size={20} />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-900"
            title="Zoom Select"
          >
            <AiOutlineZoomIn size={20} />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-900"
            title="Pan"
          >
            <FaHandPaper size={18} />
          </button>
          <button
            onClick={handleReset}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-900"
            title="Reset"
          >
            <FaHome size={18} />
          </button>
          <button
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 text-gray-600 hover:text-gray-900"
            title="Menu"
          >
            <HiOutlineMenu size={20} />
          </button>
        </div>
      </div>

      {/* Stats Summary */}
      <div className="grid grid-cols-3 gap-4 px-6 py-4 bg-gradient-to-r from-gray-50 to-white">
        <div className="text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider">Peak</p>
          <p className="text-lg font-bold text-emerald-600">$212,828</p>
        </div>
        <div className="text-center border-x border-gray-200">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Average
          </p>
          <p className="text-lg font-bold text-blue-600">$79,488</p>
        </div>
        <div className="text-center">
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            Total
          </p>
          <p className="text-lg font-bold text-purple-600">$1.1M</p>
        </div>
      </div>

      {/* Chart Area */}
      <div className="px-4 pb-4" style={{ height: "380px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={salesData}
            margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
          >
            <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#84cc16" />
                <stop offset="35%" stopColor="#22c55e" />
                <stop offset="50%" stopColor="#14b8a6" />
                <stop offset="75%" stopColor="#0891b2" />
                <stop offset="100%" stopColor="#0284c7" />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 11 }}
              dy={10}
              interval={0}
              angle={-45}
              textAnchor="end"
              height={60}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "#6b7280", fontSize: 11 }}
              tickFormatter={formatYAxis}
              dx={-10}
              label={{
                value: "Amount",
                angle: -90,
                position: "insideLeft",
                fill: "#6b7280",
                fontSize: 12,
                dy: 40,
              }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Line
              type="monotone"
              dataKey="amount"
              stroke="url(#lineGradient)"
              strokeWidth={3}
              dot={<CustomDot />}
              activeDot={{
                r: 8,
                fill: "#f59e0b",
                stroke: "#fff",
                strokeWidth: 3,
              }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Footer */}
      <div className="px-6 py-2 bg-gray-50 border-t border-gray-100">
        <div className="flex items-center justify-between text-xs text-gray-500">
          <span>November 2024</span>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-gradient-to-r from-lime-500 to-cyan-500" />
              Sales Trend
            </span>
            <span className="flex items-center gap-1">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              Data Points
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
