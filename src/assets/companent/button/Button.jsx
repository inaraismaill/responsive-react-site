import classNames from "classnames";

const Button = ({ message, wid, color, className }) => {
  const buttonClass = classNames(
    "flex justify-center h-full p-2 px-4 rounded-lg text-white items-center transition-all",
    "hover:text-customDark",
    "hover:bg-transparent",
    "hover:border border-customDark",
    className 
  );

  return <button className={buttonClass} style={{ width: wid, backgroundColor: color }}>{message}</button>;
};

export default Button;
