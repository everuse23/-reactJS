import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "./CartContext";
import Loading from "./Loading";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./Firebase";
import { toast } from "react-toastify";

const Carrito = () => {
  const { CartList, removeItem, Clear, totalPrice } = Contexto();
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState(null);
  const [data2, setData2] = useState(null);
  const [data3, setData3] = useState(null);

  function getData(val) {
    setData(val.target.value);
  }
  function getData2(val) {
    setData2(val.target.value);
  }
  function getData3(val) {
    setData3(val.target.value);
  }

  const finalizarCompra = () => {
    const orden = {
      buyer: {
        nombre: data,
        telefono: data2,
        email: data3,
      },
      items: CartList,
      date: serverTimestamp(),
      total: totalPrice(),
    };
    const ordenesCollection = collection(db, "ordenes");
    const pedido = addDoc(ordenesCollection, orden);
    Clear();

    pedido.then((res) => {
      toast.success(
        `Compra realizada con exito! el id de su pedido es: ${res.id}`,
        {
          position: "bottom-center",
          autoClose: false,
          hideProgressBar: true,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    });
  };

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
                <div className="precio-total">
                  <div className="total-price">
                    Precio total: ${totalPrice()}{" "}
                  </div>
                </div>
              </div>
              <button onClick={() => Clear()}>Vaciar Carrito</button>
              <form>
                <input
                  type="text"
                  name="username"
                  placeholder="Nombre"
                  onChange={getData}
                />
                <input
                  type="text"
                  name="telefono"
                  placeholder="Telefono"
                  onChange={getData2}
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  onChange={getData3}
                />
                <button onClick={finalizarCompra}>Finalizar compra</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;
