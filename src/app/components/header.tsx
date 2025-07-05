"use client";
import Link from "next/link";
import { useState } from "react";

export default function HeaderNav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="text-xl font-bold text-black">
          <Link href="/">
            The<span className="italic">Villas</span>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 focus:outline-none"
            aria-label="Toggle menu"
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
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

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-black font-medium">
          <li>
            <Link href="/" className="hover:text-indigo-600">
              Home
            </Link>
          </li>
          <div>
            <li>
              <div className="relative group">
                <button className="hover:text-indigo-600 focus:outline-none flex items-center space-x-1">
                  <span>About</span>
                  <svg
                    className="w-4 h-4 mt-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>

                {/* Dropdown Menu */}
                <div className="absolute left-0 mt-2 w-40 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 group-hover:visible transition-opacity duration-200 z-50">
                  <Link
                    href="/about-us/"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    About page-2
                  </Link>
                  <Link
                    href="/about-us2"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our History
                  </Link>
                  <Link
                    href="/about/mission"
                    className="block px-4 py-2 hover:bg-gray-100"
                  >
                    Our Mission
                  </Link>
                </div>
              </div>

              {/* <Link href="/about" className="hover:text-indigo-600">
                About
              </Link> */}
            </li>
          </div>
          <li>
            <Link href="/villas" className="hover:text-indigo-600">
              Our Villas
            </Link>
          </li>
          <li>
            <Link href="/services" className="hover:text-indigo-600">
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact-us" className="hover:text-indigo-600">
              Contacts
            </Link>
          </li>
          <li>
            <Link href="/language" className="hover:text-indigo-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
              >
                <rect
                  x="1"
                  y="4"
                  width="30"
                  height="24"
                  rx="4"
                  ry="4"
                  fill="#071b65"
                ></rect>
                <path
                  d="M5.101,4h-.101c-1.981,0-3.615,1.444-3.933,3.334L26.899,28h.101c1.981,0,3.615-1.444,3.933-3.334L5.101,4Z"
                  fill="#fff"
                ></path>
                <path
                  d="M22.25,19h-2.5l9.934,7.947c.387-.353,.704-.777,.929-1.257l-8.363-6.691Z"
                  fill="#b92932"
                ></path>
                <path
                  d="M1.387,6.309l8.363,6.691h2.5L2.316,5.053c-.387,.353-.704,.777-.929,1.257Z"
                  fill="#b92932"
                ></path>
                <path
                  d="M5,28h.101L30.933,7.334c-.318-1.891-1.952-3.334-3.933-3.334h-.101L1.067,24.666c.318,1.891,1.952,3.334,3.933,3.334Z"
                  fill="#fff"
                ></path>
                <rect x="13" y="4" width="6" height="24" fill="#fff"></rect>
                <rect x="1" y="13" width="30" height="6" fill="#fff"></rect>
                <rect x="14" y="4" width="4" height="24" fill="#b92932"></rect>
                <rect
                  x="14"
                  y="1"
                  width="4"
                  height="30"
                  transform="translate(32) rotate(90)"
                  fill="#b92932"
                ></rect>
                <path
                  d="M28.222,4.21l-9.222,7.376v1.414h.75l9.943-7.94c-.419-.384-.918-.671-1.471-.85Z"
                  fill="#b92932"
                ></path>
                <path
                  d="M2.328,26.957c.414,.374,.904,.656,1.447,.832l9.225-7.38v-1.408h-.75L2.328,26.957Z"
                  fill="#b92932"
                ></path>
                <path
                  d="M27,4H5c-2.209,0-4,1.791-4,4V24c0,2.209,1.791,4,4,4H27c2.209,0,4-1.791,4-4V8c0-2.209-1.791-4-4-4Zm3,20c0,1.654-1.346,3-3,3H5c-1.654,0-3-1.346-3-3V8c0-1.654,1.346-3,3-3H27c1.654,0,3,1.346,3,3V24Z"
                  opacity=".15"
                ></path>
                <path
                  d="M27,5H5c-1.657,0-3,1.343-3,3v1c0-1.657,1.343-3,3-3H27c1.657,0,3,1.343,3,3v-1c0-1.657-1.343-3-3-3Z"
                  fill="#fff"
                  opacity=".2"
                ></path>
              </svg>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Menu */}
      {/* {isOpen && (
        <div className="md:hidden px-4 pb-4">
          <ul className="space-y-4 text-black font-medium">
            <li>
              <Link
                href="/"
                className="block hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                className="block hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/our-villas"
                className="block hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Our Villas
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="block hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/contacts"
                className="block hover:text-indigo-600"
                onClick={() => setIsOpen(false)}
              >
                Contacts
              </Link>
            </li>
          </ul>
        </div>
      )} */}
    </header>
  );
}
