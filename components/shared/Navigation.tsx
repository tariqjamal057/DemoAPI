"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/buy-car", label: "Buy Cars" },
    { href: "/sell-cars", label: "Sell or Trade" },
    { href: "/", label: "How It Works" },
    { href: "/", label: "Reviews" },
    { href: "/finance", label: "Financing" },
  ];

  const getLinkClass = (href: string) =>
    `hover:text-primary-500 ${
      pathname === href ? "text-primary font-semibold" : "text-secondary"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="p-5.5 lg:py-6.75   lg:px-27.5">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-34">
            <Link href="/" className="flex items-center">
              <Image
                src="/icons/autobonLogo.png"
                alt="Autobon Logo"
                width={200}
                height={37}
                className="w-auto h-6 md:h-8 lg:h-10"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden lg:flex space-x-8 mt-2">
              {navItems.map(({ href, label }) => (
                <Link key={label} href={href} className={getLinkClass(href)}>
                  {label}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden lg:flex space-x-4">
            <Link
              href="/auth/login"
              className="text-secondary font-semibold hover:text-primary-500"
            >
              Sign In
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <div className="flex flex-col space-y-4 pt-4">
              {navItems.map(({ href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className={getLinkClass(href)}
                  onClick={() => setIsOpen(false)}
                >
                  {label}
                </Link>
              ))}
              <Link
                href="/auth/login"
                className="text-secondary font-semibold hover:text-primary-500"
                onClick={() => setIsOpen(false)}
              >
                Sign In
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
