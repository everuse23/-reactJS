import React from "react";
import { Link } from "react-router-dom";
import ItemCount from "./ItemCount";
import { Contexto } from "./CartContext";

const ItemDetail = ({ Item }) => {
  const { img, name, id, price, descripcion, temporada, region, stock } = Item;

  const { AddItem } = Contexto();

  const OnAdd = (Quantity) => {
    AddItem({
      Item: Item,
      Quantity: Quantity,
      name: name,
      id: id,
      price: price,
      img: img,
      stock: stock,
      temporada: temporada,
      region: region,
    });
  };

  return (
    <div className="info-producto">
      <img className="img-producto" src={img}></img>
      <div className="descripcion-producto">
        <h3 className="p-info">{name}</h3>

        <p className="p-info">
          <b>Stock: </b>
          {stock}
        </p>
        <p className="p-info">
          <b>Precio:</b> {price}
        </p>
        <p className="p-info">
          <b>Descripción:</b> {descripcion}
        </p>
        <p className="p-info">
          <b>Fecha de producción:</b> {temporada}
        </p>
        <p className="p-info">
          <b>Región:</b> {region}
        </p>
      </div>
      <div className="item-count">
        <ItemCount OnAdd={OnAdd} initial={1} max={5} />
        <p className="center"></p>
        <Link to="/carrito"></Link>
      </div>
    </div>
  );
};

export default ItemDetail;
