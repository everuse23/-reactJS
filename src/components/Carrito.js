import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "./CartContext";
import Loading from "./Loading";
const Carrito = () => {
  const { CartList, removeItem, Clear } = Contexto();
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 800);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        <div>
          <title>Carrito</title>

          {CartList.length < 1 ? (
            <>
              <h2>Tu carrito está vacio</h2>
              <li>
                <Link to="/" style={{ backgroundColor: "blue" }}>
                  Volver al catálogo
                </Link>
              </li>
            </>
          ) : (
            <div>
              <div>
                <div>
                  {CartList.map((item) => (
                    <div key={item.id}>
                      <img src={item.img} />
                      <h1>Producto:{item.name} </h1> <br />
                      <h2>Cantidad:{item.Quantity}</h2> <br />
                      <h3>Precio:{item.price * item.Quantity}</h3> <br />
                      <button onClick={() => removeItem(item.id)}>
                        Borrar producto
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              <button onClick={() => Clear()}>Vaciar Carrito</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;
