import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Autobon - Transform Your Business",
  description:
    "Transform your business with Autobon's innovative automation solutions. Experience the future of productivity today.",
};

import { Providers } from "@/lib/providers";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={poppins.variable}>
      <body className="font-poppins antialiased bg-[#F6F6F6]">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
