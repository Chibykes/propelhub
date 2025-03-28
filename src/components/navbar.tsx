import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

const HERO_NAV_LINKS = [
  { name: "Home", href: "#" },
  { name: "Why Choose Us", href: "#" },
  { name: "How It Works", href: "#" },
  { name: "Features", href: "#" },
  { name: "FAQs", href: "#" },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 640) {
        setIsMobile(false);
        setIsMenuOpen(false);
        return;
      }

      setIsMobile(true);
    };

    const handleScroll = () => {
      if (window.scrollY > 200) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <nav className="flex w-full flex-wrap items-center justify-between rounded-xl bg-white px-4 py-4 sm:flex-nowrap sm:px-10 sm:py-6">
      <img src="/logo.png" alt="Propelhub" className="h-6 sm:h-8" />

      <div className="hidden w-full flex-col items-center space-y-4 sm:flex sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-8">
        {HERO_NAV_LINKS.map((link) => (
          <a href={link.href} className="text-gray-900">
            {link.name}
          </a>
        ))}
      </div>

      <button
        className="block sm:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          className="h-6 w-6 text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>
      <div
        className={cn(
          isMobile
            ? isMenuOpen
              ? "mt-4 max-h-screen opacity-100"
              : "max-h-0 opacity-0"
            : "max-h-screen opacity-100",
          "flex w-full flex-col items-center space-y-4 transition-all duration-300 ease-in-out sm:flex sm:w-auto sm:flex-row sm:space-y-0 sm:space-x-8",
        )}
      >
        {HERO_NAV_LINKS.map((link) => (
          <a href={link.href} className="inline-flex text-gray-900 sm:hidden">
            {link.name}
          </a>
        ))}
        <a href="#" className="text-primary">
          Login
        </a>
        <a
          href="#"
          className="text-primary border-primary hover:bg-primary rounded-sm border bg-transparent px-4 py-2 text-sm duration-200 hover:text-white sm:text-base"
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};
