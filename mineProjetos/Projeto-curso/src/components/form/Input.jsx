import React from "react";

const Input = ({ type, name, placeholder, value, text, handleOnChange, required }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-bold mb-2" htmlFor={name}>{text}:</label>
      <input
      className="bg-gray-200 w-full py-1 px-3"
        type={type}
        name={name}
        id={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        required={required}
      />
    </div>
  );
};

export default Input;
