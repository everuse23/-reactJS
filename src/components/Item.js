import React from "react";
import { Link } from "react-router-dom";

const Item = (props) => {
  return (
    <div className="product">
      <img className="img-product" src={props.img}></img>
      <h3>{props.name}</h3>
      <p>Stock: {props.stock}</p>
      <p>Precio: {props.price}</p>
      <Link id="btn1" className="add-cart cart2" to="/item/prod1">
        Detalles
      </Link>
    </div>
  );
};

export default Item;
