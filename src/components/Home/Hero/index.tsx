import React from "react";
import { Link } from "react-router-dom";
import hero from "../../../assets/hero.png";
const Hero = () => {
  return (
    <div className="hidden lg:block relative rounded-2xl overflow-hidden">
      <img src={hero} alt="hero" className="object-cover" />
      <div className="absolute top-[226px] left-10 text-white">
        <h1 className="text-[33px] leading-[43px] font-bold">Gold Big Hoops</h1>
        <p className="mt-4 text-[26px] leading-9">68.00 EUR</p>
        <div className="mt-12" />
        <Link
          to="/404"
          className="text-xl font-bold text-white px-8 py-3 rounded-md ring-2 ring-white hover:bg-white hover:text-accent transition-all duration-150">
          View Product
        </Link>
      </div>
    </div>
  );
};

export default Hero;
