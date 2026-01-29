"use client";
import React, { useState } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBanner, setShowBanner] = useState(true);

  const navLinks = [
    { name: "Buy Cars", href: "/shop" },
    { name: "Sell or Trade", href: "/sell-or-trade" },
    { name: "Financing", href: "/finance" },
    { name: "How it Works", href: "/sell-or-trade#howItWorks" },
  ];

  return (
    <>
      {/* 1. Promotion Banner */}
      {showBanner && (
        <div className="w-full bg-transparent">
          <div className="max-w-custom mx-auto flex items-center justify-center py-[16px] px-[20px] relative">
            <p className="text-[10px] sm:text-[16px] text-black font-medium text-center">
              <span className="font-medium underline">The Easiest Way</span>
              &nbsp; to Buy or Sell or Rent a Car
            </p>
            <button
              onClick={() => setShowBanner(false)}
              className="absolute right-4 p-1 hover:opacity-60 transition-opacity"
            >
              <X size={20} />
            </button>
          </div>
        </div>
      )}

      {/* 2. Header */}
      <header className="w-full h-[80px]  md:h-[100px] shadow-[0px_4px_23px_0px_#0000000F] bg-white sticky top-0 z-[100]">
        <div className="max-w-custom h-full mx-auto flex items-center justify-between px-[20px] lg:px-[0px]">
          {/* Logo Area */}
          <a href="/" className="flex justify-start items-center">
            <img
              src="/logo.png"
              alt="Autobon Logo"
              width={320}
              height={60}
              className="object-contain w-[130px] h-[50px] sm:w-[220px] sm:h-[40px]"
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden sm:block">
            <ul className="flex cursor-pointer gap-[40px] text-nowrap text-[16px] text-black justify-center items-center">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="transition-colors duration-300 hover:text-primary active:text-primary hover:underline"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Desktop Sign In Button - Styled as Black Button */}
          <a
            href="/auth/login"
            className="hidden sm:flex items-center justify-center bg-black text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:bg-gray-800 hover:scale-105 active:scale-95"
          >
            Sign In
          </a>

          <button
            className="sm:hidden p-2 z-[110]"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Backdrop Overlay */}
        <div
          className={`fixed inset-0 bg-black/50 transition-opacity duration-300 sm:hidden ${
            isOpen ? "opacity-100 visible" : "opacity-0 invisible"
          }`}
          onClick={() => setIsOpen(false)}
        />

        <div
          className={`fixed top-0 right-0 h-full w-[280px] bg-white z-[105] shadow-2xl transform transition-transform duration-300 ease-in-out sm:hidden flex flex-col p-8 pt-24 gap-8 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-[80px] text-[18px] text-black font-semibold">
            {navLinks.map((link) => (
              <li key={link.name} onClick={() => setIsOpen(false)}>
                <a
                  href={link.href}
                  className="w-full block transition-colors duration-300 hover:text-primary"
                >
                  {link.name}
                </a>
              </li>
            ))}

            {/* Mobile Sign In - Styled as Black Button */}
            <li onClick={() => setIsOpen(false)} className="mt-4">
              <a
                href="/signin"
                className="w-full flex items-center justify-center bg-black text-white py-4 rounded-full font-semibold   shadow-lg"
              >
                Sign In
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
