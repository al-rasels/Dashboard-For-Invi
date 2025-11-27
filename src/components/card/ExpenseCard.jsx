import React from 'react';

export default function ExpenseCard() {
    return (
    <div className="w-full bg-white rounded-2xl shadow p-6">
        <p className="text-gray-500">82.5k</p>
        <h3 className="text-xl font-semibold">Expenses</h3>
        <div className="mt-4 flex justify-center">
        {/* Dynamic SVG Circular Progress */}
            <svg
                width="120"
                height="120"
                viewBox="0 0 120 120"
                xmlns="http://www.w3.org/2000/svg"
            >
            {/* Background Circle */}
            <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#E5E7EB"
                strokeWidth="10"
                fill="none"
            />


            {/* Progress Circle (Dynamic later) */}
            <circle
                cx="60"
                cy="60"
                r="50"
                stroke="#F59E0B"
                strokeWidth="10"
                fill="none"
                strokeDasharray="314"
                strokeDashoffset="70" /* 78% progress */
                strokeLinecap="round"
                transform="rotate(-90 60 60)"
            />
            </svg>
        </div>
        <div className="text-center mt-3">
            <p className="text-2xl font-bold">78%</p>
            <p className="text-gray-500 text-sm">$21k Expenses more<br/>than last month</p>
        </div>
    </div>
    );
};