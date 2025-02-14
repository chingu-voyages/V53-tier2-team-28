import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="min-w-48 px-6 py-3 border-2 border-gray-400 self-center sm:self-start sm:ml-5 
    font-semibold tracking-wide bg-primary hover:bg-background-hover 
    hover:text-textColor-lightText transition-all duration-300 ease-in-out 
    hover:font-bold focus:outline-none focus:ring-2 focus:ring-accent 
    text-textColor rounded-lg text-center whitespace-nowrap flex justify-center items-center"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
