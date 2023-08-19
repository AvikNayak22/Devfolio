import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#F7F7F7]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full  grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline uppercase">About</p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Hi. I'm Avik, nice to meet you. Please take a look around.</p>
          </div>
          <div className="text-xl">
            <p>
              I have always been fascinated by the power of the internet to
              connect people and facilitate communication, which is what led me
              to pursue a career in web development. I have experience in HTML,
              CSS, JavaScript, and other web technologies, and I enjoy working
              on both the front-end and back-end of web development.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
