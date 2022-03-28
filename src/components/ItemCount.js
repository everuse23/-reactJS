import { React, useState } from "react";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import CartWidget from "./CartWidget";
const ItemCount = ({ initial, max, OnAdd }) => {
  const [contador, setContador] = useState(initial);
  const [renderizado, setRenderizado] = useState(true);

  const addProduct = () => {
    if (contador < max) setContador(contador + 1);
  };
  const removeProduct = () => {
    if (contador > 0) setContador(contador - 1);
  };

  const AddtoCart = () => {
    OnAdd(contador);
    setRenderizado(false);
    toast.success("Se ha añadido los productos al carrito");
  };

  return (
    <div className="centrar-boton">
      <p>Cantidad : {contador}</p>
      {renderizado ? (
        <div>
          <button className="boton1" onClick={removeProduct}>
            -
          </button>
          <button className="boton3" onClick={AddtoCart}>
            Añadir al carrito
          </button>
          <button className="boton2" onClick={addProduct}>
            +
          </button>
        </div>
      ) : (
        <ul
          className="link-carrito"
          style={{
            backgroundImage:
              "https://honey.com/images/default/homepage-wooden-bg.jpg",
          }}
        >
          <li className="cart">
            <Link to="/carrito">Carrito</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default ItemCount;
