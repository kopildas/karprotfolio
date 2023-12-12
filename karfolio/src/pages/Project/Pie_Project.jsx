import React from "react";
import { FaQuoteRight } from "react-icons/fa6";

import { BsLaptopFill } from "react-icons/bs";
import {
  FaApplePay,
  FaArrowAltCircleRight,
  FaCreditCard,
  FaFacebookF,
  FaGooglePay,
  FaInstagram,
  FaMobile,
  FaPaypal,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";
import { IoMdRewind } from "react-icons/io";
import { SiNetflix } from "react-icons/si";

import { MdDelete, MdOutlineCancel } from "react-icons/md";

import { AiFillQuestionCircle } from "react-icons/ai";

export default function Pie_Project() {
  return (
    <div className="fon">
      <section className="p-16 bg-custom-green h-screen w-full flex gap-12">
        <div className="w-1/2 text md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-6xl flex items-center justify-center font-black text-heading-col-1"> 
          Pie Chart
        </div>

        <div className="w-1/2 border shadow-2xl rounded-2xl bg-green-lite flex flex-col items-center justify-center">
          <div className="flex object-contain">
          <img src="https://i.ibb.co/37ZqCS0/Title-photos-removebg-preview.png" alt="Title-photos-removebg-preview" border="0"
              className="p-10"
            />
            
          </div>

        </div>
      </section>

      {/* Project Overview */}
      <section className="p-16 bg-custom-green  w-full flex flex-col gap-12">
        <div className="w-full flex items-center justify-center  md:text-4xl lg:text-5xl xl:text-7xl 2xl:text-9xl font-black text-heading-col-1 ">
          <p>Project Overview</p>
        </div>

        <div className="p-16 mt-16 border border-slate-200 rounded-2xl bg-white flex flex-col items-center justify-center shadow-xl">
          <p className="2xl:text-5xl md:text-3xl font-medium text-gray-700 textFont">
            Pie Chart is designed to sell all types of baked goods and
            beverages. It is a comprehensive and user-friendly platform that
            allows customers to easily browse and purchase products and
            services.
          </p>
        </div>
      </section>

      {/* problem */}
      <section className="p-28 bg-custom-green w-full h-screen flex gap-12">
        <div className="w-1/4 bg-slate-100 flex flex-col 2xl:p-10 md:p-10 items-start justify-center text-gray-900 rounded-2xl">
          <p className="2xl:text-6xl md:text-4xl font-semibold text-heading-col-1">Problem</p>
          <p className="2xl:text-3xl md:text-[17px] mt-10 font-semibold textFont">
            Bakery websites may encounter common challenges that can hinder
            their success. These challenges include a lack of a strong online
            presence, outdated website design, poor website content, technical
            difficulties, and a lack of social media presence.
          </p>
        </div>
        <div className="w-3/4 h-full p-24 border border-slate-00 rounded-2xl bg-custom-box-color flex flex-col items- justify-center">
          <div className="flex md:p-5 2xl:p-40 w-full items-center justify-center object-contain mt-10 ">
            <img
              src="https://i.ibb.co/t4FmGts/Picture3.png"
              alt="Picture3"
              border="0"
              className="xl:w-full 2xl:w-full rounded-2xl z-20 shadow-xl"
            />
          </div>
          <div className="flex w-full md:p-10 2xl:p-40 gap- object-contain 2xl:-mt-80 -mt-16 z-40">
            <div className=" bg-custom-box-color rounded-2xl z-40 -mt-14">
              <div className="bg-custom-box-color p-4 w-full rounded-2xl">
                <img
                  src="https://i.ibb.co/dpDzsjv/Problem-Picture-2.png"
                  alt="Problem-Picture-2"
                  border="0"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
            <div className=" bg-custom-box-color rounded-2xl z-40 -mt-24">
              <div className="bg-custom-box-color p-4 w-full rounded-2xl">
                <img
                  src="https://i.ibb.co/FgyQLZ2/Problem-Picture-3.png"
                  alt="Problem-Picture-3"
                  border="0"
                  className="w-full rounded-2xl shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* goal boxes */}
      <section className="w-full h-screen bg-custom-green flex gap-5 items-center justify-evenly font-bold">
        <div className="bg-green-lite flex flex-col p-10 2xl:p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Goal 1</p>
          <p className="text-gray-900 text-xl 2xl:text-2xl textFont">
            Clear and concise content will make easy to understand
          </p>
        </div>
        <div className="bg-green-lite flex flex-col p-10 2xl:p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Goal 2</p>
          <p className="text-gray-900 text-xl 2xl:text-2xl textFont">
            Consistent design makes polished and professional look
          </p>
        </div>
        <div className="bg-green-lite flex flex-col p-10 2xl:p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Goal 3</p>
          <p className="text-gray-900 text-xl 2xl:text-2xl textFont">
            Up to date with social media to connect with customers
          </p>
        </div>
      </section>

      {/* 3 box my role */}
      <section className="w-full h-screen bg-custom-green flex gap-5 items-center justify-evenly font-bold">
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">My Role</p>
          <ul className="2xl:text-2xl text-xl font-bold mt-3 textFont">
            <li>> UX Design</li>
            <li>> UI Design</li>
            <li>> UX Research</li>
          </ul>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Duration</p>
          <ul className="2xl:text-2xl text-xl font-bold mt-3 textFont">
            <li>> 24 Weeks</li>
            <li>> 40+ Screens</li>
          </ul>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <div className="mt-9">
            <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Tools</p>
            <ul className="2xl:text-2xl text-xl font-bold mt-3 textFont">
              <li>> Adobe XD</li>
              <li>> Google Form</li>
              <li>> Microsoft Word</li>
              <li>> Zoom</li>
            </ul>
          </div>
        </div>
      </section>

      {/* User survey */}
      <section className="p-28 bg-custom-green w-full h-screen flex gap-12">
        <div className="w-1/4 bg-green-lite flex flex-col md:p-10 2xl:p-14 items-start justify-center text-gray-900 rounded-2xl">
          <p className="2xl:text-6xl md:text-4xl font-bold">Process</p>
          <p className="text-3xl mt-10 font-semibold">
            <ul className="2xl:text-2xl md:text-xl font-bold mt-3 textFont">
              <li>> Empathize with user</li>
              <li>> Define pain point</li>
              <li>> Ideate solution</li>
              <li>> Create wireframes and </li>
              <li>prototyp</li>
              <li>> Test</li>
            </ul>
          </p>
        </div>
        <div className="w-3/4 h-full p-24 border border-slate-00 rounded-2xl bg-green-lite flex flex-col items-center justify-center">
          <p className="md:text-4xl 2xl:text-6xl font-bold">User survey</p>
          <p className="md:text-xl 2xl:text-2xl text-gray-700 mt-5 textFont">
            I conducted a user survey to gain valuable insights. By
            strategically posting the survey across various online communities,
            I successfully reached a diverse audience. Within just 24 hours, I
            received an impressive 35 responses.
          </p>
          <div className="2xl:mt-10 flex items-center justify-evenly gap-8">
            <div className="flex flex-col items-center justify-center mt-5">
              <p className="md:text-4xl 2xl:text-6xl font-bold">75%</p>
              <p className="md:text-lg 2xl:text-2xl font-semibold text-gray-500 textFont">
                People loves to get
              </p>
              <p className="md:text-lg 2xl:text-2xl font-semibold text-gray-500 textFont">
                bread, cookies and croissant
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="md:text-4xl 2xl:text-6xl font-bold">87.5%</p>
              <p className="md:text-lg 2xl:text-2xl  font-semibold text-gray-500 textFont">
                People mind it convenient
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="md:text-4xl 2xl:text-6xl font-bold">50%</p>
              <p className="md:text-lg 2xl:text-2xl  font-semibold text-gray-500 textFont">
                Age between 37-50
              </p>
            </div>
            <div className="flex flex-col items-center justify-center">
              <p className="md:text-4xl 2xl:text-6xl font-bold">75%</p>
              <p className="md:text-lg 2xl:text-2xl  font-semibold text-gray-500 textFont">
                They female
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* persona 1 */}
      <section className="flex items-center justify-center h-screen md:mt-[25rem] 2xl:mt-[25rem]">
        <div className="w-2/5 rounded-2xl bg-custom-green flex flex-col p-10">
          <p className="md:text-4xl 2xl:text-6xl font-black">Persona</p>
          <div className="flex mt-10 gap-10">
            <img
              src="https://i.ibb.co/0XYGQWv/Persona-1.png"
              alt="Persona-1"
              border="0"
              className=" object-cover md:h-72 2xl:h-96 rounded-3xl"
            />

            <div className=" 2xl:p-10 md:p-5 bg-green-lite rounded-3xl">
              <p className="md:text-3xl 2xl:text-4xl  font-bold">Background</p>
              <p className="2xl:text-xl md:text-sm font-bold mt-5 textFont">
                Dipto is a full time HR student at Georgia State University.
                During his busy schedule, he sometimes likes to order online,
                but products listed for sale in store aren’t on the website.
                Dipto would like to see all the products on the website so he
                has more options to choose from.
              </p>
            </div>
          </div>

          <div className="flex 2xl:gap-10 md:gap-5 mt-5">
            <div className="flex flex-col">
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 font-bold">
                <p className="mb-5 md:text-3xl 2xl:text-4xl  font-black">
                  Dipto <br /> Nag,23
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Occupation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">Student</span>
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">Single</span>
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">Atlanta</span>
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Tech Literte&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">Average</span>
                </p>
              </div>
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold 2xl:w-80">
                <div className="flex items-center justify-between">
                  <p className="md:text-3xl 2xl:text-4xl  font-black mb-5">
                    {" "}
                    Quote
                  </p>
                  <FaQuoteRight className="text-4xl -mt-3 text-blue-600" />
                </div>
                <p className="2xl:text-2xl italic font-bold textFont">
                  Adding more meat items to the menu can push the protein intake
                </p>
              </div>
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold 2xl:w-80">
                <p className="md:text-3xl 2xl:text-4xl  font-black mb-5">
                  Personality
                </p>

                <div className="flex gap-3">
                  <p className="2xl:text-xl  bg-white w-fit md:p-2 2xl:p-4 rounded-3xl font-bold textFont">
                    Caring
                  </p>
                  <p className="2xl:text-xl  bg-white w-fit md:p-2 2xl:p-4 rounded-3xl font-bold textFont">
                    Kindness
                  </p>
                </div>
                <p className="2xl:text-xl   bg-white w-fit md:p-2 2xl:p-4 rounded-3xl font-bold textFont mt-4">
                  Loyality
                </p>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold w-fit ">
                <p className="2xl:text-4xl md:text-3xl font-black mb-5">
                  Goals
                </p>

                <ul className="textFont">
                  <li>Try new items</li>
                  <li>Buy more products</li>
                </ul>
              </div>
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold w-fit ">
                <p className="2xl:text-4xl md:text-3xl font-black mb-5">
                  Frustration
                </p>

                <ul className="textFont">
                  <li>
                    Studying so hard <br /> no time going to <br /> the store
                  </li>
                </ul>
              </div>

              <div className="flex gap-2">
                <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold w-fit">
                  <p className="2xl:text-4xl md:text-3xl font-black mb-5">
                    Brands
                  </p>

                  <div className="flex gap-2">
                    <FaInstagram className="text-4xl" />
                    <FaFacebookF className="text-4xl" />
                    <SiNetflix className="text-4xl" />
                  </div>
                </div>
              </div>
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold w-fit">
                <p className="2xl:text-4xl md:text-3xl font-black mb-5">
                  Platforms
                </p>

                <div className="flex gap-4">
                  <FaMobile className="text-4xl" />
                  <BsLaptopFill className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* persona 2 */}
      <section className="flex items-center justify-center h-screen md:mt-[45rem] 2xl:mt-[45rem]">
        <div className="w-2/5 rounded-2xl bg-custom-green flex flex-col p-10">
          {/* <p className="text-6xl font-bold">Persona</p> */}
          <div className="flex mt-10 gap-10">
            <img
              src="https://i.ibb.co/jJdR0rZ/persona-2.png"
              alt="persona-2"
              border="0"
              className=" object-cover md:h-72 2xl:h-96 rounded-3xl"
            />

            <div className=" 2xl:p-10 md:p-5 bg-green-lite rounded-3xl">
              <p className="md:text-3xl 2xl:text-4xl font-bold">Background</p>
              <p className="2xl:text-xl md:text-sm font-bold mt-5 textFont">
                Ehsanul is a 25 year old financial data analyst who lives with
                his family. Since they don't have a reliable website for
                ordering a cake, Ehsanul expects the local bakery store to
                answer his call, but they take longer. He won't have to spend
                his precious time calling them if they have a secure website.
              </p>
            </div>
          </div>

          <div className="flex gap-4 mt-5">
            <div className="flex flex-col">
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 font-bold ">
                <p className="mb-5 md:text-3xl 2xl:text-4xl font-black">
                  Ehsanul
                  <br /> Karim, 25
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Occupation&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">
                    Data <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;analyst
                  </span>
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Status&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">Single</span>
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Location&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">
                    Atlanta, <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    Georgia
                  </span>
                </p>
                <p className="mt-2 2xl:text-lg font-semibold textFont">
                  Tech Literte&nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="font-black 2xl:text-xl">Average</span>
                </p>
              </div>
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold 2xl:w-80">
                <div className="flex items-center justify-between">
                  <p className="md:text-3xl 2xl:text-4xl font-black mb-5">
                    {" "}
                    Quote
                  </p>
                  <FaQuoteRight className="text-4xl -mt-3 text-blue-600" />
                </div>
                <p className="2xl:text-2xl italic font-bold textFont">
                  Having secure website can increase visibility
                </p>
              </div>
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold 2xl:w-80">
                <p className="md:text-3xl 2xl:text-4xl font-black mb-5">
                  Personality
                </p>

                <div className="flex gap-3">
                  <p className="2xl:text-xl bg-white w-fit md:p-2 2xl:p-4 rounded-3xl font-bold textFont">
                    Caring
                  </p>
                  <p className="2xl:text-xl bg-white w-fit md:p-2 2xl:p-4 rounded-3xl font-bold textFont">
                    Kindness
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-col">
              <div className="bg-green-lite rounded-3xl  md:p-5 2xl:p-10 mt-10 font-bold w-fit">
                <p className="2xl:text-4xl md:text-3xl font-black mb-5">
                  Goals
                </p>

                <ul className="textFont">
                  <li>Pay securely</li>
                </ul>
              </div>
              <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold w-fit">
                <p className="2xl:text-4xl md:text-3xl  font-black mb-5">
                  Frustration
                </p>

                <ul className="textFont">
                  <li>Concerned about trusting strangers during payment</li>
                  <li> Working too much so no time going to the store</li>
                </ul>
              </div>

              <div className="flex gap-2">
                <div className="bg-green-lite rounded-3xl md:p-5 2xl:p-10 mt-10 font-bold w-fit">
                  <p className="2xl:text-4xl md:text-3xl  font-black mb-5">
                    Brands
                  </p>

                  <div className="flex gap-2">
                    <FaInstagram className="text-4xl" />
                    <FaFacebookF className="text-4xl" />
                  </div>
                </div>
              </div>
              <div className="bg-green-lite rounded-3xl  md:p-5 2xl:p-10 mt-10 font-bold w-fit">
                <p className="2xl:text-4xl md:text-3xl  font-black mb-5">
                  Platforms
                </p>

                <div className="flex gap-4">
                  <FaMobile className="text-4xl" />
                  <BsLaptopFill className="text-4xl" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="p-28 mt-[25rem] bg-custom-green w-full h-auto flex gap-12">
        <div className="flex 2xl:gap-16">
          <div>
            <p className="2xl:text-7xl md:text-5xl font-black">Empathy Map</p>
          </div>

          <div className="flex flex-wrap items-center justify-center relative">
            <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
              <p className="bg-black text-white p-3 rounded-xl text-2xl">
                SAYS
              </p>

              <p className="text-black font-bold mt-5 text-xl textFont">
                "The website doesn't have all the products which can be found in
                the store only"
              </p>
            </div>
            <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
              <p className="bg-black text-white p-3 rounded-xl text-2xl">
                THINK
              </p>

              <p className="text-black font-bold mt-5 text-xl textFont">
                "Smiling and leaning forward as they spoke"
              </p>
            </div>
            <div className="w-52 h-52 absolute rounded-full ">
              <img
                src="https://i.ibb.co/0XYGQWv/Persona-1.png"
                alt="Persona-1"
                border="0"
                className="w-52 h-52 rounded-full object-cover "
              />
            </div>
            <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
              <p className="bg-black text-white p-3 rounded-xl text-2xl">
                DOES
              </p>

              <p className="text-black font-bold mt-5 text-xl textFont">
                "Call them and see if they have Tres Leches cake"
              </p>
            </div>
            <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
              <p className="bg-black text-white p-3 rounded-xl text-2xl">
                FEELS
              </p>

              <p className="text-black font-bold mt-5 text-xl textFont">
                "How was your experience when you had to order a custom cake and
                how did it go?
                <br /> •Frustrated and bothered"
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="2xl:p-52 md:p-40  bg-custom-green w-full h-auto flex gap-12">
        <div className="flex flex-wrap items-center justify-center 2xl:p-10 2xl:left-52 md:left-28 relative">
          <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
            <p className="bg-black text-white p-3 rounded-xl text-2xl">SAYS</p>

            <p className="text-black font-bold mt-5 text-xl textFont">
              "The website doesn't have all the products which can be found in
              the store only"
            </p>
          </div>
          <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
            <p className="bg-black text-white p-3 rounded-xl text-2xl">THINK</p>

            <p className="text-black font-bold mt-5 text-xl textFont">
              "Smiling and leaning forward as they spoke"
            </p>
          </div>
          <div className="w-52 h-52 absolute rounded-full ">
            <img
              src="https://i.ibb.co/jJdR0rZ/persona-2.png"
              alt="persona-2"
              border="0"
              className="w-52 h-52 rounded-full object-cover "
            />
          </div>
          <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
            <p className="bg-black text-white p-3 rounded-xl text-2xl">DOES</p>

            <p className="text-black font-bold mt-5 text-xl textFont">
              "Call them and see if they have Tres Leches cake"
            </p>
          </div>
          <div className="p-14 border border-gray-700 flex flex-col items-center justify-center md:w-[25rem] md:h-[25rem] 2xl:w-[35rem] 2xl:h-[35rem]">
            <p className="bg-black text-white p-3 rounded-xl text-2xl">FEELS</p>

            <p className="text-black font-bold mt-5 text-xl textFont">
              "How was your experience when you had to order a custom cake and
              how did it go?
              <br /> •Frustrated and bothered"
            </p>
          </div>
        </div>
      </section>

      {/* User Journey Map */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-auto gap-12">
        <p className="text-5xl font-black">User Journey Map</p>
        <div className="flex flex-col gap-5 textFont">
          <div className="flex gap-5 pl-20">
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-1 font-bold text-white">
              Action
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-2 font-bold 2xl:p-10 md:p-5 md:text-sm">
              Choose what occasion ordering the cake for
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-3 font-bold md:text-sm p-5">
              Choose the cake
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-4 font-bold md:text-sm p-5">
              Choose the size and flavor
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-5 font-bold md:text-sm p-5">
              Add to the cart
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-6 font-bold md:text-sm p-5">
              Proceed with transaction
            </div>
          </div>

          <div className="flex gap-5 pl-20">
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-1 font-bold text-white">
              Task List
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-2 font-bold p-5 md:text-sm">
              • Search for something else <br />
              • Look for Mene <br />• Look for best selling cakes
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-3 font-bold p-5 md:text-sm">
              • Look for best price <br />
              • Look for the design <br />• Press next for more
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-4 font-bold p-5 md:text-sm">
              • Determine the size by serves amount <br />
              • Choose the flavor according to the size <br />• Press call for
              additional questions
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-5 font-bold p-5 md:text-sm">
              • Look at nutrition fact
              <br />
              • Choose different flavor if it has more calories
              <br />• Add to the cart to proceed with transection
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-6 font-bold p-5 md:text-sm">
              • Choose delivery date or pick up
              <br />
              • Enter card information carefully
              <br />• Confirmation page
            </div>
          </div>

          <div className="flex gap-5 pl-20">
            <div className="w-64 h-32 rounded-xl flex items-center justify-center bg-box-color-1 text-white font-bold">
              Feeling
            </div>
            <div className="w-64 h-32 rounded-xl flex items-center justify-center bg-box-color-2 2xl:text-5xl md:text-3xl">
              😊🥴
            </div>
            <div className="w-64 h-32 rounded-xl flex items-center justify-center bg-box-color-3 2xl:text-5xl md:text-3xl">
              😍🥴
            </div>
            <div className="w-64 h-32 rounded-xl flex items-center justify-center bg-box-color-4 2xl:text-5xl md:text-3xl">
              🥴😑
            </div>
            <div className="w-64 h-32 rounded-xl flex items-center justify-center bg-box-color-5 2xl:text-5xl md:text-3xl">
              🤩😧
            </div>
            <div className="w-64 h-32 rounded-xl flex items-center justify-center bg-box-color-6 2xl:text-5xl md:text-3xl">
              😌🤗😃
            </div>
          </div>

          <div className="flex gap-5 pl-20">
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-1 text-white font-bold p-5">
              Opportunities
              <br />
              /Solution
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-2 font-bold p-5 md:text-sm">
              • Best selling cakes goes on the top of the page
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-3 font-bold p-5 md:text-sm">
              • Best quality picture <br />• Add NEXT button
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-4 font-bold p-5 md:text-sm">
              • Creating a serving chart
              <br />• Add CALL button
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-5 font-bold p-5 md:text-sm">
              • Have the chart on the middle <br />• Add CART button
            </div>
            <div className="w-64 h-64 rounded-xl flex items-center justify-center bg-box-color-6 font-bold p-5 md:text-sm">
              • Complimentary delivery service <br />• Option to scan the card
            </div>
          </div>
        </div>
      </section>

      {/* UI Style Guidelines */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-auto gap-12">
        <p className="2xl:text-7xl md:text-5xl font-black">
          UI Style Guidelines
        </p>
        <div className="flex gap-10 p-5 items-center justify-around">
          <div className="flex flex-col">
            <p className="2xl:text-6xl md:text-4xl font-black">
              <span className=" text-gray-500">0.1&nbsp;</span>Colors
            </p>
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex gap-5 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-20 h-20 rounded-lg shadow-md shadow-slate-400 bg-custom-orange"></div>
                  <p className="font-bold text-sm">#FFA500</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-20 h-20 rounded-lg shadow-md shadow-slate-400 bg-custom-slate"></div>
                  <p className="font-bold text-sm">#E4E4E4</p>
                </div>
              </div>
              <div className="flex gap-5 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-20 h-20 rounded-lg shadow-md shadow-slate-400 bg-custom-white"></div>
                  <p className="font-bold text-sm">#FFFFFF</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-20 h-20 rounded-lg shadow-md shadow-slate-400 bg-custom-slate-2"></div>
                  <p className="font-bold text-sm">#B6B6B6</p>
                </div>
              </div>
              <div className="flex gap-5 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-20 h-20 rounded-lg shadow-md shadow-slate-400 bg-custom-slate-3"></div>
                  <p className="font-bold text-sm">#707070</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-20 h-20 rounded-lg shadow-md shadow-slate-400 bg-custom-gr"></div>
                  <p className="font-bold text-sm">#32CD32</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col -mt-36">
            <p className="2xl:text-6xl md:text-4xl font-black">
              <span className=" text-gray-500">0.1&nbsp;</span>Typography
            </p>
            <div className="flex items-center justify-center mt-10 gap-10 ">
              <div className="flex flex-col items-center justify-center">
                <p className="2xl:text-3xl md:text-2xl mb-5 font-black">
                  Segoe UI
                </p>
                <p className="text-xl font-black mt-3">Heading 1</p>
                <p className="text-xl font-black mt-3">Heading 2</p>
                <p className="text-xl font-black mt-3">Heading 3</p>
                <p className="text-xl font-black mt-3">Heading 4</p>
                <p className="text-xl font-black mt-3">Heading 5</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="2xl:text-3xl md:text-2xl font-black mb-5">
                  Font Size
                </p>
                <p className="text-xl font-black mt-3">65 PX</p>
                <p className="text-xl font-black mt-3">40 PX</p>
                <p className="text-xl font-black mt-3">35 PX</p>
                <p className="text-xl font-black mt-3">30 PX</p>
                <p className="text-xl font-black mt-3">20 PX</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center -mt-36">
            <p className="2xl:text-6xl md:text-4xl font-black">
              <span className=" text-gray-500">0.3&nbsp;</span>Iconography
            </p>
            <div className="flex mt-10 items-center justify-center gap-4 2xl:text-6xl md:text-4xl">
              <div className="flex flex-col gap-10 items-center justify-center">
                <IoMdRewind className="text-gray-500" />
                <FaApplePay className="2xl:text-9xl md:text-7xl" />
              </div>
              <div className="flex flex-col gap-10 mt-20 items-center justify-center">
                <MdDelete className="2xl:text-8xl md:text-7xl text-gray-500" />
                <FaArrowAltCircleRight className="text-4xl" />
              </div>
              <div className="flex flex-col gap-10 items-center justify-center -mt-16">
                <AiFillQuestionCircle className="2xl:text-5xl md:text-4xl" />
                <FaCreditCard className="2xl:text-7xl md:text-6xl" />
              </div>
              <div className="flex flex-col gap-10 items-center justify-center">
                <MdOutlineCancel />
                <FaGooglePay className="2xl:text-8xl md:text-7xl" />
              </div>
              <div className="flex flex-col gap-10 items-center justify-center">
                <FaRegArrowAltCircleDown className="2xl:text-5xl md:text-4xl" />
                <FaPaypal className="2xl:text-8xl md:text-7xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Map */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-screen gap-12">
        <p className="2xl:text-7xl md:text-5xl  font-black">Site Map</p>
      </section>

      {/* Paper Wire-frames */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-full gap-12">
        <p className="2xl:text-7xl md:text-5xl  font-black">
          Paper Wire-frames
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Cake Details</p>
            <img
              src="https://i.ibb.co/QQMJt8q/Cake-details.png"
              alt="Cake-details"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 max-h-screen"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Contact Us</p>
            <img
              src="https://i.ibb.co/HpT37xF/Contact-us.png"
              alt="Contact-us"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 max-h-screen"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Occasion</p>
            <img
              src="https://i.ibb.co/FXkzmsV/Occasion.png"
              alt="Occasion"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 max-h-screen"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Catering</p>
            <img
              src="https://i.ibb.co/K76Sc66/Catering.png"
              alt="Catering"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 max-h-screen"
            />
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">About</p>
            <img
              src="https://i.ibb.co/G2BmyF1/About.png"
              alt="About"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 max-h-screen"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Add to the Basket</p>
            <img
              src="https://i.ibb.co/Nm0Hc8R/Add-to-the-cart.png"
              alt="Add-to-the-cart"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 max-h-screen"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Cakes</p>
            <img
              src="https://i.ibb.co/TtL5t53/cake.png"
              alt="cake"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 max-h-screen"
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Home</p>
            <img
              src="https://i.ibb.co/hZ2FXwS/home.png"
              alt="home"
              border="0"
              className="2xl:w-96 md:w-64 md:h-96 w- max-h-screen"
            />
          </div>
        </div>
      </section>

      {/* Digital Wire-frames */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-full gap-12">
        <p className="2xl:text-7xl md:text-5xl font-black">
          Digital Wire-frames
        </p>
        <div className="flex w-full gap-10 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Cake Details</p>
            <img
              src="https://i.ibb.co/vVNCPYQ/digital-cake-details.png"
              alt="digital-cake-details"
              border="0"
              className=" max-h-screen "
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Contact Us</p>
            <img
              src="https://i.ibb.co/8jF6Gg7/Digital-contact-us.png"
              alt="Digital-contact-us"
              border="0"
              className=" max-h-screen "
            />
          </div>
        </div>

        <div className="flex w-full gap-10 items-center justify-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Occasion</p>
            <img
              src="https://i.ibb.co/B3L6tNS/Digital-occasion.png"
              alt="Digital-occasion"
              border="0"
              className=" max-h-screen "
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Catering</p>
            <img
              src="https://i.ibb.co/txsgjJR/Digital-cateringpng.png"
              alt="Digital-cateringpng"
              border="0"
              className=" max-h-screen "
            />
          </div>
        </div>

        <div className="flex w-full gap-10 items-center justify-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">About</p>
            <img
              src="https://i.ibb.co/nsV9p4Q/Digital-about.png"
              alt="Digital-about"
              border="0"
              className=" max-h-screen "
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Add to the Basket</p>
            <img
              src="https://i.ibb.co/RDH4PBV/Digital-add-to-basket.png"
              alt="Digital-add-to-basket"
              border="0"
              className=" max-h-screen "
            />
          </div>
        </div>

        <div className="flex w-full gap-10 items-center justify-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Cakes</p>
            <img
              src="https://i.ibb.co/zVLvhYc/Digital-cakes.png"
              alt="Digital-cakes"
              border="0"
              className=" max-h-screen "
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <p className="font-black">Home</p>
            <img
              src="https://i.ibb.co/xHTGpcX/Digital-home.png"
              alt="Digital-home"
              border="0"
              className=" max-h-screen "
            />
          </div>
        </div>
      </section>

      {/* High-Fidelity Wire-frames */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-full gap-12">
        <p className="2xl:text-7xl md:text-5xl font-black mb-10">
          High-Fidelity Wire-frames
        </p>
        <div className="flex w-full gap-5 items-center justify-center">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/G5CTs2y/pi-Picture1.png"
              alt="pi-Picture1"
              border="0"
              className=" max-h-screen "
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/Vgf0g5k/pi-Picture2.png"
              alt="pi-Picture2"
              border="0"
              className=" max-h-screen "
            />
          </div>
        </div>

        <div className="flex w-full gap-5 items-center justify-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/X2fS4xN/pi-Picture3.png"
              alt="pi-Picture3"
              border="0"
              className=" max-h-screen "
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/wBVjpxX/pi-Picture4.png"
              alt="pi-Picture4"
              border="0"
              className=" max-h-screen "
            />
          </div>
        </div>

        <div className="flex w-full gap-5 items-center justify-center mt-10">
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/bX6yxQs/Mac-Book-Air.png"
              alt="Mac-Book-Air"
              border="0"
              className=" max-h-screen "
            />
          </div>
          <div className="flex flex-col items-center justify-center">
            <img
              src="https://i.ibb.co/XJ8xp9S/Mac-Book-Air-1.png"
              alt="Mac-Book-Air-1"
              border="0"
              className=" max-h-screen "
            />
          </div>
        </div>
      </section>
      

      <section className="p-28 flex flex-col bg-custom-green w-full h-screen gap-12 items-center justify-center">
        <p className="text-9xl font-black text-heading-col-1">THANK YOU</p>
      </section>

      
    </div>
  );
}
