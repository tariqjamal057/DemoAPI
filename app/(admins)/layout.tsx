"use client";
import React, { useState } from "react";
import Header, { SearchIcon } from "@/components/admin/layouts/header";
import { AppSidebar } from "@/components/app-sidebar";
import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import Footer from "@/components/admin/layouts/footer";

const AdminLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <Header />
        <main className="flex-1 min-h-screen">
          <div className="flex justify-between items-center m-4 md:m-8 md:hidden">
            <h2 className="text-sm font-mediumb text-[#7D7D7D]">
              Admin Dashboard
            </h2>
            <div className="relative">
              <SearchIcon className="absolute left-2.5 top-[9px] h-3 w-3 text-gray-500" />
              <input
                type="search"
                placeholder="Search..."
                className="w-40 rounded-full bg-gray-100 pl-8 p-1.5 text-xs focus:outline-none  focus-active:ring-0"
              />
            </div>
          </div>
          {children}
        </main>
        <Footer />
      </SidebarInset>
    </SidebarProvider>
  );
};

export default AdminLayout;
