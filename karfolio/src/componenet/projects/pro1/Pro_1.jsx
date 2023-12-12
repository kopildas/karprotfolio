import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import React, { useRef, useState } from "react";
import "./Pro_1.css";
import Project_1 from "./Project_1/Project_1";
import Project_2 from "./Project_2/Project_2";
import U_construction from "../../U_construction";
// import Project_2 from "../Project_2/Project_2";

function useParallax(value, distance) {
  return useTransform(value, [0, 3], [-distance, distance]);
}

function Project({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 900);

  // Determine if id is even
  const isEven = id % 2 === 0;
  const [isHovered, setIsHovered] = useState(false);
  console.log(isHovered);
  return (
    <section>
      <div>
        <div className="md:p-16 p-5 md:m-20 2xl:m-44">
          <div
            ref={ref}
            className="bg-custom-green h-[90vh] p-5 z-30 rounded-3xl"
            style={{ overflow: "hidden" }} // Add overflow property to clip child content
          >
             {id===1 && (
              <Project_1 />
            )}
      {id===2 && (
        <Project_2/>
              // <Project_1 />
            )}
      {id===3 && (
        <div className="flex items-center justify-center text-4xl w-full h-full text-gray-400"><div className="w-full h-full">
          <U_construction />
          </div></div>
              // <Project_1 />
            )}
            
            {/* {isEven ? (
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
                              Hi I'm Austin Bustio
                            </p>
                            <p className="text-[18px] mb-1">
                              Product Designer by profession & passion, focusing
                            </p>
                            <p className="text-[18px] mb-1">
                              on products and design system. Crafting cool
                              resources and blogs.
                            </p>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>
                </div>
               
              </motion.div>
            ) : (
              <motion.div
                whileHover={{ scale: [1, 1, 0.9] }}
                transition={{ duration: 0.09 }}
                style={{
                  backgroundImage: `url("/images/${id}_.png")`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                  height: "100%",
                }}
                className="hover:bg-slate-900 z-20 cursor-pointer transform-gpu transition-transform"
                onHoverStart={() => setIsHovered(true)} // Handle hover start
                onHoverEnd={() => setIsHovered(false)} // Handle hover end
              >
                {isHovered ? (
                  <div className=" w-full h-full transform-gpu transition-transform flex items-center justify-center text-white ease-in-out">
                    <div className="flex items-center justify-center flex-col fon1">
                      <p className="text text-[32px] mb-4 fon2">
                        Hi I'm Austin Bustin 2
                      </p>
                      <p className="text-[18px] mb-1">
                        Product Designer by profession & passion, focusing
                      </p>
                      <p className="text-[18px] mb-1">
                        on products and design system. Crafting cool resources
                        and blogs..
                      </p>
                    </div>
                  </div>
                ) : null}
              </motion.div>
            )} */}
          </div>
        </div>
      </div>

      {/* paralax effect */}
      <motion.h2
        style={{
          y, // Apply the y position based on scrolling
          x: isEven ? 50 : 1050, // Apply the x position based on id parity
          position: "absolute", // Ensure absolute positioning
        }}
        className="text text-9xl text-neutral-600 hidden md:block"
      >{`#00${id}`}</motion.h2>

      {/* // for mobile view */}
      <motion.h2
        style={{
          y, // Apply the y position based on scrolling
          x: isEven ? 50 : 50, // Apply the x position based on id parity
          position: "absolute", // Ensure absolute positioning
        }}
        className="text text-7xl text-neutral-600 md:hidden"
      >{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Pro_1() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 200,
    damping: 30,
    restDelta: 0.004,
  });
  return (
    <>
      {[1, 2, 3].map((image) => (
        <Project key={image} id={image} />
      ))}
    </>
  );
}
