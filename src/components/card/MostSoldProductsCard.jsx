import React, { useState } from "react";
import Chart from "react-apexcharts";

// Sample data – replace with your real product data


// Refined blue gradient-like palette
const series = [35, 25, 20, 10, 10]

const options = {
  chart: {
    type: "donut",
  },
  labels: ["Product-1", "Product-2", "Product-3", "Product-4", "Other"],
  colors: ["#6366F1", "#22C55E", "#F59E0B", "#EF4444", "#3B82F6"],

  legend: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  plotOptions: {
    pie: {
      donut: {
        size: "70%",
        labels: {
          show: true,
          total: {
            show: true,
            label: "Total",
            formatter: () => "172",
          },
        },
      },
    },
  },
};


export default function MostSoldProductsCard() {



  return (
    <div className="bg-white rounded-2xl shadow-md flex flex-col items-center justify-center p-6">
      {/* Header */}
      <div className="w-full border-b border-gray-100 mb-4">
        <h2 className="text-lg font-bold text-gray-800 text-center tracking-tight">
          Most Sold Products
        </h2>
      </div>

      {/* Chart Area */}
      <div className="w-full flex items-center justify-center">
        <div className="w-full max-w-[320px] h-[320px]">
          <Chart
            options={options}
            series={series}
            type="donut"
            width="100%"
            height="100%"
          />
        </div>
      </div>
    </div>

  );
}