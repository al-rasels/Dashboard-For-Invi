import { CircleChevronDown } from "lucide-react";
import React from "react";
import mnthImg from '../../assets/monthly-exp.jpg';
export default function ExpensesCard() {
    return (
        <div className="bg-white rounded-2xl shadow px-16 flex justify-between items-center">
            <div>
                <h2 className="text-xl font-semibold">Monthly Expenses</h2>
                <p className="text-4xl font-bold mt-3">4,350 <span> BDT</span></p>
                <p className="text-red-500 font-semibold text-sm mt-1 flex gap-2 justify-start items-center"><CircleChevronDown className="h-4 w-4" /> 15.8%</p>
            </div>

            {/* Progress Circle */}
            <div className="relative w-72 h-72">
                <img src={mnthImg} alt="monthly-expense" />

            </div>
        </div>
    );
}
