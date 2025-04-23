import React from "react";

const Select = ({ name, value, text, handleOnChange }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-bold mb-2" htmlFor={name}>
        {text}:
      </label>
      <select
        className="bg-gray-200 w-full py-1 px-3"
        name={name}
        id={name}
        value={value}
        onChange={handleOnChange}
      >
        <option>Selecione uma opção</option>
      </select>
    </div>
  );
};

export default Select;
