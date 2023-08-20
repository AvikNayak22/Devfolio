import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#1F1F1F] text-[#EEEEEE]">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4  flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline uppercase">Contact</p>
          <p className="py-5">
            Want to get in touch? Contact me on any of the platform
          </p>
        </div>
        <div className="w-full grid sm:grid-cols-8 grid-cols-3 gap-10  py-8">
          <div className="w-[100px] h-[100px] shadow-md bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-5">
            <a href="https://github.com/AvikNayak22" target="_blank">
              <img
                className="w-20 mx-auto"
                src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                alt="github icon"
              />
            </a>
          </div>
          <div className="w-[100px] h-[100px] shadow-md  bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-5">
            <a
              href="https://www.linkedin.com/in/avik-nayak-50b667222/"
              target="_blank"
            >
              <img
                className="w-15 mx-auto"
                src="https://pngimg.com/d/linkedIn_PNG27.png"
                alt="linkedin icon"
              />
            </a>
          </div>
          <div className="w-[100px] h-[100px] shadow-md bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-6">
            <a href="https://twitter.com/__AvikNayak__" target="_blank">
              <img
                className="w-20 mx-auto"
                src="https://www.freepnglogos.com/new-twitter-x-logo-transparent-png-4.png"
                alt="twitter icon"
              />
            </a>
          </div>
          <div className="w-[100px] h-[100px] shadow-md bg-[#EEEEEE] rounded-[50%] hover:scale-110 duration-500 p-2">
            <a
              href="https://discord.com/users/855503076077076480"
              target="_blank"
            >
              <img
                className="w-20 mx-auto pt-5"
                src="https://logos-world.net/wp-content/uploads/2020/12/Discord-Logo.png"
                alt="discord icon"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
