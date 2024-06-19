
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import "./style.css";
import { GoArrowDown } from "react-icons/go";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="bg-white mycontainer my-10 rounded-3xl">
      <div
        className="rounded-2xl p-6 px-4"
        style={{
          "background-image":
            "linear-gradient(180deg, #ffffff 0%, #EADAFE 100%)",
        }}
      >
        <div data-aos="fade-up" className="center-all flex-col lg:h-[600px] h-[300px]">
          <h2 className="text-[36px] lg:text-[90px]">
            <span className="text-customPurple">Let’s</span> Work
          </h2>
          <h2 className="text-Dark text-[36px] lg:text-[90px] flex">
            <img
              className="h-[60px]"
              src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
              alt=""
            />
            Together.
          </h2>
          <button className="center-all p-2 flex-col mt-3 bg-customDark text-white rounded-full w-[90px] h-[90px] lg:w-[124px] lg:h-[124px]">
            <GoArrowDown
              className="animate-bounceY text-[20px] lg:text-[30px] block"
              value={{ fontWeight: "bold" }}
            />
            <p className="text-[14px] lg:text-[20px]">Get in touch</p>
          </button>
        </div>
        <div
          data-aos="fade-up"
          className="flex flex-col lg:flex-row justify-between"
        >
          <div className="my-0 mx-auto lg:min-w-[550px] max-w-[300px] pb-5">
            <div className="center-all lg:justify-start my-40px">
              <img
                className="w-[60%]"
                src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d9eea831d71fae16b25713_Prospark%20Logo.webp"
                alt=""
              />
            </div>
            <div className="mb-3 w-full">
              <h3 className="mb-2 text-customDark lg:text-start text-center text-[20px]">
                Newsletter
              </h3>
              <p className="text-customGrey lg:text-start text-center text-[17px]">
                Sign up to receive latest news and exclusive content.
              </p>
            </div>
            <div className="lg:flex">
              <input
                className="border text-[20px] lg:w-[240px] mr-5 w-full p-3 lg:pl-3 lg:p-0 border-customGrey rounded-lg"
                type="text"
                placeholder="Enter your email"
              />
              <Button
                className="w-full text-[20px] lg:h-full mt-4 lg:m-0 lg:w-[136px]"
                message="Subscribe"
                color="#7158dc"
              />
            </div>
          </div>
          <div
            data-aos="fade-up"
            className="w-full sm:flex justify-between flex-wrap"
          >
            <div className="flex sm:w-2/3">
              <div data-aos="fade-up" className="flex w-1/2 flex-col">
                <h3 className="text-[20px]">Menu</h3>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Home V1
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Home V2
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  About Us
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Contact
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Pricing
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Blog
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Career
                </NavLink>
              </div>
              <div data-aos="fade-up" className="flex w-1/2 flex-col">
                <h3 className="text-[20px]">Pages</h3>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Service
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Service Single
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Project
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Project Single
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Pricing Single
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Blog Single
                </NavLink>
                <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                  Career Single
                </NavLink>
              </div>
            </div>
            <div data-aos="fade-up" className="flex sm:w-1/3 lg:pr-5 flex-col">
              <h3 className="text-[20px]">Utility Pages</h3>
              <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                Style Guide
              </NavLink>
              <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                Changelog
              </NavLink>
              <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                Licence
              </NavLink>
              <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                404 Not Found
              </NavLink>
              <NavLink className="text-customGrey text-[16px] hover:translate-x-3 transition leading-5 lin my-3">
                Protect Password
              </NavLink>
              <NavLink
                className={`text-customPurple text-[16px] hover:translate-x-3 underline transition `}
              >
                See More Templates
              </NavLink>
            </div>
          </div>
        </div>
        <div className="bg-customGrey h-[1px] w-full mb-3"></div>
        <div className="py-40px text-customGrey">
          <h4 className="text-[16px]">
            © Copyright 2024 | Design & Developed By
            <span className="text-customPurple border-b border-transparent hover:border-customPurple">
              Onixtheme - Licensing
            </span>
             | Powered By
            <span className="text-customPurple border-b hover:border-customPurple">
              Webflow
            </span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
