import { useState, useEffect } from "react";
import Item from "./Item";
let productosIniciales = [
  {
    id: 1,
    name: "Miel de Eucaliptus              ",
    price: 1000,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
  {
    id: 2,
    name: "Miel de Naranja",
    price: 900,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
  {
    id: 3,
    name: "Miel de Limón",
    price: 800,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
  {
    id: 4,
    name: "Miel de Mistol",
    price: 1200,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
  },
];

const ItemListContainer = () => {
  const [loading, setLoading] = useState(true);
  useState();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProductos(respuestaDeLaApi);
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  const [productos, setProductos] = useState([]);
  return (
    <div className="products">
      <p>{loading ? "Cargando la lista de productos..." : ""}</p>
      {productos.map((productos) => {
        return (
          <Item
            key={productos.id}
            name={productos.name}
            img={productos.img}
            stock={productos.stock}
            price={productos.price}
          />
        );
      })}
    </div>
  );
};

export default ItemListContainer;
