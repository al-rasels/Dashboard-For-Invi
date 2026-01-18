import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const data = [
  {
    date: "28/11/2025",
    client: "API TEST CLIENT",
    total: "15,000.00",
    payment: "3,000.00",
  },
  {
    date: "27/11/2025",
    client: "CLIENT 4",
    total: "2,000.00",
    payment: "2,000.00",
  },
  {
    date: "26/11/2025",
    client: "API TEST CLIENT",
    total: "2,000.00",
    payment: "100.00",
  },
  {
    date: "25/11/2025",
    client: "CLIENT 5154",
    total: "195.00",
    payment: "12.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "6,000.00",
    payment: "2,323.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "8,400.00",
    payment: "332.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "50,000.00",
    payment: "232.00",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    total: "5,000.00",
    payment: "100.00",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9287",
    total: "1,935.00",
    payment: "0.00",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9163",
    total: "2,950.00",
    payment: "3,030.00",
  },
];

// Function to generate avatar color based on client name
const getAvatarColor = (clientName) => {
  const colors = [
    "bg-gradient-to-br from-blue-500 to-blue-600",
    "bg-gradient-to-br from-emerald-500 to-emerald-600",
    "bg-gradient-to-br from-violet-500 to-violet-600",
    "bg-gradient-to-br from-amber-500 to-amber-600",
    "bg-gradient-to-br from-rose-500 to-rose-600",
    "bg-gradient-to-br from-indigo-500 to-indigo-600",
  ];
  const index = clientName.length % colors.length;
  return colors[index];
};




export default function ClientPaymentsCard() {
  const [hoveredRow, setHoveredRow] = useState(null);



  return (
    <div className="bg-white rounded-2xl shadow border border-gray-100 overflow-hidden">
      {/* Header */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Recent Transactions</h2>
            <p className="text-sm text-gray-500 mt-1">Overview of recent client payments</p>
          </div>
          <div className=""><button className="text-md text-blue-600 hover:text-blue-800 font-medium  flex items-center gap-1 hover:gap-2 transition-all duration-300">
            <span>View more</span> <ArrowRight className="h-4 w-4 mr-2  text-center" />
          </button>
          </div>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-y border-gray-100 bg-gradient-to-r from-gray-50/50 to-gray-50">
              <th className="py-4 px-6 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</span>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Total </span>
              </th>
              <th className="py-4 px-6 text-left">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider"> Received</span>
              </th>

            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {

              const avatarColor = getAvatarColor(row.client);

              return (
                <tr
                  key={idx}
                  className={`border-b border-gray-100 transition-all duration-300 hover:bg-gradient-to-r hover:from-indigo-50/30 hover:to-white ${hoveredRow === idx ? 'shadow-sm' : ''
                    }`}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{row.date}</span>
                      <span className="text-xs text-gray-500 mt-1">Last week</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-3">
                      <div className={`${avatarColor} h-10 w-10 rounded-xl flex items-center justify-center text-white font-bold shadow-sm`}>
                        {row.client.charAt(0).toUpperCase()}
                      </div>
                      <div className="min-w-0">
                        <div className="font-medium text-gray-900 truncate max-w-[150px]">
                          {row.client}
                        </div>
                        <div className="text-xs text-gray-500 truncate max-w-[150px]">
                          ID: {row.client.replace(/\D/g, '').slice(0, 6) || 'N/A'}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <span className="font-bold text-gray-900 text-lg">{row.total}</span>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center">
                      <div className="mr-2 p-1.5 bg-emerald-50 rounded-lg">
                        <svg className="w-4 h-4 text-emerald-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </div>
                      <span className="font-semibold text-emerald-700">{row.payment}</span>
                    </div>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>
      </div>


    </div>
  );
}