import React from "react";

const Item = (props) => {
  return (
    <div className="product">
      <img className="img-product" src={props.img}></img>
      <h3>{props.name}</h3>
      <p>Stock: {props.stock}</p>
      <p>Precio: {props.price}</p>
    </div>
  );
};

export default Item;
