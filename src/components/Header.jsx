import React from "react";
import logo from "../assets/logo.svg";

const Header = () => {
  return (
    <div className="flex justify-between items-center h-10 p-10 w-auto mx-auto px-4 pl-24">
      <img src={logo} alt="logo-image" />
      <nav className="text-gray-800 font-medium">
        <a className="p-4" href="/">
          Home
        </a>
        <a className="p-4" href="/">
          About
        </a>
        <a className="p-4" href="/">
          Contact
        </a>
        <a className="p-4" href="/">
          Blog
        </a>
        <a className="p-4" href="/">
          Careers
        </a>
      </nav>
      <button className="text-white bg-gradient-to-r from-Lime_Green to-Bright_Cyan text-White px-8 py-2 rounded-full mr-24">
        Request Invite
      </button>
    </div>
  );
};

export default Header;
