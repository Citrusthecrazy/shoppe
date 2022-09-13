import shoppingCart from "../../assets/shopping-cart.svg";
import hamburger from "../../assets/hamburger.svg";
import logo from "../../assets/logo.svg";
import closeIcon from "../../assets/close.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { NavLink } from "../../components";
const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = window.location.pathname;
  const toggleMobileMenu = () => {
    setMobileMenuOpen((open) => !open);
  };
  return (
    <div className="relative mx-4 lg:mx-auto lg:max-w-[1248px] my-4 lg:my-16 lg:mb-4  flex flex-row items-center justify-between">
      <Link to="/">
        <img src={logo} className="cursor-pointer" />
      </Link>

      <div className="flex flex-row items-center gap-3">
        <nav className="hidden lg:flex flex-row items-center gap-16 mr-9">
          <NavLink to="/" text="Home" />
          <NavLink to="/shop" text="Shop" />
          <NavLink to="/about" text="Our Story" />
        </nav>
        <Link to="/cart">
          <img src={shoppingCart} className="cursor-pointer  w-5 h-5" />
        </Link>

        <img
          src={mobileMenuOpen ? closeIcon : hamburger}
          className="cursor-pointer lg:hidden w-5 h-5"
          onClick={() => toggleMobileMenu()}
        />
      </div>

      <nav
        className={`bg-white ${
          mobileMenuOpen ? "flex" : "hidden"
        } z-10 absolute inset-0 top-8 flex-col h-[calc(100vh-64px)] gap-4 py-9 text-xl`}>
        <Link
          to="/"
          className="cursor-pointer"
          onClick={() => toggleMobileMenu()}>
          Home
        </Link>
        <Link
          to="/shop"
          className="cursor-pointer"
          onClick={() => toggleMobileMenu()}>
          Shop
        </Link>
        <Link
          to="/about"
          className="cursor-pointer"
          onClick={() => toggleMobileMenu()}>
          Our Story
        </Link>
      </nav>
    </div>
  );
};

export default Navbar;
