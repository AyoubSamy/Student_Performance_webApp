import logo3 from "../assets/logo.jpg";
import logo2 from "../assets/estfbs.png";
import logo1 from "../assets/université Sultan Moulay Slimane - Beni Mellal-01.png";
import { LuHome } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useSpring, animated } from "@react-spring/web";
import Typewriter from "typewriter-effect";

import { FaBars } from "react-icons/fa";
import { useState } from "react";

const Layout = ({ children }) => {
   const [opemMenu , setShowMenu] = useState(false)

  return (
    <div className=" flex flex-col min-[1000px]:h-[100vh] max-[1000px]:px-[3rem]  items-center ">
      <div className="flex justify-between items-center gap-[7rem] mt-6 w-full  min-[1000px]:max-w-[55rem] ">
      <img src={logo2} className="w-[6rem]" alt="" srcset="" />
        <img src={logo3} className="w-[20rem] max-[1000px]:hidden" alt="" srcset="" />
        <img src={logo1} className="w-[5rem] -mb-4 max-[1000px]:hidden" alt="" srcset="" />
        <nav id="navbar" className="h-full relative min-[1000px]:hidden top-0 flex  items-center justify-center">
            <button onClick={()=> setShowMenu(!opemMenu)} className=" py-2 px-3"><FaBars className="text-gray-800" /></button>
            {
                opemMenu &&    <ul className="absolute bg-white z-50 flex flex-col gap-3 py-3 px-3 border top-[2rem] rounded-sm border-gray-300 right-0 w-[20rem] text-cyan-600">
                <li className="">
                  {/* Replace <a> with <Link> */}
                  <Link
                    to="/"
                    className="flex items-center gap-4 justify-start"
                  >
                    <LuHome className="text-xl text-cyan-600" />
                    <span>Home</span>
                  </Link>
                </li>
                <li className="">
                  {/* Replace <a> with <Link> */}
                  <Link
                    to="/prediction"
                    className="flex items-center gap-4 justify-start"
                  >
                    <FaRegStar className="text-xl text-cyan-600" />
                    <span>Predict</span>
                  </Link>
                </li>
                <li className="">
                  {/* Replace <a> with <Link> */}
                  <Link
                    to="/offer"
                    className="flex items-center gap-4  justify-start"
                  >
                    <FiServer className="text-xl text-cyan-600" />
                    <span className="w-[8rem]">What We Offer</span>
                  </Link>
                </li>
              </ul>
            }
       
        </nav>
      </div>
      <div className="  flex justify-between items-center  ">
      <nav id="navbar" className="h-full max-[1000px]:hidden top-0 flex absolute left-[3rem]  w-[25rem] items-center justify-center">
          <ul className="flex flex-col w-full mt-[4rem] mr-[2rem] gap-5 text-white">
            <li className="border border-cyan-600 flex rounded-full items-center text-center transition-all hover:text-cyan-600 w-12 pl-[0.8rem] hover:w-fit hover:pr-7 py-4 h-12">
              {/* Replace <a> with <Link> */}
              <Link
                to="/"
                className="flex items-center gap-4 justify-start"
              >
                <LuHome className="text-xl text-cyan-600" />
                <span>Home</span>
              </Link>
            </li>
            <li className="border border-cyan-600 flex rounded-full items-center text-center hover:text-cyan-600 transition-all w-12 pl-[0.8rem] hover:w-fit hover:pr-7 py-4 h-12">
              {/* Replace <a> with <Link> */}
              <Link
                to="/prediction"
                className="flex items-center gap-4 justify-start"
              >
                <FaRegStar className="text-xl text-cyan-600" />
                <span>Predict</span>
              </Link>
            </li>
            <li className="border border-cyan-600 flex rounded-full items-center text-center hover:text-cyan-600 transition-all w-12 pl-[0.8rem] hover:w-fit hover:pr-7 py-4 h-12">
              {/* Replace <a> with <Link> */}
              <Link
                to="/offer"
                className="flex items-center gap-4  justify-start"
              >
                <FiServer className="text-xl text-cyan-600" />
                <span className="w-[8rem]">What We Offer</span>
              </Link>
            </li>
          </ul>
        </nav>
        {children}
       
      </div>
    </div>
  );
};

export default Layout;
