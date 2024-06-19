import { NavLink } from "react-router-dom";
import "./about.css";
const About = () => {
  return (
    <div className="">
      <div className="mycontainer">
        <div className="text-center main">
          <p>
            <NavLink to="/" className="text-customGrey">
              Home
            </NavLink>
            /
            <NavLink className="text-customPurple" to="/about">
              About
            </NavLink>
          </p>
          <h1 className="text-customDark">We Strive to</h1>
          <h1 className="text-customPurple">Exceed your goal</h1>
        </div>
      </div>
      <div className="mycontainer main-image">
        <img
          src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65dee6dd16ba19f9b206aeb5_About%20Hero%20Image-p-1600.webp"
          alt=""
        />
      </div>

      <div className="about mycontainer py-[80px]">
        <div data-aos="fade-up">
          <h2 className="text-customDark ">About</h2>
          <div className="text-customPurple us flex">
            <img
              src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
              alt=""
            />
            <h2> Us</h2>
          </div>
        </div>
        <div className="flex justify-end  ">
          <div className="about-text  w-1/2">
            <p className="text-customDark mb-7">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley
            </p>
            <p className="text-customGrey">
              Thankfully, armed with their experience from the world of
              independent film, they were ready to take on this challenge with a
              tenacious, can — do mindset, celebrating and amplifying the
              uniquene each narrative.
            </p>
          </div>
        </div>
        <div className="statistic ">
          <div>
            <h2>
              40 <span className="text-customPurple">+</span>
            </h2>
            <p className="text-customGrey">Client Satisfaction</p>
          </div>
          <div>
            <h2>
              40 <span className="text-customPurple">+</span>
            </h2>
            <p className="text-customGrey">Client Satisfaction</p>
          </div>
          <div>
            <h2>
              40 <span className="text-customPurple">+</span>
            </h2>
            <p className="text-customGrey">Client Satisfaction</p>
          </div>
          <div>
            <h2>
              40 <span className="text-customPurple">+</span>
            </h2>
            <p className="text-customGrey">Client Satisfaction</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
