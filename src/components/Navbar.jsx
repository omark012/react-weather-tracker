import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const Navbar = ({ isDarkMode, toggleColorMode }) => {
  return (
    <nav className={`h-[10vh]`}>
      <div
        className="p-4 bg-white text-gray-800 shadow-lg
       dark:bg-gray-800 dark:text-white"
      >
        <div className="container mx-auto flex items-center justify-between">
          <div className="logo text-xl sm:text-2xl font-bold">Weather App</div>

          {/* color mode */}
          <button
            onClick={toggleColorMode}
            className="p-1 sm:p-2 rounded-md bg-gray-300 dark:bg-gray-600"
          >
            {isDarkMode ? (
              <FaSun color="orange" size={25} />
            ) : (
              <FaMoon color="yellow" size={25} />
            )}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
