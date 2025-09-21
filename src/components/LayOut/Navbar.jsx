"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsOpen(!isOpen);
  useEffect(() => {
    const sections = [
      "home",
      "about",
      "process",
      "portfolio",
      "blog",
      "services",
      "contact",
    ];
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200; // Adjust offset for when a section is considered active

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        const element = document.getElementById(section);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(section);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Trigger once to set initial active section
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-white p-4 text-black shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link href="/" className="flex items-center space-x-3">
              <span className="inline-flex items-center justify-center w-10 h-10 bg-violet-600 text-white rounded-full font-semibold">
                A
              </span>
              <span className="text-black">Anshuman Panda</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-6 ">
            <Link
              href="#home"
              className={`px-4 py-2 rounded hover:text-white hover:bg-violet-600 ${
                activeSection === "home" ? "bg-violet-600 text-white" : ""
              }`}
            >
              Home
            </Link>
            <Link
              href="#about"
              className={`px-4 py-2 rounded hover:text-white hover:bg-violet-600 ${
                activeSection === "about" ? "bg-violet-600 text-white" : ""
              }`}
            >
              Abouts
            </Link>
            <Link
              href="#process"
              className={`px-4 py-2 rounded hover:text-white hover:bg-violet-600 ${
                activeSection === "process" ? "bg-violet-600 text-white" : ""
              }`}
            >
              Process
            </Link>
            <Link
              href="#portfolio"
              className={`px-4 py-2 rounded hover:text-white hover:bg-violet-600 ${
                activeSection === "portfolio" ? "bg-violet-600 text-white" : ""
              }`}
            >
              Portfolio
            </Link>
            <Link
              href="#blog"
              className={`px-4 py-2 rounded hover:text-white hover:bg-violet-600 ${
                activeSection === "blog" ? "bg-violet-600 text-white" : ""
              }`}
            >
              Blog
            </Link>
            <Link
              href="#services"
              className={`px-4 py-2 rounded hover:text-white hover:bg-violet-600 ${
                activeSection === "services" ? "bg-violet-600 text-white" : ""
              }`}
            >
              Services
            </Link>
            <Link
              href="#contact"
              className={`px-4 py-2 rounded bg-violet-600 hover:bg-violet-600 text-white ${
                activeSection === "contact" ? "bg-violet-600" : ""
              }`}
            >
              Contact
            </Link>
          </div>

          {/* Mobile Toggle */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 px-4 py-3 space-y-2">
          <Link
            href="/"
            onClick={toggleMenu}
            className="block hover:text-yellow-400"
          >
            Home
          </Link>
          <Link
            href="/about"
            onClick={toggleMenu}
            className="block hover:text-yellow-400"
          >
            About
          </Link>
          <Link
            href="/services"
            onClick={toggleMenu}
            className="block hover:text-yellow-400"
          >
            Services
          </Link>
          <Link
            href="/contact"
            onClick={toggleMenu}
            className="block hover:text-yellow-400"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}
