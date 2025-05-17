import logo3 from "../assets/logo.jpg";
import logo2 from "../assets/estfbs.png";
import logo1 from "../assets/université Sultan Moulay Slimane - Beni Mellal-01.png";
import { LuHome } from "react-icons/lu";
import { FaRegStar } from "react-icons/fa";
import { FiServer } from "react-icons/fi";
import { Link } from "react-router-dom"; // Import Link from React Router
import { useSpring, animated } from "@react-spring/web";
import Typewriter from "typewriter-effect";

import { useEffect } from "react";

const IndexPage = () => {
  const containerAnimation = useSpring({
    from: { opacity: 0, transform: "translateX(3rem)" },
    to: { opacity: 1, transform: "translateX(0rem)" },
    config: { duration: 1000 },
    delay: 100,
  });

  return (
   
        <div className=" w-full min-[1000px]:ml-[4rem] z-10 mt-[2rem] min-[1000px]:mt-[3rem]">
          <animated.div style={containerAnimation} >
            <h1 className="font-bold z-10 max-[1000px]:text-[4rem] text-[5rem] leading-[6rem] text-slate-800">
              Student Performance <br></br> Analysis
            </h1>
            <p className="flex mt-6 items-center gap-3 text-2xl font-medium text-slate-800">
              <span>Boost your</span>{" "}
              <span className="text-cyan-700">
                <Typewriter
                  options={{
                    strings: ["Performance", "Knowledge", "Level", "Desire"],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </span>
            </p>
          </animated.div>
        </div>
       
    
  );
};

export default IndexPage;
