"use client";

import { useState, useEffect } from "react";
import { Pencil } from "lucide-react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function ProfilePage() {
  const router = useRouter();
  const { user, logout } = useAuthStore();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "••••••••",
    phone: "-",
  });

  useEffect(() => {
    if (user) {
      setFormData({
        name: user.name || "",
        email: user.email || "",
        password: "••••••••",
        phone: "-",
      });
    }
  }, [user]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogout = () => {
    logout();
    router.push("/login");
  };

  const userInitial = formData.name?.charAt(0)?.toUpperCase() || "A";

  return (
    <div className="p-8 pb-4 bg-white font-sans min-h-full flex flex-col">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Profile</h1>
        <p className="text-gray-500 italic">
          Manage your account information and security.
        </p>
      </div>

      {/* Profile Card */}
      <div className="bg-white rounded-xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] border border-gray-100 p-8 mb-8">
        <div className="flex justify-between items-center mb-8 border-b border-gray-100 pb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Profile details
          </h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="p-2 hover:bg-gray-50 rounded-full transition-colors cursor-pointer"
          >
            <Pencil className="w-5 h-5 text-gray-400" />
          </button>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start">
          {/* Avatar */}
          <div className="w-16 h-16 rounded-xl bg-[#1e2667] flex items-center justify-center flex-shrink-0 text-white text-2xl font-medium">
            {userInitial}
          </div>

          {/* Form Fields */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8 w-full">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 block">
                Name
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-[#ecf2f9] border border-blue-100 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#1e2667] outline-none text-[#1e2667]"
                />
              ) : (
                <p className="text-[#1e2667] font-medium text-base">
                  {formData.name}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 block">
                Email Id
              </label>
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-[#ecf2f9] border border-blue-100 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#1e2667] outline-none text-[#1e2667]"
                />
              ) : (
                <p className="text-[#1e2667] font-medium text-base">
                  {formData.email}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 block">
                Password
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full bg-[#ecf2f9] border border-blue-100 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#1e2667] outline-none text-[#1e2667]"
                />
              ) : (
                <p className="text-[#1e2667] font-medium text-base">
                  {formData.password}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-500 block">
                Phone number
              </label>
              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-[#ecf2f9] border border-blue-100 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-[#1e2667] outline-none text-[#1e2667]"
                />
              ) : (
                <p className="text-[#1e2667] font-medium text-base">
                  {formData.phone}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Logout Button */}
      <div className="flex justify-end">
        <button
          onClick={handleLogout}
          className="px-8 py-3 rounded-lg text-white font-medium bg-[#ce1313] hover:bg-opacity-90 transition-opacity cursor-pointer"
        >
          Logout
        </button>
      </div>
    </div>
  );
}
