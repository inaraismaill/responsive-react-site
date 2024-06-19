import { useState } from "react";
import { IoIosAdd } from "react-icons/io";
import { MdRemove } from "react-icons/md";

const Question = ({ item }) => {
  const [isOpen, setIsOpen] = useState(true);
  const getAnswer = (open) => {
    console.log(open);
    setIsOpen(!isOpen);
    console.log(isOpen);
  };
  return (
    <div >
      <div className="p-[40px] rounded-3xl my-4 text-xl"
        style={{ background: "linear-gradient(135deg, #f8f1fe, #fffaf2)" }}
        data-aos="fade-up"
      >
        <div
          className="flex justify-between "
          onClick={(isOpen) => getAnswer(isOpen)}
        >
          {item.question}
          {isOpen ? (
            <IoIosAdd style={{ marginLeft: "10px", fontSize: "40px" }} />
          ) : (
            <MdRemove style={{ marginLeft: "10px", fontSize: "40px" }} />
          )}
        </div>
         {
            !isOpen?   <p className="text-customGrey text-sm py-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi repellendus quia quos molestias velit nobis delectus sunt porro, reiciendis quod explicabo pariatur beatae. Sapiente, harum molestiae incidunt porro hic laborum!</p>:""
         }
      </div>
    </div>
  );
};

export default Question;
