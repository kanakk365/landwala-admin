"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import {
  LayoutDashboard,
  Users,
  UserCog,
  Grid,
  FileText,
  Bot,
  ChevronRight,
  Map,
} from "lucide-react";
import clsx from "clsx";
import { useAuthStore } from "@/store/useAuthStore";

const sidebarItems = [
  { name: "Dashboard", href: "/dashboard", icon: LayoutDashboard },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Agents", href: "/dashboard/agents", icon: UserCog },
  { name: "Plots", href: "/dashboard/plots", icon: Grid },
  { name: "Layouts", href: "/dashboard/layouts", icon: Map },
  { name: "Transactions", href: "/dashboard/transactions", icon: FileText },
  { name: "Audit Logs", href: "/dashboard/audit-logs", icon: Bot },
];

export function Sidebar() {
  const pathname = usePathname();
  const { user } = useAuthStore();

  const userName = user?.name || "Admin";
  const userInitial = userName.charAt(0).toUpperCase();

  return (
    <aside className="w-64 bg-white border-r border-gray-100 flex-shrink-0 min-h-screen flex flex-col font-sans">
      <div className="p-6 flex items-center justify-center">
        <div className="relative w-40 h-12">
          <Image
            src="/logo.png"
            alt="LandWala"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      <nav className="flex-1 px-4 space-y-2 mt-4">
        {sidebarItems.map((item) => {
          const isActive =
            item.href === "/dashboard"
              ? pathname === "/dashboard"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.name}
              href={item.href}
              className={clsx(
                "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors cursor-pointer",
                isActive
                  ? "bg-[#1e2667] text-white"
                  : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"
              )}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 mt-auto border-t border-gray-100">
        <Link href="/dashboard/profile">
          <div className="flex items-center gap-3 px-2 py-2 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors">
            <div className="w-10 h-10 rounded bg-[#1e2667] flex items-center justify-center text-white font-medium">
              {userInitial}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-xs text-gray-500">Welcome 👋</p>
              <p className="text-sm font-semibold text-gray-900 truncate">
                {userName}
              </p>
            </div>
            <ChevronRight className="w-4 h-4 text-gray-400" />
          </div>
        </Link>
      </div>
    </aside>
  );
}
