"use client";

import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PayoutRequestDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  return (
    <div className="p-8 pb-12 bg-white font-sans min-h-full flex flex-col">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <Link
            href="/dashboard/transactions"
            className="hover:bg-gray-100 p-1 rounded-full transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5 text-gray-900" />
          </Link>
          <h1 className="text-xl font-bold text-gray-900">
            Payout Requests Detailed screen- {params?.id || "PA5267"}
          </h1>
        </div>
        <p className="text-gray-500 italic ml-8">
          View all the details about the Payout here
        </p>
      </div>

      {/* Agent Details Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">
          Agent Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Name:</p>
            <p className="text-black font-medium text-base">Suresh B.</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Phone:</p>
            <p className="text-black font-medium text-base">9075689277</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Email Id</p>
            <p className="text-black font-medium text-base">
              suresh@yahoo.in
            </p>
          </div>
        </div>
      </div>

      {/* Payout Details Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">
          Payout Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Amount:</p>
            <p className="text-black font-medium text-base">₹ 20,000</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">Amount:</p>
            <p className="text-black font-medium text-base">₹ 20,000</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">
              Total Commission Earned:
            </p>
            <p className="text-black font-medium text-base">₹ 20,000</p>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2 font-medium">
            Pending Commission:
          </p>
          <p className="text-black font-medium text-base">₹ 10,000</p>
        </div>
      </div>

      {/* Bank Details Card */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
        <h2 className="text-base font-semibold text-gray-900 mb-6 border-b border-gray-100 pb-4">
          Bank Details
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">
              Account Holder Name:
            </p>
            <p className="text-black font-medium text-base">Suresh B.</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">
              Account Number:
            </p>
            <p className="text-black font-medium text-base">FC25167</p>
          </div>
          <div>
            <p className="text-gray-400 text-sm mb-2 font-medium">IFSC:</p>
            <p className="text-black font-medium text-base">FTR25</p>
          </div>
        </div>
        <div>
          <p className="text-gray-400 text-sm mb-2 font-medium">Bank Name:</p>
          <p className="text-black font-medium text-base">IDBI BANK</p>
        </div>
      </div>

      <div className="flex justify-end gap-4 mt-8">
        <Link href="/dashboard/transactions">
          <button className="px-6 py-2 rounded-lg text-sm text-white font-medium bg-[#ce1313] hover:bg-opacity-90 transition-opacity cursor-pointer">
            Reject Payout
          </button>
        </Link>
        <button className="px-6 py-2 rounded-lg text-sm text-white font-medium bg-[#1e2667] hover:bg-opacity-90 transition-opacity cursor-pointer">
          Approve Payout
        </button>
      </div>
    </div>
  );
}
