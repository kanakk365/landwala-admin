"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clsx from "clsx";

const tabs = ["User", "Agent", "Admin"];

const userLogs = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: "1015",
    performedBy: "Rajesh",
    role: "User",
    action: "Listed New Plot",
    affectedItem: "Plot ID L-230",
    dateTime: "14 Feb, 11:20 AM",
  }));

const agentLogs = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: "1015",
    performedBy: "Dilip",
    role: "Agent",
    action: "Uploaded Document",
    affectedItem: "Plot ID L-230",
    dateTime: "14 Feb, 11:20 AM",
  }));

const adminLogs = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: "1015",
    performedBy: "Jayveer",
    role: "Admin",
    action: "Approved Plot",
    affectedItem: "Plot ID L-230",
    dateTime: "14 Feb, 11:20 AM",
  }));

export default function AuditLogsPage() {
  const [activeTab, setActiveTab] = useState("User");

  const currentLogs =
    activeTab === "User"
      ? userLogs
      : activeTab === "Agent"
      ? agentLogs
      : adminLogs;

  return (
    <div className="p-8 pb-4 bg-white font-sans min-h-full flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Audit Logs</h1>
        <p className="text-gray-500 italic">View all the logs here</p>
      </div>

      {/* Controls Section */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-6">
        {/* Tabs */}
        <div className="flex gap-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "px-6 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                activeTab === tab
                  ? "bg-[#1e2667] text-white"
                  : "bg-[#eaeaec] text-[#1e2667] hover:bg-gray-200"
              )}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Search & Filters */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="relative flex-1 md:flex-none">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg w-full md:w-64 focus:outline-none focus:ring-1 focus:ring-[#1e2667] text-gray-900"
            />
          </div>
          <button className="flex items-center gap-2 border border-gray-200 px-4 py-2 rounded-lg text-gray-600 hover:bg-gray-50 bg-white cursor-pointer whitespace-nowrap">
            <SlidersHorizontal className="w-4 h-4" />
            Filters
          </button>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1 flex flex-col">
        <div className="w-full overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-full">
            <thead>
              <tr className="bg-[#f8f9fc]">
                <th className="py-4 pl-8 rounded-l-xl font-medium text-gray-600 w-1/6">
                  Log ID
                </th>
                <th className="py-4 font-medium text-gray-600 w-1/6">
                  Performed By
                </th>
                <th className="py-4 font-medium text-gray-600 w-1/6">Role</th>
                <th className="py-4 font-medium text-gray-600 w-1/6">Action</th>
                <th className="py-4 font-medium text-gray-600 w-1/6">
                  Affected Item
                </th>
                <th className="py-4 pr-8 rounded-r-xl font-medium text-gray-600 w-1/6 text-right">
                  Date & Time
                </th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {/* Spacer row */}
              <tr>
                <td className="h-4"></td>
              </tr>
              {currentLogs.map((log, i) => (
                <tr
                  key={i}
                  className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0"
                >
                  <td className="py-5 pl-8 font-medium text-gray-900">
                    {log.id}
                  </td>
                  <td className="py-5 text-gray-900">{log.performedBy}</td>
                  <td className="py-5 text-gray-500">{log.role}</td>
                  <td className="py-5 text-gray-500">{log.action}</td>
                  <td className="py-5 text-gray-500">{log.affectedItem}</td>
                  <td className="py-5 pr-8 text-right text-gray-500">
                    {log.dateTime}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-between mb-6 items-center mt-6">
        <span className="text-gray-500 text-sm">Showing 01 of 10</span>
        <div className="flex gap-2">
          <button className="p-2 bg-[#1e2667] text-white rounded-lg cursor-pointer">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button className="p-2 bg-[#1e2667] text-white rounded-lg cursor-pointer">
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
