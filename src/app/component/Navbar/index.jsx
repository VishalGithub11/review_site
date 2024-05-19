"use client"
import { useState } from 'react';
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const topLinks = [
    {
      name: "About",
      to: "/about"
    },
    {
      name: "Verification Process",
      to: "/verification-process"
    },
    {
      name: "Contact Us",
      to: "/contact-us"
    },
  ]

  return (
    <>
      <nav className="bg-white py-4 border-b border-gray-300">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/">
                <p className="flex items-center cursor-pointer" onClick={toggleNavbar}>
                  <img src="/logo.svg" alt="Logo" className="h-8 mr-2" />
                </p>
              </Link>
            </div>
            
            <div className="md:hidden">
              <button onClick={toggleNavbar} className="text-gray-800 focus:outline-none">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>

            <div className="hidden md:flex justify-end items-center flex-grow">
              {topLinks.map((item, i) => (
                <Link key={i} href={item.to}>
                  <p className="text-gray-800 hover:text-black px-4">{item.name}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    
      {/* Side panel */}
      <div className={`md:hidden fixed top-0 right-0 h-full bg-white w-60 z-50 ${isOpen ? 'block' : 'hidden'} border-l border-gray-300`}>
        <div className="">
          <div className="flex justify-end p-4">
            <button onClick={toggleNavbar} className="focus:outline-none">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-start items-start h-full">
          {topLinks.map((item, i) => (
            <Link key={i} href={item.to}>
              <p className="text-gray-800 hover:text-black px-4 py-2">{item.name}</p>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;



