import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Project_1() {
  const navigate = useNavigate();
  const controls = useAnimation();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
    onHoverStart={() => {
      setIsHovered(true);
      // controls.start({ scale: 0.9 });
    }}
    onHoverEnd={() => {
      setIsHovered(false);
      controls.start({ scale: 1 });
    }}
     className="w-full h-full rounded-3xl ">
      <motion.div
        onHoverStart={() => {
          // setIsHovered(true);
          controls.start({ scale: 0.9 });
        }}
        initial={{ scale: 1 }}
        animate={controls}
        transition={{ duration: 0.15 }}
        exit={{ scale: 0.9 }}
        style={{
          backgroundImage: `url("https://i.ibb.co/TT5cntg/Screenshot-2023-12-02-144756-removebg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          // height: "100%",
          // transform: isHovered ? "scale(0.9)" : "scale(1)",
        }}
        className={`${isHovered && "bg-co"} h-full w-full rounded-3xl z-20 cursor-pointer transform-gpu transition-transform  `}
        onClick={() => {
          navigate("/project/1");
        }}
      >
        {isHovered ? (
          <motion.div
           
            
            className="w-full h-full  transform-gpu transition-transform flex items-center justify-center text-white ease-in-out rounded-3xl "
            style={{
              backgroundColor: "rgba(54, 75, 68, 0.6)",
            }}
          >
            <div className="flex items-center justify-center flex-col fon1 ">
              <p className="text text-7xl mb-4 fon2">Pie Chart</p>
              <p className="text-2xl mb-1">
                A bakery website that is designed to showcase and promote its
                products
              </p>
              <p className="text-2xl mb-1">and services in an effective way.</p>
            </div>
          </motion.div>
        ) : null}
      </motion.div>
    </motion.div>
  );
}
