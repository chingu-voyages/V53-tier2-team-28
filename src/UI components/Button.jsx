import React from "react";

const Button = ({ onClick, children }) => {
  return (
    <button
      className="w-48 px-6 py-3 border-2 border-gray-300 hover:bg-primary focus:outline-none focus:ring-2 focus:ring-accent text-textColor"
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
