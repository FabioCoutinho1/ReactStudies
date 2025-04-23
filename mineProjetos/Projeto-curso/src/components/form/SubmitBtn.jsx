import React from "react";

const SubmiBtn = ({ text}) => {
  return (
    <div>
     <button className="bg-gray-900 tra text-white transition duration-300 ease-in hover:text-amber-200 py-2 px-8">{text}</button>
    </div>
  );
};

export default SubmiBtn;
