import { NavLink } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import Button from "../button/Button";
import { FaBars } from "react-icons/fa6";
import "../../css/style.css";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const isclose = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="h-25 w-full lg:py-3 fixed bg-white z-50">
      <div
        className={`bg-black transition-transform duration-300 transform ${
          (!isOpen) ? "translate-x-0" : "translate-x-full"
        } fixed top-0 right-0 h-screen w-full lg:w-1/3 z-50`}
      >
        <div className="p-5">
          <IoClose onClick={isclose} className="text-white  text-6xl" />
        </div>
        <div className="center-all">
          <div className="h-screen  text-white">
            <div className="flex-col flex p-6 text-3xl">
              <NavLink onClick={isclose} className="my-3" to="/">
                Home
              </NavLink>
              <NavLink onClick={isclose} className="my-3" to="/about">
                About
              </NavLink>
              <NavLink onClick={isclose} className="my-3" to="/service">
                Service
              </NavLink>
              {/* <NavLink onClick={isclose} className="my-3" to="/pages">
                Pages
              </NavLink> */}
              <NavLink onClick={isclose} className="my-3" to="/blog">
                Blog
              </NavLink>
              <NavLink onClick={isclose} className="my-3" to="/pricing">
                Pricing
              </NavLink>
            </div>
          </div>
        </div>
      </div>

      <div className="flex my-5 mycontainer justify-between items-center ">
        <div className="h-[30px]">
          <img
            className="h-full py-1 sm:py-0"
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d9eea831d71fae16b25713_Prospark%20Logo.webp"
            alt=""
          />
        </div>
        <div className="w-3/4 lg:w-[570px] text-[20px] lg:justify-around md:opacity-100 lg:flex hidden text-customGrey">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/service">Service</NavLink>
          {/* <NavLink to="/pages">Pages</NavLink> */}
          <NavLink to="/blog">Blog</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
        </div>
        <div className="w-3/12 md:w-[300px] center-all h-full flex justify-between text-customDark">
          <MdOutlineShoppingCart className="w-1/3 h-[30px]  items-center justify-start flex " />
          <Button
            wid="193px"
            message="GET IN TOUCH"
            className="hidden text-[17px] md:block h-[50px]"
            color="#18122f"
          />
          <FaBars
            onClick={isclose}
            className="center h-[30px] lg:hidden  w-1/3 items-center justify-start flex "
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
