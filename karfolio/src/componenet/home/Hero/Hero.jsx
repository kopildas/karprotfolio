import React from 'react';
import './Hero.css';

export default function Hero() {
  return (
    <div>
      <div className="h-[100vh] relative fon1">
        <div className="warpper z-20">
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
          <div className="rounded-full w-64 h-64 blur-[150px] "></div>
        </div>
        <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-30">
          <div className="flex items-center justify-center flex-col">
            <p className="text text-4xl mb-4">Hi I'm Austin</p>
            <p className="text-2xl mb-1">Product Designer by profession & passion, focusing</p>
            <p className="text-2xl mb-1"> on products and design system. Crafting cool</p>
            <p className="text-2xl mb-1"> resources and blogs.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
