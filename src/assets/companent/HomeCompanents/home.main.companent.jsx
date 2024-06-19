import "../../css/style.css";
import { GoArrowDown } from "react-icons/go";
import Circule from "../Circule/circule.anim";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const Main = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="lg:h-[900px] h-[600px] sm:h-[800px]">
      <div className="absolute right-[60px] top-[100px] md:right-[100px] md:top-[140px] lg:right-[140px] lg:top-[200px]">
        <Circule
            classname={"animate-growShrink p-3 md:p-[20px] "}
          backgroundL={"linear-gradient(135deg,#ac6aff,#ffc876)"}
        />
      </div>
      <div className="mycontainer  center-all text-center  flex-col pt-[100px] lg:pt-[190px]">
        <h5 data-aos="fade-up" className="text-[16px]  text-customDark">
          GROW YOUR BRAND 
        </h5>
        <h1
          data-aos="fade-up"
          className="text-customDark leading-none text-[36px] sm:text-[70px] lg:text-[120px] p-3 mt-14 font-medium"
        >
          Drive M
          <Circule
            classname={"animate-growShrink p-2 lg:p-[30px] sm:p-[20px]"}
            backgroundL={"linear-gradient(135deg,#ac6aff,#ffc876)"}
          />
          re With
        </h1>
        <h1
          data-aos="fade-up"
          className="font-medium text-customPurple leading-none text-[36px] sm:text-[70px] lg:text-[120px]"
        >
          Digital Marketing
        </h1>
        <p data-aos="fade-up" className="text-customGrey md:w-[50%] lg:w-5/12 text-[16px] my-4 lg:my-12 ">
          Our Agency Drives Results, and Fuels Success in the Dynamic Landscape
          of Online Marketing. Let's Transform Your Vision.
        </p>
        <button
          data-aos="fade-up"
          className="center-all p-2 flex-col bg-customDark text-white rounded-full w-[100px] h-[100px] md:w-[120px] md:h-[120px] lg:w-124 lg:h-124"
        >
          <GoArrowDown
            data-aos="fade-up"
            className="animate-bounceY"
            value={{ fontWeight: "bold", size: "70px" }}
          />
          Get in touch
        </button>
      </div>
    </div>
  );
};

export default Main;
