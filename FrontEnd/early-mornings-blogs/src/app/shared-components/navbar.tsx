import React, { useState, useEffect } from "react";

interface NavbarProps{
    setPage
}



export default function Navbar() {
  return (
    <div className="flex items-center border-y-2 border-white-100">
        <button className="ml-5 mb-2 relative group">
            <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
              <div className="flex flex-col justify-between w-[20px] h-[20px] transform transition-all duration-300 origin-center overflow-hidden group-focus:translate-x-1.5">
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:rotate-[42deg] group-focus:w-2/3 delay-150"></div>
                <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:translate-x-10"></div>
                <div className="bg-white h-[2px] w-7 transform transition-all duration-300 origin-left group-focus:-rotate-[42deg] group-focus:w-2/3 delay-150"></div>
              </div>
            </div>
          </button>
      <div className="text-xl font-extralight">
       
          
       
        <a className="ml-24" href="#posts" onClick={}>
          Posts
        </a>
        <a className="ml-24" href="#pricing">
          Images
        </a>
        <button className="store-login-btn text-xl font-extralight absolute right-0 mr-12">
          Subscribe
        </button>
      </div>
    </div>
  );
}
