import React from "react";

export default function Pie_Project() {
  return (
    <div className="fon">
      <section className="p-16 bg-custom-green h-screen w-full flex gap-12">
        <div
          className="w-1/2 flex items-center justify-center text-9xl font-bl custom-text-color"
          style={{
            fontSize: "12rem",
            fontWeight: 900,
            textShadow: "1px 1px 1px #000" /* Add other styles as needed */,
          }}
        >
          Pie Chart
        </div>
        <div className="w-1/2 border border-slate-00 rounded-2xl bg-green-lite flex flex-col items-center justify-center">
          <div className="flex object-contain">
            <img
              src="https://i.ibb.co/zXMYCW1/Picture1-removebg-preview.png"
              alt="Picture1-removebg-preview"
              border="0"
              className="w-1/2"
            />
            <img
              src="https://i.ibb.co/3RQM4w4/Pie-cover-Picture-2-removebg-preview.png"
              alt="Pie-cover-Picture-2-removebg-preview"
              border="0"
              className="w-1/2"
            />
          </div>
          <div className="flex items-center justify-center 2xl:-mt-24 xl:-mt-16 ">
            <img
              src="https://i.ibb.co/K582r7X/Pie-cpver-Picture-3-removebg-preview.png"
              alt="Pie-cpver-Picture-3-removebg-preview"
              border="0"
              className="xl:w-full 2xl:w-full"
            />
          </div>
        </div>
      </section>

      <section className="p-16 bg-custom-green w-full flex flex-col gap-12">
        <div
          className="w-full flex items-center justify-center text-9xl font-bl custom-text-color"
          style={{
            fontSize: "12rem",
            fontWeight: 900,
            textShadow: "1px 1px 1px #000" /* Add other styles as needed */,
          }}
        >
          <p>Project Overview</p>
        </div>

        <div className="p-16 mt-16 font-bold border border-slate-200 rounded-2xl bg-white flex flex-col items-center justify-center">
          <p className="text-5xl">
            Pie Chart is designed to sell all types of baked goods and
            beverages. It is a comprehensive and user-friendly platform that
            allows customers to easily browse and purchase products and
            services.
          </p>
        </div>
      </section>

      <section className="p-28 bg-custom-green w-full h-screen flex gap-12">
        <div className="w-1/4 bg-slate-100 flex flex-col p-14 items-start justify-center text-gray-900 rounded-2xl">
          <p className="text-6xl font-bold">Problem</p>
          <p className="text-3xl mt-10 font-semibold">
            Bakery websites may encounter common challenges that can hinder
            their success. These challenges include a lack of a strong online
            presence, outdated website design, poor website content, technical
            difficulties, and a lack of social media presence.
          </p>
        </div>
        <div className="w-3/4 h-full p-24 border border-slate-00 rounded-2xl bg-custom-box-color flex flex-col items- justify-center">
          <div className="flex p-40 w-full items-center justify-center object-contain mt-10 ">
            <img
              src="https://i.ibb.co/t4FmGts/Picture3.png"
              alt="Picture3"
              border="0"
              className="xl:w-full 2xl:w-full rounded-2xl z-20"
            />
          </div>
          <div className="flex w-full p-40 gap- object-contain -mt-80 z-40">
            <img
              src="https://i.ibb.co/dpDzsjv/Problem-Picture-2.png"
              alt="Problem-Picture-2"
              border="0"
              className="w-1/2 object-contain -mt-36 rounded-2xl"
            />
            <div className=" bg-custom-box-color rounded-2xl z-40 -mt-40">
              <div className="bg-custom-box-color p-4 w-full rounded-2xl">
                <img
                  src="https://i.ibb.co/FgyQLZ2/Problem-Picture-3.png"
                  alt="Problem-Picture-3"
                  border="0"
                  className="w-full rounded-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full h-screen bg-custom-green flex gap-5 items-center justify-evenly font-bold">
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-96 h-3/5 text-gray-900 gap-3 rounded-2xl">
          <p className="text-gray-900 text-6xl">Goal 1</p>
          <p className="text-gray-900 text-2xl">
            Clear and concise content will make easy to understand
          </p>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-96 h-3/5 text-gray-900 gap-3 rounded-2xl">
          <p className="text-gray-900 text-6xl">Goal 2</p>
          <p className="text-gray-900 text-2xl">
            Consistent design makes polished and professional look
          </p>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-96 h-3/5 text-gray-900 gap-3 rounded-2xl">
          <p className="text-gray-900 text-6xl">Goal 3</p>
          <p className="text-gray-900 text-2xl">
            Up to date with social media to connect with customers
          </p>
        </div>
      </section>


      <section className="w-full h-screen bg-custom-green flex gap-5 items-center justify-evenly font-bold">
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-96 h-3/5 text-gray-900 gap-3 rounded-2xl">
          <p className="text-gray-900 text-6xl">My Role</p>
          <ul className="text-2xl font-bold mt-3">
            <li>> UX Design</li>
            <li>> UI Design</li>
            <li>> UX Research</li>
          </ul>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-96 h-3/5 text-gray-900 gap-3 rounded-2xl">
          <p className="text-gray-900 text-6xl">Duration</p>
          <ul className="text-2xl font-bold mt-3">
            <li>> 24 Weeks</li>
            <li>> 40+ Screens</li>
          </ul>
        </div>
        <div className="bg-green-lite flex flex-col p-5 items-center justify-center w-96 h-3/5 text-gray-900 gap-3 rounded-2xl">
          <div className="mt-9">
          <p className="text-gray-900 text-6xl">Tools</p>
          <ul className="text-2xl font-bold mt-3">
            <li>> Adobe XD</li>
            <li>> Google Form</li>
            <li>> Microsoft Word</li>
            <li>> Zoom</li>
          </ul>
          </div>
        </div>
      </section>


      <section className="p-28 bg-custom-green w-full h-screen flex gap-12">
        <div className="w-1/4 bg-green-lite flex flex-col p-14 items-start justify-center text-gray-900 rounded-2xl">
          <p className="text-6xl font-bold">Problem</p>
          <p className="text-3xl mt-10 font-semibold">
          <ul className="text-2xl font-bold mt-3">
            <li>> Empathize with user</li>
            <li>> Define pain point</li>
            <li>> Ideate solution</li>
            <li>> Create wireframes and </li>
            <li>{   }prototyp</li>
            <li>> Test</li>
          </ul>
          </p>
        </div>
        <div className="w-3/4 h-full p-24 border border-slate-00 rounded-2xl bg-green-lite flex flex-col items-center justify-center">
         <p>User survey</p>
         <p>I conducted a user survey to gain valuable insights. By 
strategically posting the survey across various online 
communities, I successfully reached a diverse audience. 
Within just 24 hours, I received an impressive 35 
responses.</p>
        </div>
      </section>

    </div>
  );
}
