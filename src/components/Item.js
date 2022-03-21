import React from "react";
import { useState } from "react";
import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

const Item = (props) => {
  useState();
  const [seleccionado, setSeleccionado] = useState(false);

  return (
    <div className="product">
      <div className="detail-product">
        <img className="img-product" src={props.img}></img>
        <h3>{props.name}</h3>
        <p>Stock: {props.stock}</p>
        <p>Precio: {props.price}</p>
        <div className="detalles">
          <Link to={`/item/${props.id}`}>
            <button className="detalles-btn">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
