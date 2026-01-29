import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTiktok,
  FaTwitter,
} from "react-icons/fa6";

const footerSections = [
  {
    title: "Browse Popular Models",
    links: [
      { label: "Honda Civic", path: "/cars/honda-civic" },
      { label: "Toyota Corolla", path: "/cars/toyota-corolla" },
      { label: "Hyundai Elantra", path: "/cars/hyundai-elantra" },
      { label: "Toyota RAV4", path: "/cars/toyota-rav4" },
      { label: "Nissan Rogue", path: "/cars/nissan-rogue" },
      { label: "Honda CR-V", path: "/cars/honda-crv" },
      { label: "Tesla Model 3", path: "/cars/tesla-model-3" },
      { label: "Mazda CX-5", path: "/cars/mazda-cx-5" },
      { label: "Kia Forte", path: "/cars/kia-forte" },
      { label: "Toyota Camry", path: "/cars/toyota-camry" },
      { label: "Mazda Mazda3", path: "/cars/mazda-3" },
    ],
  },
  {
    title: "Browse by Body Style",
    links: [
      { label: "SUV", path: "/browse/suv" },
      { label: "Sedan", path: "/browse/sedan" },
      { label: "Hatchback", path: "/browse/hatchback" },
      { label: "Wagon", path: "/browse/wagon" },
      { label: "Truck", path: "/browse/truck" },
      { label: "Van", path: "/browse/van" },
      { label: "Coupe", path: "/browse/coupe" },
      { label: "Convertible", path: "/browse/convertible" },
    ],
  },
  {
    title: "Browse by Location",
    links: [
      { label: "Used Cars in Toronto, ON", path: "/used-cars/toronto-on" },
      { label: "Used Cars in Brampton, ON", path: "/used-cars/brampton-on" },
      {
        label: "Used Cars in Mississauga, ON",
        path: "/used-cars/mississauga-on",
      },
      { label: "Used Cars in Markham, ON", path: "/used-cars/markham-on" },
      { label: "Used Cars in Ottawa, ON", path: "/used-cars/ottawa-on" },
      { label: "Used Cars in Hamilton, ON", path: "/used-cars/hamilton-on" },
      { label: "Used Cars in London, ON", path: "/used-cars/london-on" },
      { label: "Used Cars in Oshawa, ON", path: "/used-cars/oshawa-on" },
      { label: "Used Cars in Kitchener, ON", path: "/used-cars/kitchener-on" },
      { label: "Used Cars in Newmarket, ON", path: "/used-cars/newmarket-on" },
      { label: "View More", path: "/used-cars" },
    ],
  },
  {
    title: "Sell My Car",
    links: [
      { label: "Sell My Car in Toronto", path: "/sell-car/toronto-on" },
      { label: "Sell My Car in Mississauga", path: "/sell-car/mississauga-on" },
      { label: "Sell My Car in London", path: "/sell-car/london-on" },
      { label: "Sell My Car in Ottawa", path: "/sell-car/ottawa-on" },
      { label: "Sell My Car in Kitchener", path: "/sell-car/kitchener-on" },
      { label: "Sell My Car in Hamilton", path: "/sell-car/hamilton-on" },
      { label: "Sell My Car in Halifax", path: "/sell-car/halifax-ns" },
      { label: "Sell My Car in Vancouver", path: "/sell-car/vancouver-bc" },
      { label: "View More", path: "/sell-car" },
    ],
  },
];

