function NavBar(){
    return (
        <header>
            <div class="overlay">
                <h1 class="titulo">Colmenares SBM</h1>
    <nav>
      <ul>
        <li><a href="index.html">Home</a></li>
        <li><a href="index.html">Tienda</a></li>
        <li class="cart">
          <a href="carrito.html">
            <ion-icon name="basket"></ion-icon>Carro<span id="span">0</span>
          </a>
        </li>
      </ul>
    </nav>
    </div>
        </header>)
} 

export default NavBar