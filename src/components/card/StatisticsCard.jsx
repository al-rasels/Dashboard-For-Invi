import React from "react";
import { FaChartPie, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

export default function StatisticsCard() {
  const stats = [
    {
      title: "Opening Balance",
      value: "0.00 (৳)",
      icon: <FaChartPie />,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      title: "Receive",
      value: "5,342.00 (৳)",
      icon: <FaUsers />,
      iconBg: "bg-blue-100",
      iconColor: "text-blue-600",
    },
    {
      title: "Expense",
      value: "0 (৳)",
      icon: <FaShoppingCart />,
      iconBg: "bg-red-100",
      iconColor: "text-red-600",
    },
    {
      title: "Balance",
      value: "5,342.00 (৳)",
      icon: <FaDollarSign />,
      iconBg: "bg-green-100",
      iconColor: "text-green-600",
    },
  ];

  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">INVI SOFTWARE</h2>
        <span className="text-sm text-gray-400">Updated 1 month ago</span>
      </div>

      {/* Stats Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="flex items-center text-center flex-col gap-4 bg-gray-50 p-4 rounded-xl">
            <div className={`p-3 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
              <span className={`text-xl ${stat.iconColor}`}>{stat.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{stat.value}</h3>
              <p className="text-sm text-gray-500">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
