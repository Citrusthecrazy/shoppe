import React from "react";
import { Link } from "react-router-dom";
import { NewsletterInput, TermsAndConditions } from "../../components";

const Footer = () => {
  return (
    <footer className="mx-4 my-6 lg:mx-auto lg:max-w-[1248px]">
      <NewsletterInput />
      <div className="mb-3" />
      <TermsAndConditions />
      <div className="mb-10" />
      <ul className="flex flex-col gap-2 text-darkGray">
        <li>
          <Link to="#">Contact</Link>
        </li>
        <li>
          <Link to="#">Terms and Services</Link>
        </li>
        <li>
          <Link to="#">Shipping and Returns</Link>
        </li>
      </ul>
      <div className="mb-10" />
      <p className="text-xs text-darkGray leading-5">© 2022 Marko Drakulić</p>
    </footer>
  );
};

export default Footer;
