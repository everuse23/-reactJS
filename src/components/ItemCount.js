import { useState } from "react";

const ItemCount = (props) => {
  useState();

  const [contador, setContador] = useState(props.initial);

  const aumentarClick = () => {
    if (contador < 5) setContador(contador + 1);
  };
  const disminuirClick = () => {
    if (contador >= 2) setContador(contador - 1);
  };

  return (
    <main className="container">
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
        <button className="boton3" onClick={props.onAdd}>
          Comprar
        </button>
      </div>
    </main>
  );
};

export default ItemCount;
