import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/#home" },
  { name: "About", href: "/#about" },
  { name: "Skills", href: "/#skills" },
  { name: "Projects", href: "/projects" },
  { name: "Experience", href: "/#experience" },
  { name: "Education", href: "/#education" },
  { name: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#090909]/80 backdrop-blur-md border-b border-zinc-800">
      <div className="max-w-7xl mx-auto h-20 flex items-center justify-between px-6">
        {/* Logo */}
        <Link to="/" className="text-3xl font-bold text-white hover:opacity-90 transition">
          <span className="text-orange-500">A</span>R
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navItems.map((item) => {
            const isProjectsPage = location.pathname === "/projects" && item.name === "Projects";
            return item.href.startsWith("/") && !item.href.includes("#") ? (
              <Link
                key={item.name}
                to={item.href}
                className={`transition duration-300 ${
                  isProjectsPage
                    ? "text-orange-500 font-semibold"
                    : "text-gray-300 hover:text-orange-500"
                }`}
              >
                {item.name}
              </Link>
            ) : (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-orange-500 transition duration-300"
              >
                {item.name}
              </a>
            );
          })}
        </nav>

        {/* Button */}
        <a
          href="/#contact"
          className="hidden lg:inline-block bg-orange-500 hover:bg-orange-600 px-6 py-2 rounded-lg text-white font-medium transition"
        >
          Let's Talk
        </a>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#141414] border-t border-zinc-800">
          <nav className="flex flex-col gap-5 px-6 py-6">
            {navItems.map((item) =>
              item.href.startsWith("/") && !item.href.includes("#") ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="text-gray-300 hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-300 hover:text-orange-500"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
