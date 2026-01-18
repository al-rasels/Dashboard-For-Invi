import { CircleChevronDown } from "lucide-react";
import React from "react";

export default function ExpensesCard() {
    return (
        <div className="bg-white rounded-2xl shadow p-6 flex justify-between items-center">
            <div>
                <h2 className="text-xl font-semibold">Monthly Expenses</h2>

                <p className="text-4xl font-bold mt-3">4,350 <span> BDT</span></p>
                <p className="text-red-500 font-semibold text-sm mt-1 flex gap-2 justify-start items-center"><CircleChevronDown className="h-4 w-4" /> 15.8%</p>
            </div>

            {/* Progress Circle */}
            <div className="relative w-28 h-28">
                <svg className="w-full h-full rotate-[-90deg]">
                    <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#F5E7E7"
                        strokeWidth="12"
                        fill="none"
                    />
                    <circle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#ED0D09"
                        strokeWidth="12"
                        fill="none"
                        strokeDasharray={314}
                        strokeDashoffset={314 - (314 * 75) / 100}
                        strokeLinecap="round"
                    />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <p className="text-xl font-semibold">184</p>
                    <p className="text-gray-400 text-xs">Total</p>
                </div>
            </div>
        </div>
    );
}
