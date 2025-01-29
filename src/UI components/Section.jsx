import React from "react";
import Button from "./Button.jsx";

const Section = ({ title, buttonText, onClick }) => {
  return (
    <div className="flex flex-col gap-4 mb-8">
      <h2 className="text-center text-2xl text-textColor">{title}</h2>
      <Button onClick={onClick}>{buttonText}</Button>
    </div>
  );
};

export default Section;
