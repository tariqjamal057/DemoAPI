"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const Sidebar = ({ isSidebarOpen }: { isSidebarOpen: boolean }) => {
  const router = useRouter();

  const navigation = [
    {name: "Dashboard", href: "/admin/dashboard"},
    { name: "User Management", href: "/admin/user-management" },
    { name: "Listings Management", href: "/admin/listings-management" },
    { name: "Inquiry/Messages", href: "/admin/inquiry-messages" },
    { name: "Location/Market Control", href: "/admin/location-market-control" },
    { name: "Analytics", href: "/admin/analytics" },
    { name: "Content Management", href: "/admin/content-management" },
    { name: "Admin Settings", href: "/admin/settings" },
  ];

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
      });

      if (response.ok) {
        // Clear localStorage
        localStorage.removeItem('user');
        // Clear cookies by setting them to expire
        document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
        toast.success('Logged out successfully');
        router.push('/auth/login');
      } else {
        toast.error('Logout failed');
      }
    } catch (error) {
      toast.error('Logout failed');
    }
  };

  return (
    <aside
      className={cn(
        "fixed inset-y-0 left-0 z-10 top-14 w-64 flex-col border-r bg-gray-100 sm:flex",
        {
          "flex sm:hidden": isSidebarOpen,
          "hidden sm:flex": !isSidebarOpen,
        }
      )}
    >
      <div className="flex items-center justify-start p-4">
        <h2 className="text-lg font-semibold">Admin Dashboard</h2>
      </div>
      <nav className="flex-grow p-4">
        <ul className="space-y-2">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="block rounded-md px-4 py-2 text-gray-700 hover:bg-gray-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={handleLogout}
              className="block w-full text-left rounded-md px-4 py-2 text-gray-700 hover:bg-gray-200"
            >
              Logout
            </button>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
