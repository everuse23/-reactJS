import { useState } from "react";

const ItemListContainer = (props) => {
  useState();

  let stock = props.stock;

  const [contador, setContador] = useState(props.initial);

  const aumentarClick = () => {
    if (contador < stock) setContador(contador + 1);
  };
  const disminuirClick = () => {
    if (contador >= 2) setContador(contador - 1);
  };

  return (
    <main className="container">
      <h1 className="titulito">{props.mensaje}</h1>
      <p className="parrafito">{props.parrafo}</p>
      <div className="productos">
        <div className="item">
          <h2>Kilo de miel</h2>
          <h4>En stock: {stock}</h4>
          <p className="parrafo">
            Unidades: <b>{contador}</b>
          </p>
        </div>
      </div>
      <div className="centrar-boton">
        <button onClick={aumentarClick} className="boton1">
          Aumentar
        </button>
        <button onClick={disminuirClick} className="boton2">
          Disminuir
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

export default ItemListContainer;
