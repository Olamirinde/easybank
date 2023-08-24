import React from "react";
import logo from "../assets/logo.svg";
import facebook from "../assets/facebook.svg";
import youtube from "../assets/youtube.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import pinterest from "../assets/pinterest.svg";

const Footer = () => {
  return (
    <div className="flex mt-20 p-10 bg-Dark_Blue">
      <div className="w-[25%]">
        <div className="mb-10">
          <img src={logo} alt="logo-image" className="text-White" />
        </div>
        <div className="flex">
          <img src={facebook} alt="facebook icon" />
          <img src={youtube} alt="youtube icon" className="ml-5" />
          <img src={twitter} alt="twitter icon" className="ml-5" />
          <img src={pinterest} alt="pinterest icon" className="ml-5" />
          <img src={instagram} alt="instagram icon" className="ml-5" />
        </div>
      </div>
      <div className="w-[50%] flex justify-center">
        <div className="flex flex-col text-White">
          <a className="mb-5" href="">
            About us
          </a>
          <a className="mb-5" href="">
            Contact
          </a>
          <a href="">Blog</a>
        </div>
        <div className="ml-24 flex flex-col text-White">
          <a className="mb-5" href="">
            Career
          </a>
          <a className="mb-5" href="">
            Support
          </a>
          <a href="">Privacy Policy</a>
        </div>
      </div>
      <div className="w-[25%]">
        <div className="mb-5">
          <button className="text-white bg-gradient-to-r from-Lime_Green to-Bright_Cyan text-White px-8 py-3 rounded-full">
            Request Invite
          </button>
        </div>
        <div className="text-White">© Easybank. All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
