import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="px-4 md:px-8 py-2 flex justify-between items-center shadow-md">
      <h1 className="font-semibold text-2xl text-blue-600"><Link href="/">Autobon</Link></h1>
      <p>905-800-3100</p>
    </header>
  );
};

export default Header;
