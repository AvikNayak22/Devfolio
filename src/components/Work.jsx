import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { GoBrowser } from "react-icons/go";
import Country from "../assets/projects/Country.jpg";
import PriorityWise from "../assets/projects/PriorityWise.jpg";
import google from "../assets/projects/google.jpg";

const Work = () => {
  return (
    <div name="work" className="w-full sm:h-screen  bg-[#EFE1BD]">
      <div className="max-w-[1300px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline uppercase">Projects</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${google})` }}
            className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <span className="text-2xl font-bold  text-white tracking-wider text-center">
                Google Seach clone
              </span>
              <span className="text-sm text-white tracking-wider text-center py-5">
                <ul className="flex flex-row mx-5 shadow-md">
                  <li className="bg-[#474646] py-2">React.js</li>
                  <li className="bg-[#2A2929] py-2">Tailwind</li>
                  <li className="bg-[#474646] py-2">Custom Search JSON API</li>
                </ul>
              </span>
              <div className="pt-8 text-center">
                <a href="https://google-clone-1h9i.vercel.app/" target="_blank">
                  <button className="text-center rounded-xl p-2 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <span className="flex flex-row items-center px-2">
                      Demo <GoBrowser className="ml-1" />
                    </span>
                  </button>
                </a>
                <a
                  href="https://github.com/AvikNayak22/google-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-xl p-2 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <span className="flex flex-row items-center px-2">
                      Repo <AiFillGithub className="ml-1" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Country})` }}
            className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <span className="text-2xl font-bold  text-white tracking-wider text-center">
                Country Info Finder
              </span>
              <span className="text-sm text-white tracking-wider text-center py-5">
                <ul className="flex flex-row mx-5 shadow-md">
                  <li className="bg-[#474646] py-2">React.js</li>
                  <li className="bg-[#2A2929] py-2">Tailwind</li>
                  <li className="bg-[#474646] py-2">Countries API</li>
                </ul>
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://an-country-info-app.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-xl p-2 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <span className="flex flex-row items-center px-2">
                      Demo <GoBrowser className="ml-1" />
                    </span>
                  </button>
                </a>
                <a
                  href="https://github.com/AvikNayak22/Country-Info-Finder"
                  target="_blank"
                >
                  <button className="text-center rounded-xl p-2 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <span className="flex flex-row items-center px-2">
                      Repo <AiFillGithub className="ml-1" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${PriorityWise})` }}
            className="shadow-md shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover Effects */}
            <div className="opacity-0 group-hover:opacity-100 flex flex-col">
              <span className="text-2xl font-bold  text-white tracking-wider text-center">
                PriorityWise
              </span>
              <span className="text-sm text-white tracking-wider text-center py-5">
                <ul className="flex flex-row mx-5 justify-center shadow-md">
                  <li className="bg-[#2a2929] py-2">React.js</li>
                  <li className="bg-[#474646] py-2">Sass</li>
                </ul>
              </span>
              <div className="pt-8 text-center">
                <a href="https://an-task-manager.netlify.app/" target="_blank">
                  <button className="text-center rounded-xl p-2 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <span className="flex flex-row items-center px-2">
                      Demo <GoBrowser className="ml-1" />
                    </span>
                  </button>
                </a>
                <a
                  href="https://github.com/AvikNayak22/PriorityWise"
                  target="_blank"
                >
                  <button className="text-center rounded-xl p-2 m-2 bg-white text-gray-700 font-bold text-lg ">
                    <span className="flex flex-row items-center px-2">
                      Repo <AiFillGithub className="ml-1" />
                    </span>
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
