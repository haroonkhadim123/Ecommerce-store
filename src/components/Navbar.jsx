import React, { useState } from "react";
import { FaCartShopping, FaBars, FaXmark } from "react-icons/fa6"; // ✅ use FaXmark
import { Link, NavLink } from "react-router-dom";
import image3 from '../assets/image3.jpg'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="w-full bg-white shadow-2xl border-b border-gray-200 sticky top-0 z-20">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo */}
       <img className="w-[50px] rounded-4xl" src={image3} alt="" />

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-4 border-blue-600 text-black" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-4 border-blue-600 text-black" : ""
            }
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? "border-b-4 border-blue-600 text-black" : ""
            }
            to="/cart"
          >
            Cart
          </NavLink>
          <Link to="/cart">
            <FaCartShopping className="text-xl" />
          </Link>
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl focus:outline-none"
        >
          {isOpen ? <FaXmark /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 bg-white shadow-lg">
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 text-black" : ""
            }
            to="/"
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 text-black" : ""
            }
            to="/collection"
          >
            Collection
          </NavLink>
          <NavLink
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              isActive ? "border-b-2 border-blue-600 text-black" : ""
            }
            to="/cart"
          >
            Cart
          </NavLink>
          <Link onClick={() => setIsOpen(false)} to="/cart">
            <FaCartShopping className="text-xl" />
          </Link>
          <Link
            onClick={() => setIsOpen(false)}
            to="/contact"
            className="bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700"
          >
            Contact Us
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
