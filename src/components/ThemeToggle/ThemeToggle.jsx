// ThemeToggle.js

import React from 'react';
import { IoMdMoon } from "react-icons/io";
import { RiSunFill } from "react-icons/ri";


const ThemeToggle = ({ toggleTheme, darkMode }) => {
  return (
    <button
      className="fixed bottom-4 right-4 p-2 text-xs rounded-full bg-gray-800 text-white"
      onClick={toggleTheme}
    >
      {darkMode ? <IoMdMoon/> : <RiSunFill/>}
    </button>
  );
};

export default ThemeToggle;
