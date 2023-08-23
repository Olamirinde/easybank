import React from "react";
import mockups from "../assets/mockups.png";

const Hero = () => {
  return (
    <div>
      <div className="w-full flex">
        <div className="w-[50%] flex flex-col p-5 justify-center">
          <h1 className="text-7xl text-Dark_Blue mb-5 justify-center px-auto">
            Next generation <br />
            digital banking
          </h1>
          <p className="text-2xl text-Dark_Blue break-normal">
            Take your financial life online. Your Easybank account will be a
            one-stop-shop for spending, saving, budgeting, investing, and much
            more.
          </p>
        </div>
        <div className="w-50%]">
          <img src={mockups} alt="mockups-image" />
        </div>
      </div>
      <button className="text-white bg-gradient-to-r from-Lime_Green to-Bright_Cyan text-White px-8 py-3 rounded-full inline">
        Request Invite
      </button>
    </div>
  );
};

export default Hero;
