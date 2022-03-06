import CartWidget from "./components/CartWidget";

function NavBar() {
  return (
    <header>
      <div className="overlay">
        <h1 className="titulo">Colmenares SBM</h1>

        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Tienda</a>
            </li>
            <li className="cart">
              <a href="carrito.html">
                <CartWidget className="icono" />
                Carro<span id="span">0</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
