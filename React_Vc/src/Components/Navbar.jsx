import React, { useContext } from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import './Navbar.css'
import { UserAppContext } from "../context/UserAppContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { user, logout } = useContext(UserAppContext)

  return (
    <nav className="  shadow-md p-4 fixed w-full top-0 z-50" >
      <div className="Lt container mx-auto flex justify-between lg:justify-center items-center">
        {/* Logo or Brand Name */}
        <div>
          <Link to={"/"}>
            <h1 className="text-2xl lg:-ml-[270px] font-bold text-blue-600">
              Nexa AI
            </h1>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="Link hidden md:flex  space-x-6 lg:ml-[200px]">
          <Link to="Home" className="text-white hover:text-blue-600">
            <ScrollLink
              to="Home"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Home
            </ScrollLink>
          </Link>
          <Link to="#" smooth className="text-white hover:text-blue-600">
            <ScrollLink
              to="features"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Services
            </ScrollLink>
          </Link>
          <Link to="#" className="text-white hover:text-blue-600">
            <ScrollLink
              to="Prices"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Prices
            </ScrollLink>
          </Link>
          <Link to="#" className="text-white hover:text-blue-600">
            <ScrollLink
              to="contact"
              smooth={true}
              duration={800}
              className="cursor-pointer text-white hover:text-blue-600"
            >
              Contact
            </ScrollLink>
          </Link>
        </div>

        <div className="Link hidden  lg:translate-x-[250px] lg:block lg:space-x-4">


          {
            user ? (
              <div className="flex items-center gap-4 justify-around">
                {/* Profile Picture */}
                <Link to={'/profile'}>
                  <img src={user.profilePic} className="w-10 h-10 rounded-full border-2 border-blue-500 shadow-md" alt="Profile" />
                </Link>

                {/* Profile & Logout Options */}
                <div className="flex items-center gap-5">
                  {/* <Link
                    to={"/profile"}
                    className="mt-1 px-4 py-1 bg-red-600  rounded-md shadow-md hover:bg-red-700 text-blue-400 transition duration-300"
                  >
                    Profile
                  </Link> */}

                  <button
                    onClick={logout}
                    className="mt-1 px-4 py-1 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 transition duration-300"
                  >
                    Log Out
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex items-center gap-4">
                {/* Sign Up Button */}
                <Link to="/signup">
                  <button className="relative px-4 py-2 rounded-md border-2 border-blue-700 text-white font-semibold shadow-md overflow-hidden transition duration-500 hover:border-red-500 hover:text-red-500">
                    Sign Up
                  </button>
                </Link>

                {/* Login Button */}
                <Link to="/login">
                  <button className="relative px-4 py-2 rounded-md border-2 border-blue-700 text-white font-semibold shadow-md overflow-hidden transition duration-500 hover:border-red-500 hover:text-red-500">
                    Log In
                  </button>
                </Link>
              </div>
            )
          }



          {/* {
            (Sign === "Yes") ? (<Link to="/login" className="text-white hover:text-blue-600">
              <button className="relative px-4 py-2 rounded-md isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:border-red-500 before:-right-full before:hover:right-0  before:rounded-full  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-sm font-semibold    shadow-sm gap-x-2 hover: transition duration-500 disabled:opacity-50 disabled:pointer-events-none">
                Log In
              </button>
            </Link>) : (<Link to="" className="text-white hover:text-blue-600">
              <button className="relative px-4 py-2 rounded-md isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:border-red-500 before:-right-full before:hover:right-0  before:rounded-full  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-sm font-semibold    shadow-sm gap-x-2 hover: transition duration-500 disabled:opacity-50 disabled:pointer-events-none">
                Sign Up
              </button>
            </Link>)
          }
          {
            (login) ? (<Link to="/signup" className="text-white hover:text-blue-600">
              <button className="relative px-4 py-2 rounded-md isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:border-red-500 before:-right-full before:hover:right-0  before:rounded-full  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-sm font-semibold    shadow-sm gap-x-2 hover: transition duration-500 disabled:opacity-50 disabled:pointer-events-none">
                {login}
              </button>
            </Link>) : (<Link to="" className="text-white hover:text-blue-600">
              <button className="relative px-4 py-2 rounded-md isolation-auto z-10 border-2 border-blue-700 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full hover:border-red-500 before:-right-full before:hover:right-0  before:rounded-full  before:-z-10 before:aspect-square before:hover:scale-150 overflow-hidden before:hover:duration-700 inline-flex items-center justify-center  text-sm font-semibold    shadow-sm gap-x-2 hover: transition duration-500 disabled:opacity-50 disabled:pointer-events-none">
                Sign Up
              </button>
            </Link>)
          } */}
        </div>

        {/* Mobile Menu Button - Replacing peer logic with React state */}
        <button
          className="flex flex-col gap-2 w-8 md:hidden cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 transition-all ${isOpen
              ? "rotate-[225deg] origin-right -translate-x-[12px] -translate-y-[1px]"
              : ""
              }`}
          ></div>

          <div
            className={`rounded-2xl h-[3px] w-full bg-white duration-500 transition-all ${isOpen ? "opacity-100 rotate-[-225deg]" : "opacity-100"
              }`}
          ></div>
          <div
            className={`rounded-2xl h-[3px] w-1/2 bg-white duration-500 transition-all place-self-end ${isOpen
              ? "rotate-[225deg] origin-left translate-x-[12px] translate-y-[1px]"
              : ""
              }`}
          ></div>
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="Link md:hidden absolute top-16 left-0 w-full bg-blue-300 shadow-md"
        >
          <div className="flex flex-col items-center space-y-4 p-4">
            <Link
              to="/"
              className="text-white hover:text-blue-600"
            >
              <ScrollLink
                to="/"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Home
              </ScrollLink>
            </Link>
            <Link
              to="#"
              className="text-white hover:text-blue-600"

            >
              <ScrollLink
                to="features"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Services
              </ScrollLink>
            </Link>
            <Link
              to="#"
              className="text-white hover:text-blue-600"

            >
              <ScrollLink
                to="Prices"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Prices
              </ScrollLink>
            </Link>
            <Link
              to="#"
              className="text-white hover:text-blue-600"

            >
              <ScrollLink
                to="contact"
                smooth={true}
                duration={800}
                onClick={() => setIsOpen(false)}
                className="cursor-pointer text-white hover:text-blue-600"
              >
                Contact
              </ScrollLink>
            </Link>
            <Link to="#" className="text-white hover:text-blue-600">
              Log In
            </Link>
            <Link to="#" className="text-white hover:text-blue-600">
              Sign Up
            </Link>
          </div>
        </motion.div>
      )}

    </nav>
  );
}
