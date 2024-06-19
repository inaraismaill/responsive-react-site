import Button from "../button/Button";
import { FaCheck } from "react-icons/fa";
import "./premium.css";
const Premium = ({ item }) => {
  return (
    <div style={{boxShadow:"0 36px 5.625rem -1.5rem rgba(24, 18, 47, .07)"}}
      className={`p-5 m-2 ${
        item.type == "Bi-Annual" ? "bg-customDark" : ""
      } rounded-[40px]`}
    >
      <div className="text-center">
        <p
          className={`${
            item.type == "Bi-Annual" ? "text-white" : "text-customDark"
          }`}
        >
          {item.type}
        </p>
        <p
          className={`${
            item.type == "Bi-Annual" ? "text-white" : "text-customGrey"
          }  lg:my-[40px]`}
        >
          {item.description}
        </p>
        <p
          className={`${
            item.type == "Bi-Annual" ? "text-white" : "text-customDark"
          }`}
        >
          {item.payment_frequency}
        </p>
        <p
          className={`${
            item.type == "Bi-Annual" ? "text-white" : "text-customDark"
          } text-6xl lg:my-5`}
        >
          {item.price}
        </p>
        <div className="center-all lg:m-2 w-full lg:my-5">
          <Button message={"Get Startet"} className={item.type != "Bi-Annual" ? "text-white bg-customDark" : "bg-white text-customDark"}  wid={"100%"} />
        </div>
       
        {item.services_included.map((el, index) => (
          <p
            key={index}
            className={`text-start flex items-center ${
              item.type == "Bi-Annual" ? "text-white" : "text-customGrey"
            } lg:m-3`}
          >
            <FaCheck style={{ marginRight: "10px" }} /> {el}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Premium;
