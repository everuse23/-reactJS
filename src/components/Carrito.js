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
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
    });
  };

  setTimeout(() => {
    setLoading(false);
  }, 300);

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
                    <div className="carrito" key={item.id}>
                      <img className="imgs" src={item.img} />
                      <div className="carrito-prod">
                        <h4 className="atr-carrito">
                          <b>Producto:</b> {item.name}{" "}
                        </h4>{" "}
                        <br />
                        <h5 className="atr-carrito">
                          <b>Cantidad:</b> {item.Quantity}
                        </h5>{" "}
                        <br />
                        <h5 className="atr-carrito">
                          <b>Precio:</b> {item.price * item.Quantity}
                        </h5>{" "}
                        <br />
                        <button
                          className="bot-carro"
                          onClick={() => removeItem(item.id)}
                        >
                          Borrar producto
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="precio-total">
                  <div className="total-price">
                    <b>Precio total:</b> <b>${totalPrice()}</b>{" "}
                  </div>
                  <button className="bot-carro" onClick={() => Clear()}>
                    Vaciar Carrito
                  </button>
                </div>
              </div>

              <form>
                <p className="p">Dejanos tus datos para finalizar la compra</p>
                <div className="formulario">
                  <input
                    className="form1"
                    type="text"
                    name="username"
                    placeholder="Nombre"
                    onChange={getData}
                  />
                  <input
                    className="form2"
                    type="text"
                    name="telefono"
                    placeholder="Telefono"
                    onChange={getData2}
                  />
                  <input
                    className="form3"
                    type="text"
                    name="email"
                    placeholder="Email"
                    onChange={getData3}
                  />
                  <button onClick={finalizarCompra}>Finalizar compra</button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Carrito;
