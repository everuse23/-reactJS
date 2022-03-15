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
              <NavLink to="/categoria/1">Nuestras Mieles</NavLink>
            </li>
            <li>
              <NavLink to="/categoria/2">Otros Productos</NavLink>
            </li>
            <li className="cart">
              <NavLink to="/carrito">
                <CartWidget className="icono" />
                Carro<span id="span">0</span>
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
