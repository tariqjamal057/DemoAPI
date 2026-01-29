import React from "react";
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react";

const Footer = () => {
  const footerData = [
    {
      title: "Browse Popular Models",
      links: [
        "Honda Civic",
        "Toyota Corolla",
        "Hyundai Elantra",
        "Toyota RAV4",
        "Nissan Rogue",
        "Honda CR-V",
        "Tesla Model 3",
        "Mazda CX-5",
        "Kia Forte",
        "Toyota Camry",
        "Mazda Mazda3",
        "View More",
      ],
    },
    {
      title: "Browse by Body Style",
      links: [
        "SUV",
        "Sedan",
        "Hatchback",
        "Wagon",
        "Truck",
        "Van",
        "Coupe",
        "Convertible",
        "View More",
      ],
    },
    {
      title: "Browse by Location",
      links: [
        "Used Cars in Toronto, ON",
        "Used Cars in Brampton, ON",
        "Used Cars in Mississauga, ON",
        "Used Cars in Markham, ON",
        "Used Cars in Ottawa, ON",
        "Used Cars in Hamilton, ON",
        "Used Cars in London, ON",
        "Used Cars in Oshawa, ON",
        "Used Cars in Kitchener, ON",
        "Used Cars in Newmarket, ON",
        "View More",
      ],
    },
    {
      title: "Sell My Car",
      links: [
        "Sell My Car in Toronto",
        "Sell My Car in Mississauga",
        "Sell My Car in London",
        "Sell My Car in Ottawa",
        "Sell My Car in Kitchener",
        "Sell My Car in Hamilton",
        "Sell My Car in Halifax",
        "Sell My Car in Vancouver",
      ],
    },
    {
      title: "Explore",
      links: [
        "Home",
        "Shop cars",
        "Sell or Trade",
        "Finance",
        "Locations",
        "Car Loan Calculator",
        "Car Value Calculator",
      ],
    },
    {
      title: "Company",
      links: ["About AUTOBON", "Careers", "Blog", "FAQ"],
    },
    {
      title: "Contact Us",
      links: [
        "Chat with us",
        "Call us at (647) 955-5340",
        "Email us at support@AUTOBON",
        "Locations",
      ],
    },
  ];

  return (
    <footer className="w-full py-16 px-6 border-t border-gray-100">
      <div className="max-w-[1200px] mx-auto flex flex-col">
        {/* 1. LOGO - Centered */}
        <div className="mb-12 md:mb-[100px] flex justify-center">
          <img
            src="/logo.png"
            alt="Autobon Logo"
            className="h-[50px] w-auto object-contain"
          />
        </div>

        {/* 2. UNIFIED GRID SYSTEM */}
        {/* Using a consistent 4-column grid on desktop ensures lists align vertically */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {footerData.map((section, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-3 items-start text-left"
            >
              <h4 className="font-semibold text-black mb-1">{section.title}</h4>
              <div className="flex flex-col gap-2">
                {section.links.map((link) => (
                  <p
                    key={link}
                    className="text-[#595959] text-[14px] cursor-pointer hover:text-black transition-colors"
                  >
                    {link}
                  </p>
                ))}
              </div>

              {/* Social Icons - Only under Contact Us */}
              {section.title === "Contact Us" && (
                <div className="flex gap-4 mt-4">
                  <Facebook
                    fill="currentColor"
                    className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors"
                  />
                  <Instagram className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors" />
                  <Twitter
                    fill="currentColor"
                    className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors"
                  />
                  <Linkedin
                    fill="currentColor"
                    className="w-5 h-5 text-black hover:text-primary cursor-pointer transition-colors"
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* 3. BOTTOM CREDITS */}
        <div className="w-full flex flex-col items-center border-t border-gray-100 pt-8">
          <p className="text-black text-[14px] mb-2 text-center">
            © 2026 AUTOBON. All Rights Reserved.
          </p>
          <div className="text-[14px] text-black font-medium flex gap-2">
            <span className="cursor-pointer hover:text-black transition-colors">
              Terms of Service
            </span>
            <span className="text-gray-300">|</span>
            <span className="cursor-pointer hover:text-black transition-colors">
              Privacy Policy
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
