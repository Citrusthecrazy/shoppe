import React, { FC } from "react";
import { Link, useLocation } from "react-router-dom";
type NavLinkProps = {
  to: string;
  text: string;
};
const NavLink: FC<NavLinkProps> = ({ to, text }) => {
  const { pathname } = useLocation();
  return (
    <Link to={to} className="relative cursor-pointer">
      <span>{text}</span>
      {pathname === to && (
        <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-accent" />
      )}
    </Link>
  );
};

export default NavLink;
