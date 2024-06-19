import { useQuery } from "@tanstack/react-query";
import Premium from "../../companent/premiumData/premiumData";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Button from "../../companent/button/Button";
import Question from "../../companent/PricingComponent/question.companent";


const Pricing = () => {

  useEffect(() => {
    AOS.init();
  }, []);

  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      fetch("http://localhost:3000/allData").then((res) => res.json()),
  });

  return (
    <div className="pt-16 mycontainer">
       <div className="lg:h-screen sm:h-[600px] h-[400px] center-all flex-col">
        <h4 data-aos="fade-up" className="text-[16px] text-customGrey mb-3">
          Home / Pricing Plan
        </h4>
        <h2
          data-aos="fade-up"
          className="text-customDark text-center text-[40px] sm:text-[60px] lg:text-[130px] leading-none"
        >
          Pricing
        </h2>
        <h2
          data-aos="fade-up"
          className="text-customPurple text-[40px] sm:text-[60px] lg:text-[130px] leading-none "
        >
          Plan
        </h2>
      </div>
      <div className="flex justify-between flex-wrap">
        {data &&
          data.plans?.map((item) => (
            <div key={item.key} className="w-[100%] lg:w-[30%] md:w-[47%]">
           <Premium data-aos="fade-up" key={item.key} item={item} />
          </div>
            
          ))}
      </div>
     {/* <div className="flex justify-between  mt-[130px] center-all">
     <div data-aos="fade-up" className="text-[90px] w-3/4 leading-none font-medium">
        <h2 className="text-customDark pb-10">Frequent</h2>
        <div className="text-customPurple flex pl-[180px] ">
          <img
            data-aos="fade-up"
            className="pr-7"
            src="https://cdn.prod.website-files.com/64e10aa388168f56d36f2dae/65d5ed8102c1d088af22cc03_Union%20(2).svg"
            alt=""
          />
          Questions
        </div>
      </div>
        <Button data-aos="fade-up"  message="All FAQs" wid="120px"/>
     </div> */}
     <div className="mt-[100px]">
     {data && data.questions_and_answers?.map((item,index) => (
         <Question item={item} key={index}/>
          ))}
     </div>
    </div>
  );
};

export default Pricing;
