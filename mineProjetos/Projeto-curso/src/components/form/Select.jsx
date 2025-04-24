import React from "react";

const Select = ({ name, value, text, handleOnChange, options }) => {
  return (
    <div className="flex flex-col mb-4">
      <label className="font-bold mb-2" htmlFor={name}>
        {text}:
      </label>
      <select className="bg-gray-200 w-full py-1 px-3" name={name} id={name}>
        <option>Selecione uma opção</option>
        {options.map((option)=>(
          <option key={option.id} value={option.id}>{option.name}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
