"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import Link from "next/link";

const Header = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    // Get user data from localStorage
    const userData = localStorage.getItem('user');
    if (userData) {
      setUser(JSON.parse(userData));
    }
  }, []);

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

  const getProfileDisplay = () => {
    if (!user) return { image: '', name: 'Loading...' };

    if (user.profilePhoto) {
      return { image: user.profilePhoto, name: user.name };
    } else {
      // Show first letter of name
      const firstLetter = user.name.charAt(0).toUpperCase();
      return { image: '', name: user.name, firstLetter };
    }
  };

  const { image, name, firstLetter } = getProfileDisplay();

  return (
    <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 shadow justify-between">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator
          orientation="vertical"
          className="mr-2 data-[orientation=vertical]:h-4"
        />
        <h1 className="text-2xl md:text-3xl font-bold md:font-semibold text-blue-600">
          <Link href="/">Autobon</Link>
        </h1>
      </div>
      <div className="flex items-center gap-4">
        <div className="relative hidden md:block">
          <SearchIcon className="absolute left-2.5 top-[12px] h-4 w-4 text-gray-500" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-gray-100 pl-8 md:w-[200px] lg:w-[300px] py-2 px-1 group-has-data-[collapsible=icon]/sidebar-wrapper:py-1.5"
          />
        </div>
        <div className="hidden md:block">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="flex items-center gap-2">
                <img
                  src="https://flagcdn.com/us.svg"
                  width="20"
                  alt="US Flag"
                />
                <span className="hidden sm:inline">ENG</span>
                <span className="text-gray-500 hidden sm:inline">(US)</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>
                <img
                  src="https://flagcdn.com/in.svg"
                  width="20"
                  alt="India Flag"
                />
                <span className="ml-2">HIN</span>
                <span className="ml-2 text-gray-500">(India)</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <img
                  src="https://flagcdn.com/in.svg"
                  width="20"
                  alt="India Flag"
                />
                <span className="ml-2">TAM</span>
                <span className="ml-2 text-gray-500">(India)</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2">
              {image ? (
                <img
                  src={image}
                  width="32"
                  height="32"
                  className="rounded-full"
                  alt="User Profile"
                />
              ) : (
                <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold">
                  {firstLetter}
                </div>
              )}
              <span className="hidden sm:inline capitalize">{name}</span>
              <ChevronDownIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Settings</DropdownMenuItem>
            <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
    //     <header className="flex px-4 md:px-8 py-2 w-full items-center justify-between border-b bg-white shadow-md">
    //       <div className="flex items-center justify-start">
    //         <h1 className="text-md md:text-xl font-semibold text-blue-600"           onClick={() => setIsSidebarOpen(!isSidebarOpen)}
    // >
    //           Autobon
    //         </h1>
    //       </div>
    //       <div className="flex items-center gap-4">
    //         <div className="relative hidden md:block">
    //           <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
    //           <Input
    //             type="search"
    //             placeholder="Search..."
    //             className="w-full rounded-lg bg-gray-100 pl-8 md:w-[200px] lg:w-[300px]"
    //           />
    //         </div>
    //        <div className="hidden md:block">
    //          <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="ghost" className="flex items-center gap-2">
    //               <img src="https://flagcdn.com/us.svg" width="20" alt="US Flag" />
    //               <span className="hidden sm:inline">ENG</span>
    //               <span className="text-gray-500 hidden sm:inline">(US)</span>
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent>
    //             <DropdownMenuItem>
    //               <img
    //                 src="https://flagcdn.com/in.svg"
    //                 width="20"
    //                 alt="India Flag"
    //               />
    //               <span className="ml-2">HIN</span>
    //               <span className="ml-2 text-gray-500">(India)</span>
    //             </DropdownMenuItem>
    //             <DropdownMenuItem>
    //               <img
    //                 src="https://flagcdn.com/in.svg"
    //                 width="20"
    //                 alt="India Flag"
    //               />
    //               <span className="ml-2">TAM</span>
    //               <span className="ml-2 text-gray-500">(India)</span>
    //             </DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //        </div>
    //         <DropdownMenu>
    //           <DropdownMenuTrigger asChild>
    //             <Button variant="ghost" className="flex items-center gap-2">
    //               <img
    //                 src="https://github.com/shadcn.png"
    //                 width="32"
    //                 height="32"
    //                 className="rounded-full"
    //                 alt="User Profile"
    //               />
    //               <span className="hidden sm:inline">John Doe</span>
    //               <ChevronDownIcon className="h-4 w-4" />
    //             </Button>
    //           </DropdownMenuTrigger>
    //           <DropdownMenuContent>
    //             <DropdownMenuItem>Profile</DropdownMenuItem>
    //             <DropdownMenuItem>Settings</DropdownMenuItem>
    //             <DropdownMenuItem>Logout</DropdownMenuItem>
    //           </DropdownMenuContent>
    //         </DropdownMenu>
    //       </div>
    //     </header>
  );
};

function MenuIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}

export function SearchIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

function ChevronDownIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export default Header;
