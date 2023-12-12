import React from "react";
import { CiSearch } from "react-icons/ci";
import { BsChatRightText } from "react-icons/bs";
import { HiOutlineMailOpen } from "react-icons/hi";
import { MdCancel, MdOutlineDesktopWindows } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";
import { ImUser, ImCross, ImCart } from "react-icons/im";

import {
  FaApplePay,
  FaArrowAltCircleRight,
  FaCreditCard,
  FaGooglePay,
  FaPaypal,
  FaRegArrowAltCircleDown,
} from "react-icons/fa";
import { IoMdRewind } from "react-icons/io";

import { MdDelete, MdOutlineCancel } from "react-icons/md";

import { AiFillQuestionCircle } from "react-icons/ai";
import Digi_Image from "../../componenet/projects/pro1/Project_2/Digi_Image";

const one = 1;
const two = 2;
const three = 3;
const four = 4;

export default function Backstore_project() {
  return (
    <div className="fon">
      <section className="p-16 bg-custom-green h-screen w-full flex gap-12">
        <div className="w-1/2 text-heading-col-1 text md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-6xl flex items-center justify-center font-black custom-text-color">
          Backstore Pro
        </div>

        <div className="w-1/2 border shadow-2xl rounded-2xl bg-green-lite flex flex-col items-center justify-center p-10">
          <div className="flex object-contain">
            <img
              src="https://i.ibb.co/3s9xgq0/back-1-removebg-preview.png"
              alt="back-1-removebg-preview"
              border="0"
              className="w-1/2 "
            />
            <img
              src="https://i.ibb.co/6WQhTCF/back-2-removebg-preview.png"
              alt="back-2-removebg-preview"
              border="0"
              className="w-1/2"
            />
          </div>
          <div className="flex object-contain">
            <img
              src="https://i.ibb.co/SnfX95M/back-3-removebg-preview.png"
              alt="back-3-removebg-preview"
              border="0"
              className="w-1/2"
            />
            <img
              src="https://i.ibb.co/MSdf6fk/back-4-removebg-preview.png"
              alt="back-4-removebg-preview"
              border="0"
              className="w-1/2"
            />
          </div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="p-16 bg-custom-green w-full h- flex flex-col gap-12">
        <div className="w-full flex items-center justify-center md:text-5xl lg:text-7xl xl:text-7xl 2xl:text-9xl font-black custom-text-color">
          <p>Project Overview</p>
        </div>

        <div className="p-16 mt-16 font-bold border border-slate-200 rounded-2xl bg-white flex flex-col items-center justify-center shadow-xl">
          <p className="2xl:text-5xl md:text-2xl textFont">
            Backstore Pro is an eCommerce mobile application where users will be
            able to buy quality products at the best price and conveniently.
          </p>
        </div>
      </section>

      {/* problem */}
      <section className="p-28 bg-custom-green w-full h-auto flex gap-12">
        <div className="w-1/4 h-screen bg-slate-100 flex flex-col 2xl:p-10 md:p-10 items-start justify-center text-gray-900 rounded-2xl">
          <p className="2xl:text-6xl md:text-5xl font-bold">Problem</p>
          <p className="2xl:text-3xl md:text-lg mt-10 font-semibold textFont">
            Due to the excessive price of computer hardware components,
            businesses don't make enough money.
          </p>
        </div>
        <div className="w-3/4 h-screen p-10 border border-slate-00 rounded-2xl bg-back-box-1 flex flex-col items-center justify-center">
          <div className="flex flex-col gap-2 object-fit">
            <img
              src="https://i.ibb.co/gT91kHy/back-prob-1.png"
              alt="back-prob-1"
              border="0"
              className="xl: 2xl:w-full rounded-2xl z-20 shadow-xl"
            />
            <img
              src="https://i.ibb.co/Jx6819B/back-prob-2.png"
              alt="back-prob-2"
              border="0"
              className="xl: 2xl:w-full rounded-2xl z-20 shadow-xl"
            />
          </div>
        </div>
      </section>

      {/* goal boxes */}
      <section className="w-full h-screen bg-custom-green flex gap-5 items-center justify-evenly font-bold">
        <div className="bg-green-lite flex flex-col p-10 2xl:p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Goal 1</p>
          <p className="text-gray-900 text-xl 2xl:text-2xl textFont">
            Offer access to highly Desirable Hardware Components
          </p>
        </div>
        <div className="bg-green-lite flex flex-col p-10 2xl:p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Goal 2</p>
          <p className="text-gray-900 text-xl 2xl:text-2xl textFont">
            Provide Competitive and Reasonable Pricing
          </p>
        </div>
      </section>

      {/* 3 box my role */}
      <section className="w-full h-screen bg-custom-green flex gap-5 items-center justify-evenly font-bold">
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">My Role</p>
          <ul className="2xl:text-2xl text-xl font-bold mt-3 textFont">
            <li>
              • UX designer designing an ecommerce mobile app from conception to
              delivery
            </li>
          </ul>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Duration</p>
          <ul className="2xl:text-2xl text-xl font-bold mt-3 textFont">
            <li>• 4 Weeks</li>
            <li>• 22+ Screens</li>
          </ul>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-80 2xl:w-96 h-3/5 text-gray-900 gap-3 shadow-xl rounded-2xl">
          <div className="mt-9">
            <p className="text-gray-900 md:text-4xl 2xl:text-6xl">Tools</p>
            <ul className="2xl:text-2xl text-xl font-bold mt-3 textFont">
              <li>• Figma</li>
              <li>• Google Form</li>
              <li>• Microsoft Word</li>
              <li>• Meet</li>
              <li>• FigJam</li>
            </ul>
          </div>
        </div>
      </section>

      {/* User survey */}

      <section className="p-28 bg-custom-green w-full h-auto flex gap-12">
        <div className="w-1/4 bg-green-lite flex flex-col md:p-8 2xl:p-14 items-start justify-center text-gray-900 rounded-2xl">
          <p className="2xl:text-6xl md:text-4xl font-bold">Process</p>
          <p className="text-3xl mt-10 font-semibold">
            <ul className="2xl:text-2xl md:text-xl font-bold mt-3 textFont">
              <li>• Empathize with user</li>
              <li>• Define pain point</li>
              <li>• Ideate solution</li>
              <li>• Create wireframes and prototype</li>

              <li>• Test</li>
            </ul>
          </p>
        </div>
        <div className="w-3/4 h-full 2xl:p-24 md:p-10 border border-slate-00 rounded-2xl bg-green-lite flex flex-col items-center justify-center">
          <p className="md:text-4xl 2xl:text-6xl font-bold">User survey</p>
          <p className="md:text-xl text-gray-700 2xl:text-3xl mt-5 textFont">
            The quantitative research consisted of ten survey participants who
            are comfortable inserting card information online, and who like to
            shop online. Following are the survey questions and responses:
          </p>
          <div className="2xl:mt-10 mt-5 flex-col flex items-center justify-evenly gap-10">
            {/* <div className="flex w-  items-center justify-evenly">
                  <PieChart number={one}/>
                  <PieChart number={two}/>
                </div>
                <div className="flex w- items-center justify-evenly">
               <PieChart number={three}/>
                  <PieChart number={four}/>
                </div> */}

            <img
              src="https://i.ibb.co/jhHp7Sd/graph.png"
              alt="graph"
              border="0"
            />
          </div>
        </div>
      </section>

      {/* persona 1 */}
      <section className="flex items-center justify-center h-auto md:mt-[2rem] 2xl:mt-[25rem] textFont">
        <div className="w-1/2 rounded-2xl bg-custom-green flex flex-col items-center justify-center p-10">
          {/* <p className="md:text-4xl 2xl:text-6xl font-black">Persona</p> */}
          <div className="flex mt-10 gap-10">
            <img
              src="https://i.ibb.co/znxnZbt/Par-1.png"
              alt="Par-1"
              border="0"
              className=" w-64 md:h-64 2xl:h-96 2xl:w-96 rounded-full object-cover shadow-2xl border-blue-500 border-4"
            />

            {/* <div className=" 2xl:p-10 md:p-5 bg-green-lite rounded-3xl">
                  <p className="md:text-3xl 2xl:text-4xl  font-bold">Background</p>
                  <p className="2xl:text-xl md:text-sm font-bold mt-5">
                    Dipto is a full time HR student at Georgia State University.
                    During his busy schedule, he sometimes likes to order online,
                    but products listed for sale in store aren’t on the website.
                    Dipto would like to see all the products on the website so he
                    has more options to choose from.
                  </p>
                </div> */}
          </div>

          <div className="flex flex-col 2xl:gap-10 md:gap-5 mt-5 border-2 border-slate-300 w-full rounded-lg p-5">
            <div className="flex items-center justify-center gap-10 p-5">
              <p className="font-black uppercase text-blue-700">Archetype</p>
              <p className="font-bold text-sm">Tech Savvy</p>
            </div>
            <div className="border border-b-0 border-black"></div>

            <div className="flex items-center justify-center gap-10 p-5">
              <p className="font-black uppercase text-blue-700">Background</p>
              <p className="font-bold text-sm">
                Nahir is currently operating a startup business while working as
                a senior software engineer for a large company. For business
                purposes, he orders computer parts more frequently.
              </p>
            </div>
            <div className="border border-b-0 border-black"></div>

            <div className="flex items-center justify-center gap-10 p-5">
              <p className="font-black uppercase text-blue-700">Motivations</p>
              <p className="font-bold text-sm">
                Nahir needs to purchase graphics cards for his business at a
                more affordable price.
              </p>
            </div>
            <div className="border border-b-0 border-black"></div>

            <div className="flex items-center justify-center gap-10 p-5">
              <p className="font-black uppercase text-blue-700">DEVICES</p>
              <p className="font-bold text-sm">
                Nahir requires a smartphone with sufficient storage space to
                download the application in order to access the product.
              </p>
            </div>
            <div className="border border-b-0 border-black"></div>

            <div className="flex items-center justify-center gap-10 p-5">
              <p className="font-black uppercase text-blue-700">PAIN POINTS</p>
              <p className="font-bold text-sm">
                Nahir's business does not generate much profit because computer
                stores sell parts at an expensive price.
              </p>
            </div>
            <div className="border border-b-0 border-black"></div>

            <div className="flex items-center justify-center gap-10 p-5">
              <p className="font-black uppercase text-blue-700">Goals</p>
              <p className="font-bold text-sm">
                Nahir needs to know what to buy and follow along with the
                product to purchase.
              </p>
            </div>
            <div className="border border-b-0 border-black"></div>
          </div>

          <div className="flex flex-col mt-5 p-5">
            <div className="flex items-center justify-center mb-5">
              <p className="font-black text-lg">Personality</p>
            </div>

            <div className="mb-5">
              <div className="flex items-start justify-between w-96 ">
                <p className="font-bold text-sm">Introvert</p>
                <p className="font-bold text-sm">Extrovert</p>
              </div>
              <div className="mt-5 flex flex-col relative">
                <div className="border border-b-0 border-black"></div>
                <div className="w-10 h-5 bg-blue-600 rounded-xl absolute -mt-2 left-64"></div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-start justify-between w-96 ">
                <p className="font-bold text-sm">Analytical</p>
                <p className="font-bold text-sm">Creative</p>
              </div>
              <div className="mt-5 flex flex-col relative">
                <div className="border border-b-0 border-black"></div>
                <div className="w-10 h-5 bg-blue-600 rounded-xl absolute -mt-2 left-44"></div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-start justify-between w-96 ">
                <p className="font-bold text-sm">Busy</p>
                <p className="font-bold text-sm">Time rich</p>
              </div>
              <div className="mt-5 flex flex-col relative">
                <div className="border border-b-0 border-black"></div>
                <div className="w-10 h-5 bg-blue-600 rounded-xl absolute -mt-2 left-14"></div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-start justify-between w-96 ">
                <p className="font-bold text-sm">Messy</p>
                <p className="font-bold text-sm">Organized</p>
              </div>
              <div className="mt-5 flex flex-col relative">
                <div className="border border-b-0 border-black"></div>
                <div className="w-10 h-5 bg-blue-600 rounded-xl absolute -mt-2 left-44"></div>
              </div>
            </div>

            <div className="mb-5">
              <div className="flex items-start justify-between w-96 ">
                <p className="font-bold text-sm">Independent</p>
                <p className="font-bold text-sm">Team player</p>
              </div>
              <div className="mt-5 flex flex-col relative">
                <div className="border border-b-0 border-black"></div>
                <div className="w-10 h-5 bg-blue-600 rounded-xl absolute -mt-2 left-64"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* User Journey Map */}
      <section className=" flex flex-col bg-custom-green w-full h-auto gap-12 mt-10">
        <p className="md:text-4xl 2xl:text-5xl font-black p-10">
          User Journey Map
        </p>
        <div className="w-full h-20 bg-gray-300 -mt-10 flex items-center justify-start">
          <p className="text-4xl font-bold pl-20">NAHIR</p>
        </div>
        <div className="w-full h-auto pl-20 pt-10 pb-10 bg-gray-200 -mt-12 gap-5 flex flex-col items-center justify-start">
          <div className="flex flex-col items-start justify-start w-full gap-5">
            <img
              src="https://i.ibb.co/znxnZbt/Par-1.png"
              alt="Par-1"
              border="0"
              className=" w-28 md:h-28 2xl:h-96 2xl:w-96 rounded-full object-cover shadow-2xl border-blue-500 border-4"
            />
            <p className="text-4xl font-black ">NAHIR</p>
          </div>
          <div className="flex items-center justify-around w-full gap-10">
            <p className="text-xl text-gray-500 font-bold w-3/5 textFont">
              Nahir is currently operating a startup business while working as a
              senior software engineer for a large company. For business
              purposes, he order computer parts more frequently. He doesn’t get
              a good deal other than black friday.
            </p>
            <div className="w-2/5 flex flex-col -mt-5">
              <p className="text-2xl font-black ">GOALS, NEEDS, OUTCOMES</p>
              <div className="text-xl font-bold text-gray-500 pl-10 textFont">
                <ul>
                  <li>Make profit</li>
                  <li>Good deal</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full flex items-center justify-center textFont">
          <table className="border border-blue-700 border-dashed">
            <tr className="border border-blue-700 border-dashed">
              <th className="border border-blue-700 border-dashed">PHASES</th>
              <th className="border border-blue-700 border-dashed">Approach</th>
              <th className="border border-blue-700 border-dashed">Discover</th>
              <th className="border border-blue-700 border-dashed">
                DECISION MAKING
              </th>
              <th className="border border-blue-700 border-dashed">ACTION</th>
              <th className="border border-blue-700 border-dashed">
                POST-ACTION
              </th>
            </tr>
            <tr className="border border-blue-700 border-dashed">
              <td className="rotate-90 text-sm w-1">EXPERIENCE</td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
            </tr>

            <tr className="border border-blue-700 border-dashed">
              <td className="rotate-90 text-sm w-1">EXPERIENCE</td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    Not able to find the
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
            </tr>

            <tr className="border border-blue-700 border-dashed">
              <td className="rotate-90 text-sm w-1">EXPERIENCE</td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
            </tr>

            <tr className="border border-blue-700 border-dashed">
              <td className="rotate-90 text-sm w-1">EXPERIENCE</td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
              <td className="border border-blue-700 border-dashed">
                <div className="flex gap-2 p-5">
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                  <div className="w-20 h-20 bg-slate-300 p-2 flex items-center justify-center text-xs">
                    fdgd dfvdf sdf
                  </div>
                </div>
              </td>
            </tr>
          </table>
        </div>
      </section>

      {/* UI Style Guidelines */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-auto gap-12">
        <p className="2xl:text-7xl md:text-5xl font-black">
          UI Style Guidelines
        </p>
        <div className="flex gap-10 p-5 items-center justify-around">
          <div className="flex flex-col items-center justify-center">
            <p className="2xl:text-6xl md:text-4xl font-black">
              <span className=" text-gray-500">0.1&nbsp;</span>Colors
            </p>
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex gap-5 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-one"></div>
                  <p className="font-bold text-sm">#F24E1E</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-two"></div>
                  <p className="font-bold text-sm">#000000</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-three"></div>
                  <p className="font-bold text-sm">#FFE6D9</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-four"></div>
                  <p className="font-bold text-sm">#73A58B</p>
                </div>
              </div>
              <div className="flex gap-5 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-five"></div>
                  <p className="font-bold text-sm">#FFFFFF</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-six"></div>
                  <p className="font-bold text-sm">#231F20</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-seven"></div>
                  <p className="font-bold text-sm">#D9D9D9</p>
                </div>

                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-eight"></div>
                  <p className="font-bold text-sm">#EFEDE0</p>
                </div>
              </div>
              <div className="flex gap-5 items-center justify-center">
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-nine"></div>
                  <p className="font-bold text-sm">#B3B3B3</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-ten"></div>
                  <p className="font-bold text-sm">#53686A</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-elv"></div>
                  <p className="font-bold text-sm">#FE9C69</p>
                </div>
                <div className="flex flex-col gap-2 items-center justify-center">
                  <div className="w-16 h-16 rounded-lg shadow-md shadow-slate-400 bg-cust-twv"></div>
                  <p className="font-bold text-sm">#ED6C30</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col -mt-36">
            <p className="2xl:text-6xl md:text-4xl font-black">
              <span className=" text-gray-500">0.1&nbsp;</span>Typography
            </p>
            <div className="flex items-center justify-center mt-10 gap-10">
              <div className="flex flex-col items-center justify-center">
                <p className="2xl:text-3xl md:text-2xl mb-5 font-black">
                  Montagu Slab
                </p>
                <p className="text-xl font-black mt-3">Heading 1</p>
                <p className="text-lg font-bold mt-3">Heading 2</p>
                <p className="text-base font-bold mt-3">Heading 3</p>
                <p className="text-sm font-bold mt-3">Heading 4</p>
              </div>
              <div className="flex flex-col items-center justify-center">
                <p className="2xl:text-3xl md:text-2xl font-black mb-5">
                  Font Size
                </p>
                <p className="text-xl font-black mt-3">21 PX</p>
                <p className="text-lg font-black mt-3">18 PX</p>
                <p className="text-base font-black mt-3">15 PX</p>
                <p className="text-sm font-black mt-3">30 PX</p>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center -mt-36">
            <p className="2xl:text-6xl md:text-4xl font-black">
              <span className=" text-gray-500">0.3&nbsp;</span>Iconography
            </p>
            <div className="flex mt-10 items-center justify-center gap-4 2xl:text-6xl md:text-4xl">
              <div className="flex flex-col gap-10 items-center justify-center">
                <CiSearch className="text-gray-500" />
                <MdCancel className="2xl:text-9xl md:text-5xl text-orange-700" />
                <ImUser className="2xl:text-9xl md:text-6xl text-orange-700" />
              </div>
              <div className="flex flex-col gap-10  items-center justify-center">
                <BsChatRightText className="2xl:text-8xl md:text-4xl text-gray-500" />
                <IoIosArrowBack className="text-4xl" />
                <ImCross className="text-6xl text-orange-700" />
              </div>
              <div className="flex flex-col gap-10 items-center justify-center ">
                <HiOutlineMailOpen className="2xl:text-5xl md:text-4xl text-orange-700" />
                <MdOutlineDesktopWindows className="2xl:text-7xl md:text-6xl text-orange-700" />
                <ImCart className="2xl:text-7xl md:text-4xl text-orange-700" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Site Map */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-screen gap-12">
        <p className="2xl:text-7xl md:text-5xl  font-black">Site Map</p>
        <div className="rounded-xl">
          <img
            src="https://i.ibb.co/xzF6h4d/Screenshot-2023-12-01-192630.png"
            alt="Screenshot-2023-12-01-192630"
            border="0"
            className="rounded-xl"
          />
        </div>
      </section>

      {/* Digital Wire-frames */}
      <section className="p-28 flex flex-col bg-custom-green w-full h-full gap-12">
        <p className="2xl:text-7xl md:text-5xl  font-black mt-20">
          High-Fidelity Wire-frames
        </p>
        <div className="flex flex-wrap items-center justify-center">
          <Digi_Image
            src={"https://i.ibb.co/CQhhPbz/high-1.png"}
            alt={"high-1"}
          />

          <Digi_Image src={"https://i.ibb.co/KDGSKrJ/h2.png"} alt={"h2"} />

          <Digi_Image src={"https://i.ibb.co/QmkVFzj/h3.png"} alt={"h3"} />

          <Digi_Image src={"https://i.ibb.co/r5k2nsM/h4.png"} alt={"h4"} />
        </div>

        <div className="flex flex-wrap items-center justify-center mt-10">
          <Digi_Image src={"https://i.ibb.co/Q70MJmM/h5.png"} alt={"h5"} />

          <Digi_Image src={"https://i.ibb.co/DfDBTSY/h6.png"} alt={"h6"} />

          <Digi_Image src={"https://i.ibb.co/R63ySbM/h7.png"} alt={"h7"} />

          <Digi_Image src={"https://i.ibb.co/0mvYPX0/h8.png"} alt={"h8"} />
        </div>

        <div className="flex flex-wrap items-center justify-center mt-10">
          <Digi_Image src={"https://i.ibb.co/VW3J0mD/h9.png"} alt={"h9"} />

          <Digi_Image src={"https://i.ibb.co/zPn1whX/h10.png"} alt={"h10"} />

          <Digi_Image src={"https://i.ibb.co/9hG85MG/h11.png"} alt={"h11"} />

          <Digi_Image src={"https://i.ibb.co/Jv6CccX/h12.png"} alt={"h12"} />
        </div>

        <div className="flex flex-wrap items-center justify-center mt-10">
          <Digi_Image src={"https://i.ibb.co/7NHKjt3/h13.png"} alt={"h13"} />

          <Digi_Image src={"https://i.ibb.co/D5cQMPB/h14png.png"} alt={"h14"} />

          <Digi_Image src={"https://i.ibb.co/TtYGcHb/h15.png"} alt={"h15"} />

          <Digi_Image src={"https://i.ibb.co/vLmH4NN/h16.png"} alt={"h16"} />
        </div>

        <div className="flex flex-wrap items-center justify-center mt-10">
          <Digi_Image src={"https://i.ibb.co/3MNJGw0/h17png.png"} alt={"h17"} />

          <Digi_Image src={"https://i.ibb.co/pJ97V7f/h18.png"} alt={"h18"} />

          <Digi_Image src={"https://i.ibb.co/p2KNWYK/h19.png"} alt={"h19"} />

          <Digi_Image src={"https://i.ibb.co/df6CJWH/h20.png"} alt={"h20"} />
        </div>
      </section>

      <section className="p-28 flex flex-col bg-custom-green w-full h-screen gap-12 items-center justify-center">
        <p className="text-9xl font-black text-heading-col-1">THANK YOU</p>
      </section>
    </div>
  );
}
