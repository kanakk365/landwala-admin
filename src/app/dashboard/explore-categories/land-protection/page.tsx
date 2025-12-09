"use client";

import { useState, useEffect } from "react";
import {
    Search,
    SlidersHorizontal,
    ChevronLeft,
    ChevronRight,
    Loader2,
} from "lucide-react";
import { userActionsApi, LandProtection, PaginationMeta } from "@/lib/api";

export default function LandProtectionPage() {
    const [protections, setProtections] = useState<LandProtection[]>([]);
    const [meta, setMeta] = useState<PaginationMeta | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const limit = 10;

    useEffect(() => {
        const fetchProtections = async () => {
            setIsLoading(true);
            try {
                const response = await userActionsApi.getLandProtections(
                    currentPage,
                    limit
                );
                setProtections(response.data);
                setMeta(response.meta);
            } catch (error) {
                console.error("Failed to fetch land protections:", error);
            } finally {
                setIsLoading(false);
            }
        };

        fetchProtections();
    }, [currentPage]);

    const filteredProtections = protections.filter((item) => {
        const fullName = item.fullName || "";
        const email = item.user?.email || "";
        const phone = item.phone || "";
        const query = searchQuery.toLowerCase();

        return (
            fullName.toLowerCase().includes(query) ||
            email.toLowerCase().includes(query) ||
            phone.includes(searchQuery)
        );
    });

    if (isLoading) {
        return (
            <div className="p-8 bg-white font-sans min-h-screen flex items-center justify-center">
                <Loader2 className="w-8 h-8 animate-spin text-[#1e2667]" />
            </div>
        );
    }

    return (
        <div className="p-8 pb-4 bg-white font-sans min-h-full flex flex-col">
            <div className="flex justify-between items-end mb-8">
                <div>
                    <h1 className="text-2xl font-medium text-gray-900 mb-2">
                        Land Protection
                    </h1>
                    <p className="text-gray-500 italic">
                        Manage all registered Land protection
                    </p>
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
                            {filteredProtections.map((item) => (
                                <tr
                                    key={item.id}
                                    className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0"
                                >
                                    <td className="py-5 pl-8 font-medium text-gray-900">
                                        {item.fullName}
                                    </td>
                                    <td className="py-5 text-gray-900">{item.phone}</td>
                                    <td className="py-5 text-gray-600">{item.user?.email}</td>
                                    <td className="py-5 text-gray-900">{item.location}</td>
                                    <td className="py-5 pr-8 text-gray-600">
                                        {item.user?.employment || "-"}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

            <div className="flex justify-between mb-6 items-center mt-6">
                <span className="text-gray-500 text-sm">
                    Showing{" "}
                    {meta
                        ? `${(currentPage - 1) * limit + 1}-${Math.min(
                            currentPage * limit,
                            meta.total
                        )} of ${meta.total}`
                        : "01 of 10"}
                </span>
                <div className="flex gap-2">
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={!meta?.hasPrevPage}
                        className="p-2 bg-[#1e2667] text-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronLeft className="w-4 h-4" />
                    </button>
                    <button
                        onClick={() => setCurrentPage((prev) => prev + 1)}
                        disabled={!meta?.hasNextPage}
                        className="p-2 bg-[#1e2667] text-white rounded-lg cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        <ChevronRight className="w-4 h-4" />
                    </button>
                </div>
            </div>
        </div>
    );
}
