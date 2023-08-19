import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import Reactjs from "../assets/react.png";
import Tailwind from "../assets/tailwind.png";
import cplus from "../assets/cplus.png";
import Mysql from "../assets/mysql.png";
import Github from "../assets/github.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#1F1F1F] text-white">
      {/* container */}
      <div className="max-w-[1000px] mx-auto  flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline uppercase">Skills</p>
          {/* <p className="py-4">//These are the technologies I've worked with</p> */}
        </div>
        <div className="w-full grid grid-cols-3 sm:grid-cols-6 gap-4 text-center py-8">
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img
              className="w-20 mx-auto"
              src={Javascript}
              alt="Javascript icon"
            />
            <p className="my-4">Javascript</p>
          </div>
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={Reactjs} alt="Reactjs icon" />
            <p className="my-4">React Js</p>
          </div>
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind CSS</p>
          </div>
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={cplus} alt="c++ icon" />
            <p className="my-4">c++</p>
          </div>
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img
              className="w-20 h-20 object-cover mx-auto"
              src={Mysql}
              alt="Mysql icon"
            />
            <p className="my-4">Mysql DB</p>
          </div>
          <div className="shadow-md bg-[#2A2929] rounded-xl hover:scale-110 duration-500 p-5">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
