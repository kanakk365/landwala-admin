"use client";

import { Bell } from "lucide-react";
import { useAuthStore } from "@/store/useAuthStore";

export function Navbar() {
  const { user } = useAuthStore();
  const userInitial = user?.name?.charAt(0)?.toUpperCase() || "A";

  return (
    <header className="h-16 bg-white border-b border-gray-100 flex items-center justify-between px-8 font-sans">
      {/* Empty spacer for left side */}
      <div className="flex-1"></div>

      <div className="flex items-center gap-4 ml-4">
        <div className="relative">
          <button className="p-2 text-gray-500 hover:bg-gray-100 rounded-full transition-colors cursor-pointer">
            <Bell className="w-5 h-5" />
          </button>
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </div>

        <div className="w-8 h-8 rounded bg-[#1e2667] flex items-center justify-center text-white text-sm font-medium cursor-pointer">
          {userInitial}
        </div>
      </div>
    </header>
  );
}
