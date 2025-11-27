import React from "react";

export default function StatisticsCard() {
  return (
    <div className="rounded-xl bg-white shadow h-full w-full p-5">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-3 mb-4">
        <h5 className="text-lg font-semibold">Statistics</h5>
        <small className="text-gray-400">Updated 1 month ago</small>
      </div>

      {/* Body */}
      <div className="flex items-end">
        <div className="w-full">
          <div className="grid grid-cols-4 gap-4">
            {/* Sales */}
            <div className="flex items-center gap-4">
              <div className="p-2 rounded bg-purple-100 text-purple-600">
                <i className="ti ti-chart-pie-2 text-xl"></i>
              </div>
              <div>
                <h5 className="font-semibold text-base m-0 leading-tight">
                  230k
                </h5>
                <small className="text-gray-500">Sales</small>
              </div>
            </div>

            {/* Customers */}
            <div className="flex items-center gap-4">
              <div className="p-2 rounded bg-blue-100 text-blue-600">
                <i className="ti ti-users text-xl"></i>
              </div>
              <div>
                <h5 className="font-semibold text-base m-0 leading-tight">
                  8.549k
                </h5>
                <small className="text-gray-500">Customers</small>
              </div>
            </div>

            {/* Products */}
            <div className="flex items-center gap-4">
              <div className="p-2 rounded bg-red-100 text-red-600">
                <i className="ti ti-shopping-cart text-xl"></i>
              </div>
              <div>
                <h5 className="font-semibold text-base m-0 leading-tight">
                  1.423k
                </h5>
                <small className="text-gray-500">Products</small>
              </div>
            </div>

            {/* Revenue */}
            <div className="flex items-center gap-4">
              <div className="p-2 rounded bg-green-100 text-green-600">
                <i className="ti ti-currency-dollar text-xl"></i>
              </div>
              <div>
                <h5 className="font-semibold text-base m-0 leading-tight">
                  $9745
                </h5>
                <small className="text-gray-500">Revenue</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
