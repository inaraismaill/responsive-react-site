import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Spark = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="mycontainer">
      <div className="flex items-center justify-end h-[100px] lg:h-[200px] bg-[url('https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed82dff132f0810378e0_Union.svg')] bg-center bg-no-repeat">
        <h2 data-aos="fade-up" className=" text-customGrey text-center sm:text-start lg:w-1/5 sm:w-2/5 right-0">
          Our Agency Drives Results, and Fuels Success in the Dynamic.
        </h2>
      </div>
      <div data-aos="fade-up" className="lg:text-[90px] text-[36px] sm:text-[80px] leading-none font-medium ">
        <h2 className="text-customDark pb-10 text-center sm:text-start">We Are</h2>
        <div className="text-customPurple center-all sm:justify-start flex lg:pl-[180px] ">
          <img
            data-aos="fade-up"
            className="pr-7"
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
            alt=""
          />
          Spark
        </div>
      </div>
      <div className="flex justify-end lg:pb-[70px] pb-[20px]">
        <p
          data-aos="fade-up"
          className="lg:w-8/12 text-customGrey lg:mt-[50px] mt-[20px] px-3 sm:p-0 sm:text-[28px] text-[16px] lg:text-[30px]"
          style={{ lineHeight: "130%"}}
        >
          We understand the importance of digital marketing and are dedicated to
          helping businesses achieve their online goals. Here are just a few
          reasons why you should choose us for your digital marketing needs.
        </p>
      </div>
      <div data-aos="fade-up" className="flex flex-col-reverse lg:flex-row relative justify-end">
        <div className="flex lg:absolute lg:bottom-0 left-[180px] center-all mt-3 lg:m-0 px-5 sm:p-0 text-customGrey text-[16px] lg:text-2xl">
          <img
            style={{ height: "30px" }}
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed82d92eb18e89fb4225_Union%20(1).svg"
            alt=""
          />
          <p className="mx-5">150+ Satisfied Clients</p>
          <img
            style={{ height: "30px" }}
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed824302e9dd9df84ba5_Vector%20586.svg"
            alt=""
          />
        </div>
        <div className="lg:w-1/2 w-full p-5 sm:p-0">
          <img
            data-aos="fade-up"
            className="rounded-3xl md:h-[300px] h-[250px] w-full  object-cover"
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5f170c1f3f04f7487e3b5_We%20Are%20Video%20Image-p-800.webp"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Spark;
