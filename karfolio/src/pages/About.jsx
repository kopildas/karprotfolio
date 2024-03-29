import React from "react";

export default function About() {
  return (
    <div>
      <section className="p-28 fon flex flex-col bg-custom-green w-full h-screen gap-12 items-center justify-around">
        <div className="w-full flex">
          <div className="w-1/2">
            <p className="text-xl text-gray-900 textFont "><span className="text-5xl">Hello,</span> <br /> <br /> My name is
<b> Pappu Kar</b> <br />
And I'm a UI/UX Designer. <br /> <br /> I'm passionate about creating meaningful experiences for digital products. I am an experienced customer service professional looking to move into a different role based on my previous experience. <br /><br /> In my research, I found UX to be fascinating.  My current project involves working with a developer on a new product that compromises usability and design standards.</p>
          </div>
          <div className="w-1/2 p-24 -mt-10">
            <div className="w-full h-64 flex items-center justify-center">
            <img src="https://i.ibb.co/C2zKb3m/second.jpg" alt="Par-1" border="0" className="rounded-blob h-[500px] shadow-2xl"/>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
