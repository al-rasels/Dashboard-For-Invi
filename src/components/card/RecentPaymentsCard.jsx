
import { ArrowRight } from "lucide-react";
import React, { useState } from "react";

const data = [
  {
    date: "28/11/2025",
    client: "API TEST CLIENT",
    payment: "3,000.00",
    paymentMethod: "ISSB",
  },
  {
    date: "27/11/2025",
    client: "CLIENT 4",
    payment: "2,000.00",
    paymentMethod: "Cash",
  },
  {
    date: "26/11/2025",
    client: "API TEST CLIENT",
    payment: "100.00",
    paymentMethod: "Steadfast",
  },
  {
    date: "25/11/2025",
    client: "CLIENT 5154",
    payment: "12.00",
    paymentMethod: "Cash",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "2,323.00",
    paymentMethod: "Bank",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "332.00",
    paymentMethod: "Cash",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "232.00",
    paymentMethod: "Cash",
  },
  {
    date: "20/11/2025",
    client: "adfasds",
    payment: "100.00",
    paymentMethod: "Cash",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9287",
    payment: "0.00",
    paymentMethod: "Cash",
  },
  {
    date: "15/11/2025",
    client: "CLIENT 9163",
    payment: "3,030.00",
    paymentMethod: "Cash",
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

// Function to get payment method icon and color
const getPaymentMethodInfo = (method) => {
  const methods = {
    "Cash": {

      color: "bg-emerald-100 text-emerald-800",
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-600"
    },
    "Bank": {

      color: "bg-blue-100 text-blue-800",
      bgColor: "bg-blue-50",
      iconColor: "text-blue-600"
    },
    "ISSB": {

      color: "bg-purple-100 text-purple-800",
      bgColor: "bg-purple-50",
      iconColor: "text-purple-600"
    },
    "Steadfast": {

      color: "bg-amber-100 text-amber-800",
      bgColor: "bg-amber-50",
      iconColor: "text-amber-600"
    }
  };

  return methods[method] || {

    color: "bg-gray-100 text-gray-800",
    bgColor: "bg-gray-50",
    iconColor: "text-gray-600"
  };
};

// Function to get payment status based on amount
const getPaymentStatus = (amount) => {
  const num = parseFloat(amount.replace(/,/g, ''));
  if (num === 0) return { text: "No Payment", color: "bg-gray-100 text-gray-800" };
  if (num < 100) return { text: "Small", color: "bg-amber-100 text-amber-800" };
  if (num < 1000) return { text: "Medium", color: "bg-blue-100 text-blue-800" };
  return { text: "Large", color: "bg-emerald-100 text-emerald-800" };
};

export default function RecentPaymentsCard() {
  const [hoveredRow, setHoveredRow] = useState(null);

  // Format currency with proper symbols
  const formatCurrency = (value) => {
    const num = parseFloat(value.replace(/,/g, ''));
    if (num === 0) return "৳0.00";
    return `৳${new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(num)}`;
  };



  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden">
      {/* Header with Stats */}
      <div className="px-6 pt-6 pb-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-gray-900">Recent Payments Received</h2>
            <p className="text-sm text-gray-500 mt-1">Track and manage client payments</p>
          </div>
          <div className=""><button className="text-md text-blue-600 hover:text-blue-800 font-medium  flex items-center gap-1 hover:gap-2 transition-all duration-300">
            <span>View more</span> <ArrowRight className="h-4 w-4 mr-2  text-center" />
          </button>
          </div>

        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full ">
          <thead>
            <tr className="border-y border-gray-100">
              <th className="py-3 px-4 text-left">
                <div className="flex items-center space-x-2">
                  <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Date</span>
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </th>
              <th className="py-3 px-4 text-left">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Client</span>
              </th>
              <th className="py-3 px-4 text-left">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Amount</span>
              </th>
              <th className="py-3 px-4 text-left">
                <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">Payment Method</span>
              </th>

            </tr>
          </thead>
          <tbody>
            {data.map((row, idx) => {
              const avatarColor = getAvatarColor(row.client);
              const paymentInfo = getPaymentMethodInfo(row.paymentMethod);
              return (
                <tr
                  key={idx}
                  className={`border-b border-gray-100 transition-all duration-200 hover:bg-gray-50/50 ${hoveredRow === idx ? 'bg-blue-50/30' : ''
                    }`}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                >
                  <td className="py-3 px-4">
                    <div className="flex flex-col">
                      <span className="font-medium text-gray-900">{row.date}</span>
                      <span className="text-xs text-gray-500 mt-1">
                        {new Date(row.date.split('/').reverse().join('-')).toLocaleDateString('en-US', { weekday: 'short' })}
                      </span>
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
                    <div className="flex items-center space-x-2">
                      <div className={`p-2 rounded-lg ${paymentInfo.bgColor}`}>
                        <span className={`text-lg ${paymentInfo.iconColor}`}>{paymentInfo.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-bold text-gray-900 text-lg">
                          {formatCurrency(row.payment)}
                        </span>
                        <span className="text-xs text-gray-500">
                          {parseFloat(row.payment.replace(/,/g, '')).toLocaleString('en-US', { minimumFractionDigits: 2 })} BDT
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="flex items-center space-x-2">
                      <span className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${paymentInfo.color}`}>
                        {row.paymentMethod}
                      </span>

                    </div>
                  </td>
                  <td className="py-3 px-4">

                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Footer */}
      <div className="px-6 py-4 bg-gray-50/50 border-t border-gray-100">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        </div>
      </div>
    </div>
  );
}