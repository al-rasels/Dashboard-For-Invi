import React from "react";
import { FaChartPie, FaUsers, FaShoppingCart, FaDollarSign } from "react-icons/fa";

export default function StatisticsCard() {
  const stats = [
    {
      title: "Opening Balance",
      value: "0.00 (৳)",
      icon: <FaChartPie />,
      iconBg: "bg-white",
      iconColor: "text-purple-600",
      bgColor: "bg-gradient-to-r from-purple-400 to-purple-600",
    },
    {
      title: "Receive",
      value: "5,342.00 (৳)",
      icon: <FaUsers />,
      iconBg: "bg-white",
      iconColor: "text-blue-600",
      bgColor: "bg-gradient-to-r from-blue-400 to-blue-600",
    },
    {
      title: "Expense",
      value: "0 (৳)",
      icon: <FaShoppingCart />,
      iconBg: "bg-white",
      iconColor: "text-red-600",
      bgColor: "bg-gradient-to-r from-red-400 to-red-600",
    },
    {
      title: "Balance",
      value: "5,342.00 (৳)",
      icon: <FaDollarSign />,
      iconBg: "bg-white",
      iconColor: "text-green-600",
      bgColor: "bg-gradient-to-r from-green-400 to-green-600",
    },
  ];


  return (
    <div className="bg-white rounded-2xl shadow-lg p-6 w-full hover:shadow-xl transition-shadow duration-300">
      {/* Header */}
      <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4 mb-4">
        <h2 className="text-xl font-bold text-gray-800">INVI SOFTWARE</h2>
        <span className="text-sm text-gray-400">Updated 1 month ago</span>
      </div>

      {/* Stats Body */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className={`flex items-center text-center flex-col gap-4 ${stat.bgColor} backdrop-blur-3xl shadow-sm p-4 rounded-xl`}>
            <div className={`p-3 rounded-lg ${stat.iconBg} flex items-center justify-center`}>
              <span className={`text-xl ${stat.iconColor}`}>{stat.icon}</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">{stat.value}</h3>
              <p className="text-sm font-semibold text-white">{stat.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
