import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import ItemCount from "./ItemCount";
const ItemDetail = (props) => {
  useState();

  const [seleccionado, setSeleccionado] = useState(false);

  const [render, setRender] = useState(true);

  const onAdd = (unidadSeleccionada) => {
    console.log("Comprando productos...");
    if (unidadSeleccionada != undefined) {
      setSeleccionado(unidadSeleccionada);
      setRender(false);
    }
  };

  return (
    <div className="info-producto">
      <img className="img-producto" src={props.img}></img>
      <div className="descripcion-producto">
        <h3 className="p-info">{props.name}</h3>

        <p className="p-info">
          <b>Stock: </b>
          {props.stock}
        </p>
        <p className="p-info">
          <b>Precio:</b> {props.price}
        </p>
        <p className="p-info">
          <b>Descripción:</b> {props.descripcion}
        </p>
        <p className="p-info">
          <b>Fecha de producción:</b> {props.temporada}
        </p>
        <p className="p-info">
          <b>Región:</b> {props.region}
        </p>
      </div>
      <div className="item-count">
        {render ? <ItemCount onAdd={onAdd} initial={1} stock={5} /> : ""}
        <p className="center">
          {seleccionado
            ? "Ya seleccionaste tus productos, haz click en el carro para verlos"
            : "No haz elegido ningún producto"}
        </p>
        {seleccionado ? <Link to="/carrito">Chequea el carro!</Link> : null}
      </div>
    </div>
  );
};

export default ItemDetail;
