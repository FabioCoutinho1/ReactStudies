import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        {" "}
        <h1>LOGO</h1>
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Company">Empresa</Link>
        </li>
        <li>
          <Link to="/Contact">Contatos</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
