import { Link } from "react-router-dom";

import logo from "../../assets/costs_logo.png";

const NavBar = () => {
  return (
    <nav className="bg-black text-white flex justify-around items-center p-4">
      <Link to="/">
        <img src={logo} alt="cost" />{" "}
      </Link>
      <ul className="flex gap-10">
        <li className=" hover:text-amber-200">
          <Link to="/">Home</Link>
        </li>
        <li className=" hover:text-amber-200">
          <Link to="/Projects">Projetos</Link>
        </li>
        <li className=" hover:text-amber-200">
          <Link to="/Company">Empresa</Link>
        </li>
        <li className=" hover:text-amber-200">
          <Link to="/Contact">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
