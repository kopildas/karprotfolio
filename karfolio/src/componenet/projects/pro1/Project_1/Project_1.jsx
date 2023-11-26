import React, { useState } from 'react'
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useNavigate } from 'react-router-dom';
export default function Project_1() {
  
    const navigate = useNavigate();

    const [isHovered, setIsHovered] = useState(false);
  return (
    <motion.div
                whileHover={{ scale: [1, 1, 0.9] }}
                transition={{ duration: 0.09 }}
                style={{
                  backgroundImage: `url("/images/2_.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                }}
                className="hover:bg-slate-900 z-20 cursor-pointer transform-gpu transition-transform"
                onHoverStart={() => setIsHovered(true)} // Handle hover start
                onHoverEnd={() => setIsHovered(false)} // Handle hover end
                onClick={() => {
                    navigate("/project/1");
                    // adminOrNot();
                  }}
              >
                {isHovered ? (
                  <div className=" w-full h-full transform-gpu transition-transform flex items-center justify-center text-white ease-in-out">
                    <div className="flex items-center justify-center flex-col fon1">
                      <p className="text text-[32px] mb-4 fon2">
                      Pie Chart
                      </p>
                      <p className="text-[18px] mb-1">
                      A bakery website that is designed to showcase and promote its products</p>
                      <p className="text-[18px] mb-1">
                      and services in an effective way.
                      </p>
                    </div>
                  </div>
                ) : null}
              </motion.div>
  )
}
