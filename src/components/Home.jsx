import React from "react";
import { HiArrowNarrowRight, HiDownload } from "react-icons/hi";
import { Link } from "react-scroll";
import ResumePDF from "../assets/AvikNayakResume.pdf";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full h-screen bg-[#EFE1BD] flex justify-center items-center"
    >
      {/* container */}
      <div className="max-w-[2000px] mx-auto px-6 flex flex-col justify-center items-center h-full">
        <h1 className="text-2xl sm:text-5xl font-bold">Hi,I am Avik Nayak</h1>
        <h3 className="text-xl sm:text-4xl text-[#313544] text-center py-6 max-w-[700px]">
          I am passionate about building projects that are not only useful but
          also good looking.
        </h3>
        <div className="flex flex-row items-center justify-center">
          <button className="group px-6 py-3.5 my-2  bg-[#2A2929] text-[#EEEEEE] hover:bg-[#1F1F1F] duration-300">
            <a
              href={ResumePDF}
              download="Avik-Nayak-Resume"
              target="_blank"
              rel="noreferrer"
            >
              <span className="flex flex-row items-center">
                Download Resume
                <HiDownload className="ml-3" />
              </span>
            </a>
          </button>
          <Link to="work" smooth={true} duration={500}>
            <button className=" group border-2 px-6 py-3 my-2 flex items-center bg-[white] border-black mx-4">
              View Projects
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
