import React from "react";
import online from "../assets/online.svg";
import onboarding from "../assets/onboarding.svg"
import budgeting from "../assets/budgeting.svg"
import api from "../assets/api.svg"



const CTA = () => {
  return (
    <div>
      <div className="w-50%]">
        <h2 className="text-5xl text-Dark_Blue mb-5 justify-center px-auto">
          Why choose Easybank?
        </h2>
        <p className="text-2xl text-Dark_Blue break-normal mt-5 mb-5">
          We leverage Open Banking to turn your bank account into your financial
          hub. <br /> Control your finances like never before.
        </p>
      </div>
      <div className="flex">
        <div className="mt-10 w-[25%] p-5 mb-5">
          <img src={online} alt="" className="mb-5" />
          <h2 className="text-3xl text-Dark_Blue mb-5 justify-center px-auto">
            Online Banking
          </h2>
          <p className="text-lg text-Dark_Blue break-normal mt-5">
            Our modern web and mobile applications allow you to keep track of
            your finances wherever you are in the world.
          </p>
        </div>
        <div className="mt-10 w-[25%] p-5 mb-5">
          <img src={budgeting} alt="" className="mb-5" />
          <h2 className="text-3xl text-Dark_Blue mb-5 justify-center px-auto">
            Simple Budgeting
          </h2>
          <p className="text-lg text-Dark_Blue break-normal mt-5">
            See exactly where your money goes each month. Receive notifications
            when you’re close to hitting your limits.
          </p>
        </div>
        <div className="mt-10 w-[25%] p-5 mb-5">
          <img src={onboarding} alt="" className="mb-5" />
          <h2 className="text-3xl text-Dark_Blue mb-5 justify-center px-auto">
            Fast Onboarding
          </h2>
          <p className="text-lg text-Dark_Blue break-normal mt-5">
            We don’t do branches. Open your account in minutes online and start
            taking control of your finances right away.
          </p>
        </div>
        <div className="mt-10 w-[25%] p-5 mb-5">
          <img src={api} alt="" className="mb-5" />
          <h2 className="text-3xl text-Dark_Blue mb-5 justify-center px-auto">
            Open API
          </h2>
          <p className="text-lg text-Dark_Blue break-normal mt-5">
            Manage your savings, investments, pension, and much more from one
            account. Tracking your money has never been easier.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTA;
