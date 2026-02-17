'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image 
              src="/images/logo/nutriheaven.jpg" 
              alt="NutriHeaven Logo" 
              width={50} 
              height={50}
              className="rounded-lg"
            />
            <span className="text-lg font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent hidden sm:inline">
              NutriHeaven
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="#products"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Products
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#"
              className="text-gray-700 hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <button className="hidden md:block btn-primary">
            Shop Now
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 animate-fadeInUp">
            <Link href="/" className="block py-2 text-gray-700 hover:text-primary">
              Home
            </Link>
            <Link href="#products" className="block py-2 text-gray-700 hover:text-primary">
              Products
            </Link>
            <Link href="#" className="block py-2 text-gray-700 hover:text-primary">
              About
            </Link>
            <Link href="#" className="block py-2 text-gray-700 hover:text-primary">
              Contact
            </Link>
            <button className="w-full mt-4 btn-primary">Shop Now</button>
          </div>
        )}
      </div>
    </nav>
  );
}
