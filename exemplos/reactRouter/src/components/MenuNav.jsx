import {Link} from "react-router-dom";

const MenuNav = () => {
  return (
    <div>
        <h1>Jogar</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="sobre"> Sobre</Link>
          </li>
          <li>
            <Link to="/contatos">Contatos</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MenuNav;
