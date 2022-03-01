import CartWidget from "./components/CartWidget";

function NavBar() {
  return (
    <header>
      <div class="overlay">
        <h1 class="titulo">Colmenares SBM</h1>
        <nav>
          <ul>
            <li>
              <a href="index.html">Home</a>
            </li>
            <li>
              <a href="index.html">Tienda</a>
            </li>
            <li class="cart">
              <a href="carrito.html">
                <CartWidget />
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
