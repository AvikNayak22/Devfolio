import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import cplus from "../assets/cplus.png";
import Mysql from "../assets/mysql.png";
import Github from "../assets/github.png";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#1F1F1F] text-[#EEEEEE]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline uppercase">Contact</p>
          <p className="py-5">
            Want to get in touch? Contact me on any of the platform
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-8 gap-10 text-center py-8">
          <div className="shadow-md bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-5">
            <img
              className="w-20 mx-auto"
              src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
              alt="HTML icon"
            />
            {/* <p className="my-4">HTML</p> */}
          </div>
          <div className="shadow-md bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-5">
            <img
              className="w-15 mx-auto"
              src="https://pngimg.com/d/linkedIn_PNG27.png"
              alt="CSS icon"
            />
            {/* <p className="my-4">CSS</p> */}
          </div>
          <div className="shadow-md bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-6">
            <img
              className="w-20 mx-auto"
              src="https://www.freepnglogos.com/new-twitter-x-logo-transparent-png-4.png"
              alt="Javascript icon"
            />
            {/* <p className="my-4">Javascript</p> */}
          </div>
          <div className="shadow-md bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-2">
            <img
              className="w-20 mx-auto"
              src="https://static.vecteezy.com/system/resources/previews/017/221/839/original/telegram-logo-transparent-free-png.png"
              alt="Reactjs icon"
            />
            {/* <p className="my-4">React Js</p> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
