"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

export default function HomePage() {
    const router = useRouter();
    const { isAuthenticated, accessToken } = useAuthStore();

    useEffect(() => {
        if (isAuthenticated && accessToken) {
            router.push("/dashboard");
        } else {
            router.push("/login");
        }
    }, [isAuthenticated, accessToken, router]);

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-[#F8FAFC]">
            <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 border-4 border-[#1e2667] border-t-transparent rounded-full animate-spin"></div>
                <p className="text-gray-600 font-medium">Loading...</p>
            </div>
        </div>
    );
}
