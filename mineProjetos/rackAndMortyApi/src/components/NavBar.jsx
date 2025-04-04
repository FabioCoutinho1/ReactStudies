import React from "react";

const NavBar = () => {
  return (
    <div className=" bg-amber-50 flex justify-between px-17 w-full py-2.5 items-center mb-4">
      <h1 className="font-extrabold text-5xl cursor-pointer">API RICK</h1>

      <nav>
        <ul className="flex justify-between gap-12 ">
          <li className="cursor-pointer">sobre</li>
          <li className="cursor-pointer">Contatos</li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
