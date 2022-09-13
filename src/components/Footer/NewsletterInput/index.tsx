import React from "react";
import arrowRight from "../../../assets/arrow-right.svg";
const NewsletterInput = () => {
  return (
    <div className="flex flex-row items-center justify-between border-b border-black w-full">
      <input
        type="email"
        placeholder="Give an email, get the newsletter"
        className="border-none focus:outline-none text-xs leading-5 placeholder:text-xs flex-grow"
      />
      <img
        src={arrowRight}
        alt="arrow-right"
        className="w-4 h-4 cursor-pointer"
      />
    </div>
  );
};

export default NewsletterInput;
