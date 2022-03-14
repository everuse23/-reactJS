import React from "react";

const ItemDetail = (props) => {
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
    </div>
  );
};

export default ItemDetail;