const bottomSections = [
  {
    title: "Explore",
    links: [
      { label: "Home", path: "/" },
      { label: "Shop cars", path: "/cars" },
      { label: "Sell or Trade", path: "/sell-car" },
      { label: "Finance", path: "/finance" },
      { label: "Car Loan Calculator", path: "/tools/car-loan-calculator" },
      { label: "Vehicle Protection", path: "/vehicle-protection" },
      { label: "Car Value Calculator", path: "/tools/car-value-calculator" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About AUTOBON", path: "/about" },
      { label: "Careers", path: "/careers" },
      { label: "Blog", path: "/blog" },
      { label: "FAQ", path: "/faq" },
    ],
  },
];

function Footer() {
  return (
    <footer className="p-5.5 lg:py-6.75   lg:px-27.5 lg:pb-20 ">
    <div className="max-w-[1508px] mx-auto ">
        {/* Logo */}
      <div className="flex items-center justify-center mb-10">
        <Link href="/" className="flex items-center">
          <Image
            src="/icons/autobonLogo.png"
            alt="Autobon Logo"
            width={390}
            height={75}
            className="w-auto h-8 lg:h-10"
          />
        </Link>
      </div>

      {/* MAIN SECTIONS */}
      <div className=" mx-auto grid grid-cols-2  lg:grid-cols-4 gap-12">
        {footerSections.map((section) => (
          <FooterColumn key={section.title} {...section} />
        ))}
      </div>

      {/* BOTTOM SECTIONS */}
      <div className=" mx-auto mt-16 grid grid-cols-2 lg:grid-cols-3 gap-12">
        {bottomSections.map((section) => (
          <FooterColumn key={section.title} {...section} />
        ))}

        {/* CONTACT */}
        <div className="space-y-4">
          <div className="space-y-4 lg:space-y-8">
          <div className="font-['Poppins'] font-semibold text-[13.99px] leading-[17.68px] tracking-[0] align-middle lg:text-[24px] lg:leading-[30.32px]">
            Contact Us
          </div>
          <ul className="space-y-1.5 lg:space-y-3 text-sm">
            <li>
              <Link
                href="/chat"
                className="font-['Poppins'] font-normal text-[12.24px] leading-[15.71px] tracking-[0] align-middle lg:text-[21px] lg:leading-[26.95px] hover:text-primary transition underline text-[#595959]"
              >
                Chat with us
              </Link>
            </li>
            <li>
              <Link
                href="tel:+16479555340"
                className="font-['Poppins'] font-normal text-[12.24px] leading-[15.71px] tracking-[0] align-middle lg:text-[21px] lg:leading-[26.95px] hover:text-primary transition text-[#595959]"
              >
                (647) 955-5340
              </Link>
            </li>
            <li>
              <Link
                href="mailto:support@autobon.com"
                className="font-['Poppins'] font-normal text-[12.24px] leading-[15.71px] tracking-[0] align-middle lg:text-[21px] lg:leading-[26.95px] hover:text-primary transition text-[#595959]"
              >
                support@autobon.com
              </Link>
            </li>
            <li>
              <Link
                href="/locations"
                className="font-['Poppins'] font-normal text-[12.24px] leading-[15.71px] tracking-[0] align-middle lg:text-[21px] lg:leading-[26.95px] hover:text-primary transition text-[#595959]"
              >
                Locations
              </Link>
            </li>
          </ul>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#">
              <FaFacebookF size={28} />
            </Link>
            <Link href="#">
              <FaTwitter size={28} />
            </Link>
            <Link href="#">
              <FaInstagram size={28} />
            </Link>
            <Link href="#">
              <FaLinkedinIn size={28} />
            </Link>
            <Link href="#">
              <FaTiktok size={28} />
            </Link>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between gap-2 lg:gap-4 text-center lg:text-left pt-8">
        <div className="font-['Poppins'] font-normal text-[9.72px] leading-[13.45px] tracking-[0] text-center align-middle lg:text-[17.52px] lg:leading-[24.26px]">
          © 2025 Clutch Technologies Inc. All Rights Reserved.
        </div>

        <div className="font-['Poppins'] font-normal text-[9.64px] leading-[13.45px] tracking-[0] align-middle lg:text-[17.38px] lg:leading-[24.26px]">
          <Link href="#" className="hover:text-primary transition">
            Terms of Service
          </Link>

          <span className="mx-2">|</span>

          <Link href="#" className="hover:text-primary transition">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
    </footer>
  );
}

export default Footer;

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; path: string }[];
}) {
  return (
    <div className="space-y-4 lg:space-y-8">
      <div className="font-['Poppins'] font-semibold text-[13.99px] leading-[17.68px] tracking-[0] align-middle lg:text-[24px] lg:leading-[30.32px]">
        {title}
      </div>
      <ul className="space-y-1.5 lg:space-y-3 text-sm">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.path}
              className="font-['Poppins'] font-normal text-[12.24px] leading-[15.71px] tracking-[0] align-middle lg:text-[21px] lg:leading-[26.95px] hover:text-primary transition text-[#595959]"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
