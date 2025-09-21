"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className=" text-black bg-white p-4">
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
              href="/"
              className="hover:text-white hover:bg-violet-700  px-4 py-2"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="hover:text-white hover:bg-violet-700   px-4 py-2"
            >
              Abouts
            </Link>
            <Link
              href="/services"
              className="hover:text-white hover:bg-violet-700   px-4 py-2"
            >
              Process
            </Link>
            <Link
              href="/services"
              className="hover:text-white hover:bg-violet-700 px-4 py-2"
            >
              Portfolio
            </Link>
            <Link
              href="/services"
              className="hover:text-white hover:bg-violet-700   px-4 py-2"
            >
              Blog
            </Link>
            <Link
              href="/services"
              className="hover:text-white hover:bg-violet-700 px-4 py-2"
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="bg-violet-600 hover:bg-violet-700 rounded-lg shadow-md px-4 py-2 text-white"
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
