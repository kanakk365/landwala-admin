"use client";

import { useState } from "react";
import {
    Search,
    SlidersHorizontal,
    ChevronLeft,
    ChevronRight,
} from "lucide-react";

// Dummy data matching the provided design exactly
const dummyData = [
    {
        id: 1,
        name: "Rohan Sharma",
        phone: "9082561771",
        email: "rohan24@...",
        location: "Hyderbad",
        occupation: "Teacher",
    },
    {
        id: 2,
        name: "Dheer Shah",
        phone: "9086267189",
        email: "Dheer24@...",
        location: "Hyderbad",
        occupation: "Self Employed",
    },
    {
        id: 3,
        name: "Rahul Sharma",
        phone: "9098761771",
        email: "rahul24@...",
        location: "Hyderbad",
        occupation: "IT Manager",
    },
    {
        id: 4,
        name: "Sahil Gupta",
        phone: "9078625467",
        email: "Sahil24@...",
        location: "Hyderbad",
        occupation: "Teacher",
    },
    {
        id: 5,
        name: "Vipul Sen",
        phone: "9082561791",
        email: "vipul24@...",
        location: "Hyderbad",
        occupation: "Teacher",
    },
    {
        id: 6,
        name: "Dinesh Vijay",
        phone: "9082561771",
        email: "dinesh24@...",
        location: "Hyderbad",
        occupation: "Pilot",
    },
    {
        id: 7,
        name: "Sourav Sharma",
        phone: "9082561771",
        email: "sourav23@...",
        location: "Hyderbad",
        occupation: "Manager",
    },
    {
        id: 8,
        name: "Sourav Sharma",
        phone: "9082561771",
        email: "sourav23@...",
        location: "Hyderbad",
        occupation: "Manager",
    },
];

export default function LatestListingsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [currentPage, setCurrentPage] = useState(1);

    const filteredData = dummyData.filter(
        (item) =>
            item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.phone.includes(searchQuery)
    );

    return (
        <div className="p-8 pb-4 bg-white font-sans min-h-full flex flex-col">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-2xl font-medium text-gray-900 mb-2">
                        Latest Listing
                    </h1>
                    <p className="text-gray-500 italic">Manage all registered Listings</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-[#1e2667] text-gray-900"
                        />
                    </div>
                    <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 bg-white cursor-pointer">
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1 flex flex-col">
                <div className="w-full overflow-x-auto">
                    <table className="w-full text-left border-collapse min-w-full">
                        <thead>
                            <tr className="bg-[#f8f9fc]">
                                <th className="py-4 pl-8 rounded-l-xl font-medium text-gray-600">
                                    Full Name
                                </th>
                                <th className="py-4 font-medium text-gray-600">Phone Number</th>
                                <th className="py-4 font-medium text-gray-600">Email</th>
                                <th className="py-4 font-medium text-gray-600">Location</th>
                                <th className="py-4 pr-8 rounded-r-xl font-medium text-gray-600">
                                    Occupation
                                </th>
                            </tr>
                        </thead>
                        <tbody className="text-sm text-gray-600">
                            {/* Spacer row */}
                            <tr>
                                <td className="h-4"></td>
                            </tr>
                            {filteredData.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0"
                                >
                                    <td className="py-5 pl-8 font-medium text-gray-900">
                                        {item.name}
                                    </td>
                                    <td className="py-5 text-gray-900">{item.phone}</td>
                                    <td className="py-5 text-gray-600">{item.email}</td>
                                    <td className="py-5 text-gray-900">{item.location}</td>
                                    <td className="py-5 pr-8 text-gray-600">{item.occupation}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-between mb-6 items-center mt-6">
                <span className="text-gray-500 text-sm">Showing 01 of 10</span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        className="p-2 bg-[#1e2667] text-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={true} // Dummy pagination
                        className="p-2 bg-[#1e2667] text-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
