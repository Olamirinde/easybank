import React from "react";
import confetti from "../assets/confetti.jpg";
import currency from "../assets/currency.jpg";
import restaurant from "../assets/restaurant.jpg";
import plane from "../assets/plane.jpg";

const Cards = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-Dark_Blue mt-20 justify-center">
          Latest Articles
        </h2>
      </div>
      <div className="flex">
        {/* Currency card */}
        <div className="w-[25%]">
          <img src={currency} alt="" className="w-[15rem] p-5" />
          <h6 className="text-Dark_Blue">By Claire Robinson</h6>

          <h3 className="text-2xl text-Dark_Blue font-semibold">
            Receive money in any currency with no fees{" "}
          </h3>
          <p className="text-lg text-Dark_Blue break-normal mt-3 mb-5">
            The world is getting smaller and we’re becoming more mobile. So why
            should you be forced to only receive money in a single …
          </p>
        </div>

        {/* Restaurant card */}
        <div className="w-[25%]">
          <img src={restaurant} alt="" className="w-[15rem] p-5" />
          <h6 className="text-Dark_Blue">By Wilson Hutton</h6>
          <h3 className="text-2xl text-Dark_Blue font-semibold">
            Treat yourself without worrying about money{" "}
          </h3>
          <p className="text-lg text-Dark_Blue break-normal mt-3 mb-5 ">
            Our simple budgeting feature allows you to separate out your
            spending and set realistic limits each month. That means you …
          </p>
        </div>

        {/* Plane card */}
        <div className="w-[25%]">
          <img src={plane} alt="" className="w-[15rem] p-5" />
          <h6 className="text-Dark_Blue">By Wilson Hutton</h6>

          <h3 className="text-2xl text-Dark_Blue font-semibold">
            Take your Easybank card wherever you go{" "}
          </h3>
          <p className="text-lg text-Dark_Blue break-normal mt-3 mb-5 ">
            We want you to enjoy your travels. This is why we don’t charge any
            fees on purchases while you’re abroad. We’ll even show you …
          </p>
        </div>

        {/* Confetti card */}
        <div className="w-[25%]">
          <img src={confetti} alt="" className="w-[15rem] p-5" />
          <h6 className="text-Dark_Blue">By Claire Robinson</h6>

          <h3 className="text-2xl text-Dark_Blue font-semibold">
            Our invite-only Beta accounts are now live!{" "}
          </h3>
          <p className="text-lg text-Dark_Blue break-normal mt-3 mb-5 ">
            After a lot of hard work by the whole team, we’re excited to launch
            our closed beta. It’s easy to request an invite through the site ...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
