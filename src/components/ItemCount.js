import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  useState();

  const [contador, setContador] = useState(initial);

  const aumentarClick = (e) => {
    if (contador < stock) setContador(contador + 1);
  };
  const disminuirClick = (e) => {
    if (contador > initial) setContador(contador - 1);
  };

  const confirmarClick = (e) => {
    console.log(e);
    onAdd(contador);
  };

  return (
    <main className="count">
      <div className="productos">
        <div className="item">
          <p className="parrafo">
            Unidades: <b>{contador}</b>
          </p>
        </div>
      </div>
      <div className="centrar-boton">
        <button onClick={disminuirClick} className="boton1">
          -
        </button>
        <button onClick={aumentarClick} className="boton2">
          +
        </button>
      </div>

      <div className="centrar-boton">
        <button className="boton3" onClick={confirmarClick}>
          Agregar al carro
        </button>
      </div>
    </main>
  );
};

export default ItemCount;
