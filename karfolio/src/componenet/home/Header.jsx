import React, { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaBars,
  FaCommentAlt,
  FaRegChartBar,
  FaProjectDiagram,
  FaUserAlt,
  FaHome,
} from "react-icons/fa";
import "./Header.css";

export default function Header({ onMenter, onMleave }) {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    // const currentScrollPos = window.pageYOffset;

    // if (prevScrollPos > currentScrollPos) {
    //   setVisible(true); // Scrolling up
    // } else {
    //   setVisible(false); // Scrolling down
    // }

    // setPrevScrollPos(currentScrollPos);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const menuItem = [
    {
      path: "/",
      name: "Home",
      icon: <FaHome />,
    },
    {
      path: "/about",
      name: "About",
      icon: <FaUserAlt />,
    },
    {
      path: "/contact",
      name: "Contact",
      icon: <FaProjectDiagram />,
    },
  ];

  function pathMatchRoute(route) {
    // setIsCurrentRouteAdmin(vl);

    if (route === location.pathname) {
      // setIsCurrentRouteAdmin(false)
      return true;
    }
  }

  return (
    <header
      className={`border-b shadow-sm sticky top-0 z-40 transform-gpu transition-transform headerFont ${
        !visible ? "-translate-y-48" : "" // Hide the header when not visible
      }`}
      style={{
        // transition: "transform 2s ease-in-out", // Add a transition effect
        // transform: visible ? "translateY(0)" : "translateY(-100%)", // Move the header out of view when not visible
      }}
    >
      {/* desktop and tablate */}
      <div className="h-16 hidden md:flex items-center justify-between backdrop-blur-xl">
        <div>
          <img
            src="/images/logo_png_.png"
            alt="logo"
            className="h-16 ml-20 cursor-pointer"
            onClick={() => {
              navigate("/");
              // adminOrNot();
            }}
          />
        </div>
        <div className="flex items-end justify-end">
          <ul className="flex space-x-10 mr-20">
            <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600  hover:text-gray-500  ${
                pathMatchRoute("/") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/");
                // adminOrNot();
              }}
              onMouseEnter={() => onMenter()}
              onMouseLeave={() => onMleave()}
            >
              Home
            </li>
            <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                pathMatchRoute("/about") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/about");
                // adminOrNot();
              }}
              onMouseEnter={() => onMenter()}
              onMouseLeave={() => onMleave()}
            >
              About
            </li>
            <li
              className={`cursor-pointer py-3 w-24 h-9 text-xl flex items-center justify-center text-gray-600 hover:text-gray-500  ${
                pathMatchRoute("/contact") &&
                "text-black border border-sky-500 rounded-sm"
              }`}
              onClick={() => {
                navigate("/contact");
                // adminOrNot();
              }}
              onMouseEnter={() => onMenter()}
              onMouseLeave={() => onMleave()}
            >
              Contact
            </li>

            <li
              className={`cursor-pointer py-3 text-sm font-semibold text-gray-400 border-b-[3px] border-b-transparent `}
            ></li>
          </ul>
        </div>
      </div>

      {/* for mobile */}
      <div className="md:hidden flex justify-between backdrop-blur-lg items-center px-3 max-w-6xl mx-auto">
        <img
          src="../../../public/images/logo_png.png"
          alt="logo"
          className="h-16 cursor-pointer"
          onClick={() => {
            navigate("/");
          }}
        />
        <FaBars
          onClick={() => setIsOpen(!isOpen)}
          className="text-3xl text-gray-500 cursor-pointer"
        />
      </div>
      {isOpen && (
        <div className="md:hidden w-screen bg-black text-white">
          <ul className="text-center">
            {menuItem.map((item) => (
              <li
                key={item.path}
                className={`cursor-pointer py-3 p-32 flex items-center justify-center gap-3 font-semibold border-b hover:text-red-300 text-lg ${
                  pathMatchRoute(item.path) && "text-red-500"
                }`}
                onClick={() => {
                  navigate(item.path);
                  setIsOpen(false);
                }}
              >
                {item.icon} {item.name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
