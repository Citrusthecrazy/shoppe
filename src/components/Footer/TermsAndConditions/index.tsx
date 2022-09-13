import React from "react";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
  return (
    <div className="flex flex-row gap-4 items-center">
      <input id="terms" type="checkbox" className="w-4 h-4 accent-accent" />
      <label htmlFor="terms" className="text-xs leading-5">
        I agree to the website's{" "}
        <Link to="#" className="text-accent hover:underline">
          Terms and Conditions
        </Link>
      </label>
    </div>
  );
};

export default TermsAndConditions;
