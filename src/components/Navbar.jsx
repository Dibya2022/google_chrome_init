import React, { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isDropdownOpen_support, setIsDropdownOpenSupport] = useState(false);
  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        // Scroll down
        setShow(false);
      } else {
        // Scroll up
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // Cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);
  return (
    <div>
      <nav
        className={`fixed w-full  shadow-md p-4 transition-transform duration-300 ${
          show ? "transform translate-y-0" : "transform -translate-y-full"
        }`}
      >
        <div className="container ml-2  flex  items-center">
          <img className="h-9 w-9 " src={logo} alt="chrome logo" />
          <span className="text-2xl ml-2  ">Chrome</span>
          <ul className=" flex ml-8 space-x-4 ">
            <li>Home</li>
            <li>The Browser by Google</li>
            <li>
              <div className="relative group">
                <div
                  className="flex"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  Features
                  <button
                    className="flex items-center justify-center w-5 h-5 pt-1  "
                    aria-label="dropdown"
                  >
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </div>
                {isDropdownOpen && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white  shadow-lg py-2 z-20"
                    onMouseEnter={() => setIsDropdownOpen(true)}
                    onMouseLeave={() => setIsDropdownOpen(false)}
                  >
                    <a
                      href="#Overview"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Overview
                    </a>
                    <a
                      href="#Google address barx`"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Google address bar
                    </a>
                    <a
                      href="#Password check"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Password check
                    </a>
                    <a
                      href="#Use across devices"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Use across devices
                    </a>
                    <a
                      href="#Dark mode"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Dark mode
                    </a>
                    <a
                      href="#Tabs"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Tabs
                    </a>
                    <a
                      href="#Articles for you"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Articles for you
                    </a>
                    <a
                      href="#Extensions"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Extensions
                    </a>
                  </div>
                )}
              </div>
            </li>
            <li>
              <div className="relative group">
                <div
                  className="flex"
                  onMouseEnter={() => setIsDropdownOpenSupport(true)}
                  onMouseLeave={() => setIsDropdownOpenSupport(false)}
                >
                  Support
                  <button
                    className="flex items-center justify-center w-5 h-5 pt-1  "
                    aria-label="dropdown"
                  >
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </div>
                {isDropdownOpen_support && (
                  <div
                    className="absolute right-0 mt-2 w-48 bg-white   shadow-lg py-2 z-20"
                    onMouseEnter={() => setIsDropdownOpenSupport(true)}
                    onMouseLeave={() => setIsDropdownOpenSupport(false)}
                  >
                    <a
                      href="#Overview"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Helpful tips for Chrome
                    </a>
                    <a
                      href="#Google address barx`"
                      className="block px-4 py-2 hover:bg-gray-200"
                    >
                      Support
                    </a>
                  </div>
                )}
              </div>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
