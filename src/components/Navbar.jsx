import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const Navbar = ({ isDarkMode, toggleColorMode }) => {
  return (
    <nav className={`h-[10vh]`}>
      <div
        className="p-4 bg-sky-200 text-gray-800 shadow-lg
       dark:bg-sky-950 dark:text-white"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo flex flex-col items-center justify-center">
            <h1 className="text-2xl font-bold text-blue-500 dark:text-blue-400">
              🌥️WEATHER{" "}
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300 -mt-1">
              WEATHER, SIMPLIFIED
            </p>
          </div>

          {/* color mode */}
          <Tippy
            content={
              isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"
            }
            placement="top"
            animation="fade"
            delay={[100, 50]}
            interactive={true}
          >
            <button
              onClick={toggleColorMode}
              className="p-1 sm:p-2 rounded-md bg-gray-300 dark:bg-gray-600"
            >
              {isDarkMode ? (
                <FaSun color="orange" size={25} />
              ) : (
                <FaMoon color="#FFE862" size={25} />
              )}
            </button>
          </Tippy>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
