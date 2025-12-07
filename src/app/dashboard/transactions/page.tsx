"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const tabs = ["Payout Requests", "Commission Summary", "Transaction History"];

const transactionsData = Array(8)
  .fill(null)
  .map((_, i) => ({
    id: "PA5267",
    agentName: "Suresh B.",
    amount: "₹ 20,000",
    status: "Pending",
  }));

const commissionSummaryData = Array(8)
  .fill(null)
  .map((_, i) => ({
    agentName: "Suresh B.",
    earned: "₹ 20,000",
    paid: "₹ 10,000",
    pending: "₹ 10,000",
  }));

export default function TransactionsPage() {
  const [activeTab, setActiveTab] = useState("Payout Requests");

  return (
    <div className="p-8 pb-4 bg-white font-sans min-h-full flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Transactions</h1>
        <p className="text-gray-500 italic">
          Manage all Transactions here for Landwalaa
        </p>
      </div>

      {/* Tabs */}
      <div className="flex gap-4 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={clsx(
              "px-6 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
              activeTab === tab
                ? "bg-[#1e2667] text-white"
                : "bg-[#eaeaec] text-[#1e2667] hover:bg-gray-200"
            )}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex-1 flex flex-col">
        {activeTab === "Payout Requests" && (
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-full">
              <thead>
                <tr className="bg-[#f8f9fc]">
                  <th className="py-4 pl-8 rounded-l-xl font-medium text-gray-600 w-1/5">
                    Payout ID
                  </th>
                  <th className="py-4 font-medium text-gray-600 w-1/5">
                    Agent Name
                  </th>
                  <th className="py-4 font-medium text-gray-600 w-1/5">
                    Amount
                  </th>
                  <th className="py-4 font-medium text-gray-600 w-1/5">
                    Status
                  </th>
                  <th className="py-4 pr-8 rounded-r-xl font-medium text-gray-600 w-1/5 text-right">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {/* Spacer row */}
                <tr>
                  <td className="h-4"></td>
                </tr>
                {transactionsData.map((tx, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <td className="py-5 pl-8 font-medium text-gray-900">
                      {tx.id}
                    </td>
                    <td className="py-5 text-gray-900">{tx.agentName}</td>
                    <td className="py-5 text-gray-500">{tx.amount}</td>
                    <td className="py-5 text-gray-500">{tx.status}</td>
                    <td className="py-5 pr-8 text-right">
                      <Link href={`/dashboard/transactions/${tx.id}`}>
                        <button className="bg-[#1e2667] text-white text-xs font-medium px-6 py-2 rounded-lg hover:bg-opacity-90 transition-opacity w-20 cursor-pointer">
                          View
                        </button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {activeTab === "Commission Summary" && (
          <div className="w-full overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-full">
              <thead>
                <tr className="bg-[#f8f9fc]">
                  <th className="py-4 pl-8 rounded-l-xl font-medium text-gray-600 w-1/4">
                    Agent Name
                  </th>
                  <th className="py-4 font-medium text-gray-600 w-1/4">
                    Total Commission Earned
                  </th>
                  <th className="py-4 font-medium text-gray-600 w-1/4">
                    Total Paid
                  </th>
                  <th className="py-4 pr-8 rounded-r-xl font-medium text-gray-600 w-1/4">
                    Pending
                  </th>
                </tr>
              </thead>
              <tbody className="text-sm text-gray-600">
                {/* Spacer row */}
                <tr>
                  <td className="h-4"></td>
                </tr>
                {commissionSummaryData.map((data, i) => (
                  <tr
                    key={i}
                    className="hover:bg-gray-50/50 transition-colors border-b border-gray-50 last:border-0"
                  >
                    <td className="py-5 pl-8 text-gray-500">
                      {data.agentName}
                    </td>
                    <td className="py-5 text-gray-500">{data.earned}</td>
                    <td className="py-5 text-gray-500">{data.paid}</td>
                    <td className="py-5 pr-8 text-gray-500">{data.pending}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
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
