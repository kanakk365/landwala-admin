"use client";

import { Search, SlidersHorizontal } from "lucide-react";

export default function ExploreCategoriesPage() {
    return (
        <div className="p-8 pb-4 bg-white font-sans min-h-full flex flex-col">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-2xl font-medium text-gray-900 mb-2">
                        Explore Categories
                    </h1>
                    <p className="text-gray-500 italic">Manage all property categories</p>
                </div>

                <div className="flex items-center gap-4">
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                        <input
                            type="text"
                            placeholder="Search"
                            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-64 focus:outline-none focus:ring-1 focus:ring-[#1e2667] text-gray-900"
                        />
                    </div>
                    <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 bg-white cursor-pointer">
                        <SlidersHorizontal className="w-4 h-4" />
                        Filters
                    </button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1 flex flex-col items-center justify-center">
                <p className="text-gray-400">Categories management coming soon</p>
            </div>
        </div>
    );
}
