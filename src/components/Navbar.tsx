
import { useState } from "react";
import Logo from "../assets/vectorGym.png";
import {FiSun,FiMoon,FiList,FiGrid} from "react-icons/fi"; // Import icons
import { AiOutlineSearch } from "react-icons/ai"; 

function Navbar() {


  const [darkMode, setDarkMode] = useState(false);
  const [listView, setListView] = useState(false);
  //const [reverse, setReverse] = useState(false);


  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const toggleListView = () => {
    setListView(!listView);
  };




  return (

    <nav className=" bg-black/90 p-2 fixed top-0 z-50 h-[90px] w-full">

      <div className="container mx-auto">

        <div className="flex items-center justify-between">

          {/* Left Side */}
          <div className="flex items-center space-x-5 px-12">

            <img src={Logo} alt="vectorGym" className="h-20 w-full" />
            <div className="text-white font-bold text-xl"></div>

          </div>

          <div className="flex items-center justify-between ">
            <ul className="flex space-x-10">
              <li className="text-white"><button className=" hover:bg-white/80 hover:text-black">Home</button></li>
              <li className="text-white"><button className="hover:bg-white/80 hover:text-black">Membership</button></li>
              <li className="text-white"><button className="hover:bg-white/80 hover:text-black">Team</button></li>
              <li className="text-white"><button className="hover:bg-white/80 hover:text-black">About Us</button></li>
              <li className="text-white"><button className="hover:bg-white/80 hover:text-black">Contact Us</button></li>
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-7 p-8 ">

            {/* Search Icon */}
            <button>
              <AiOutlineSearch style={{ color: 'white' }} />
            </button>
            
            {/* Dark Mode */}
            <button onClick={toggleDarkMode}>
              {darkMode ? <FiSun style={{ color: 'white' }} /> : <FiMoon style={{ color: 'white' }} />}
            </button>

            {/* List View */}
            <button onClick={toggleListView}>
              {listView ? <FiGrid style={{ color: 'white' }} /> : <FiList style={{ color: 'white' }} />}
            </button>
          
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
