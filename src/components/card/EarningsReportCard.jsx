import React from "react";

export default function EarningsReportCard() {
  const chartData = [30, 90, 50, 35, 130, 60, 95];

  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold">Earning Reports</h2>
      <p className="text-gray-500 text-sm">Weekly Earnings Overview</p>

      {/* 3 Info Rows */}
      <div className="mt-6 space-y-5">
        {/* Row 1 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-purple-100 flex items-center justify-center text-purple-500 text-xl">⏱</span>
            <div>
              <p className="font-semibold">Net Profit</p>
              <p className="text-gray-400 text-sm">12.4k Sales</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">$1,619</p>
            <p className="text-green-500 text-sm">▲ 18.6%</p>
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-green-100 flex items-center justify-center text-green-500 text-xl">$</span>
            <div>
              <p className="font-semibold">Total Income</p>
              <p className="text-gray-400 text-sm">Sales, Affiliation</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">$3,571</p>
            <p className="text-green-500 text-sm">▲ 39.6%</p>
          </div>
        </div>

        {/* Row 3 */}
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gray-100 flex items-center justify-center text-gray-500 text-xl">💳</span>
            <div>
              <p className="font-semibold">Total Expenses</p>
              <p className="text-gray-400 text-sm">ADVT, Marketing</p>
            </div>
          </div>
          <div className="text-right">
            <p className="font-semibold">$430</p>
            <p className="text-green-500 text-sm">▲ 52.8%</p>
          </div>
        </div>
      </div>

      {/* Bar Chart */}
      <div className="flex justify-between mt-8">
        {chartData.map((h, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div
              className={`w-4 rounded-lg ${
                i === 4 ? "bg-purple-600" : "bg-purple-200"
              }`}
              style={{ height: `${h}px` }}
            ></div>
            <p className="text-gray-400 text-xs">
              {["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"][i]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
