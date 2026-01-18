import React from "react";
import { Banknote, CreditCard, Landmark } from "lucide-react";

export default function TransactionsCard() {
  const transactions = [
    {
      icon: <CreditCard />,
      title: "Wallet",
      subtitle: "Starbucks",
      amount: "-$75",
      color: "text-red-500",
      bgColor: "bg-red-50",
      iconBgColor: "bg-linear-to-b from-red-600 to-red-400",
    },
    {
      icon: <Landmark />,
      title: "Bank Transfer",
      subtitle: "Add Money",
      amount: "+$480",
      color: "text-green-500",
      bgColor: "bg-green-50",
      iconBgColor: "bg-linear-to-b from-green-500 to-cyan-300",
    },
    {
      icon: <Banknote />,
      title: "Paypal",
      subtitle: "Client Payment",
      amount: "+$268",
      color: "text-green-500",
      bgColor: "bg-green-50",
      iconBgColor: "bg-linear-to-b from-green-500 to-cyan-300",
    },
    {
      icon: <CreditCard />,
      title: "Master Card",
      subtitle: "Ordered iPhone 13",
      amount: "-$699",
      color: "text-red-500",
      bgColor: "bg-red-50",
      iconBgColor: "bg-linear-to-b from-red-600 to-red-400",
    },
    {
      icon: <Landmark />,
      title: "Bank Transactions",
      subtitle: "Refund",
      amount: "+$98",
      color: "text-green-500",
      bgColor: "bg-green-50",
      iconBgColor: "bg-linear-to-b from-green-500 to-cyan-300",
    },
    {
      icon: <Banknote />,
      title: "Paypal",
      subtitle: "Client Payment",
      amount: "+$126",
      color: "text-green-500",
      bgColor: "bg-green-50",
      iconBgColor: "bg-linear-to-b from-green-500 to-cyan-300",
    },
    {
      icon: <Landmark />,
      title: "Bank Transfer",
      subtitle: "Pay Office Rent",
      amount: "-$1290",
      color: "text-red-500",
      bgColor: "bg-red-50",
      iconBgColor: "bg-linear-to-b from-red-600 to-red-400 ",
    },
  ];



  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h2 className="text-xl font-semibold">Transactions</h2>
      <p className="text-gray-500 text-sm">Total 58 Transactions done in this Month</p>

      <div className="mt-6 space-y-6 ">
        {transactions.map((item, i) => (
          <div key={i} className={`flex justify-between items-center  ${item.bgColor} rounded-md px-3 py-1 `}>
            <div className="flex items-center  gap-4">
              <span className={`w-10 h-10 rounded-xl ${item.iconBgColor} text-white  flex justify-center items-center text-xl hover:scale-110 transition-transform hover:rotate-12 duration-300`}>
                {item.icon}
              </span>
              <div>
                <p className="font-semibold">{item.title}</p>
                <p className="text-gray-400 text-sm">{item.subtitle}</p>
              </div>
            </div>

            <p className={`font-semibold ${item.color}`}>{item.amount}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
