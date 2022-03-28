import CartWidget from "./components/CartWidget";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <header>
      <div className="overlay">
        <h1 className="titulo">
          <NavLink to="main">Colmenares SBM</NavLink>
        </h1>

        <nav>
          <ul>
            <li>
              <NavLink to="/categoria/mieles">Nuestras Mieles</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/otros">Otros Productos</NavLink>
            </li>
            <li className="cart">
              <CartWidget className="icono" />
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
