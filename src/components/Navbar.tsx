//import React from 'react';
import { useState } from "react";
import Logo from "../assets/gym_logo.png";
import {FiSun,FiMoon,FiList,FiGrid} from "react-icons/fi"; // Import icons

function Navbar() {

  const [darkMode, setDarkMode] = useState(false);
  const [listView, setListView] = useState(false);
  const [reverse, setReverse] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleListView = () => {
    setListView(!listView);
  };

  const toggleReverse = () => {
    setReverse(!reverse);
  };


  return (
    <nav className=" bg-black/90 p-5">
      <div className="container  mx-auto">
        <div className="flex items-center justify-between">
          {/* Left Side */}
          <div className="flex items-center space-x-5">
            <img src={Logo} alt="plurk" className="h-10 w-full" />
            <div className="text-white font-bold text-xl"></div>
          </div>
          <div className="flex items-center justify-evenly">
            <ul className="flex space-x-4">
              <li className="text-white">Home</li>
              <li className="text-white">Service</li>
              <li className="text-white">Team</li>
              <li className="text-white">About Us</li>
              <li className="text-white">Career</li>
            </ul>
          </div>
          {/* Right Side */}
          <div className="flex items-center space-x-8">
            {/* Dark Mode */}
            <button onClick={toggleDarkMode}>
              {darkMode ? <FiSun style={{ color: 'white' }} /> : <FiMoon style={{ color: 'white' }} />}
            </button>

            {/* List View */}
            <button onClick={toggleListView}>
              {listView ? <FiGrid style={{ color: 'white' }} /> : <FiList style={{ color: 'white' }} />}
            </button>

            {/* Reverse Option */}
            <button onClick={toggleReverse}>Reverse</button>
          </div>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;

