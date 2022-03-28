import React from "react";
import { Link } from "react-router-dom";

const Item = ({ producto }) => {
  const { productos, id } = producto;

  return (
    <div className="product">
      <div className="detail-product">
        <img className="img-product" src={productos.img}></img>
        <h3>{productos.name}</h3>
        <p>Stock: {productos.stock}</p>
        <p>Precio: {productos.price}</p>
        <div className="detalles">
          <Link to={`/item/${id}`}>
            <button className="detalles-btn">Detalles</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
