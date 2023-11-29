import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

export default function Project_2() {
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
                className="z-20 cursor-pointer h-full"
                onMouseEnter={() => setIsHovered(true)} // Handle hover start
                onMouseLeave={() => setIsHovered(false)} // Handle hover end
              >
                <div className="flex  justify-center items-center h-screen">
                  <div className="relative group w-full h-full transition-transform transform-gpu">
                    <div className={`-z-30`}>
                      <img
                        src={`/images/mob_.png`}
                        alt="Image 1"
                        className="absolute w-[900px] h-[900px] object-cover transform-gpu transition-transform group-hover:-translate-y-48 -top-[450px] -right-44"
                      />
                      <img
                        src={`/images/mobRota_.png`}
                        alt="Image 2"
                        className="absolute w-[900px] -bottom-[350px] -left-44 h-[900px]  object-cover transform-gpu transition-transform group-hover:translate-y-48"
                      />
                    </div>

                    {isHovered ? (
                      <div className="">
                        <div
                          className={`w-[950px] h-[500px] top-7 left-9 absolute z-40 ${
                            isHovered ? "flex" : "hidden"
                          } items-center justify-center text-white transition duration-75 ease-in-out rounded-lg`}
                          style={{
                            backdropFilter: isHovered
                              ? "blur(10px) brightness(90%)"
                              : "none", // Adjust blur and brightness values as needed
                            backgroundColor: "rgba(149, 138, 138, 0.5)", // Change the background color and its opacity
                            borderRadius: "20px",
                          }}
                        >
                          <div
                            className={`flex items-center justify-center flex-col text-black fon1`}
                          >
                            <p className="text text-[32px] mb-4 fon2">
                            Backstore Pro
                            </p>
                            <p className="text-[18px] mb-1">
                            An eCommerce mobile application for building custom computers
                            </p>
                            
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
               
              </motion.div>
  )
}
