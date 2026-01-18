import React from 'react';

export default function ProfitCard () {
    return (
        <div className="w-full bg-white rounded-2xl flex justify-center items-center shadow p-6">
        <h3 className="text-gray-600">Profit</h3>
        <p className="text-gray-500 text-sm mb-4">Last Month</p>
            <div className="h-32 flex items-center">
        {/* Replace Image with Dynamic SVG */}
            <svg
                width="100%"
                height="100%"
                viewBox="0 0 200 80"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M10 60 L40 30 L80 45 L120 20 L160 35 L190 10"
                stroke="#06B6D4"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
                <circle cx="190" cy="10" r="5" fill="#06B6D4" />
            </svg>
        </div>
        <div className="mt-4 flex justify-between items-center">
            <p className="text-3xl font-bold">624k</p>
            <p className="text-green-500 font-semibold">+8.24%</p>
        </div>
    </div>
    );
}