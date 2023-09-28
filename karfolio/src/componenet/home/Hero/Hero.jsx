import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div>
      <div className="h-[100vh] relative fon1 z-40">
        <div className="warpper ">
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
          <div className="rounded-full md:w-64 md:h-64 w-24 h-24 blur-[50px] md:blur-[100px] "></div>
        </div>
        <div className="absolute -top-20 md:top-0 left-0 w-full h-full flex items-center justify-center z-40">
          <div className="flex items-center justify-center flex-col">
            <p className="text text-[32px] mb-4">Hi I'm Austin</p>
            <p className="md:text-[18px] mb-1">Product Designer by profession & passion, focusing</p>
            <p className="md:text-[18px] mb-1"> on products and design system. Crafting cool</p>
            <p className="md:text-[18px] mb-1"> resources and blogs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
