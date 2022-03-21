import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import Item from "./Item";
let productosIniciales = [
  {
    id: 1,
    name: "Miel de Eucaliptus",
    price: 1000,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    category: 1,
  },
  {
    id: 2,
    name: "Miel de Naranja",
    price: 900,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    category: 1,
  },
  {
    id: 3,
    name: "Miel de Limón",
    price: 800,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    category: 1,
  },
  {
    id: 4,
    name: "Miel de Mistol",
    price: 1200,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    category: 1,
  },
  {
    id: 5,
    name: "Jalea Real",
    price: 2500,
    img: "https://i.blogs.es/3c4173/jalea-real_bote/840_560.jpg",
    stock: 5,
    category: 2,
  },
];

const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  useState();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 2000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProductos(
          id
            ? respuestaDeLaApi.filter((product) => product.category === +id)
            : respuestaDeLaApi
        );
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div className="products">
        <p>{loading ? "Cargando la lista de productos..." : ""}</p>
        {productos.map((productos) => {
          return (
            <Item
              key={productos.id}
              id={productos.id}
              name={productos.name}
              img={productos.img}
              stock={productos.stock}
              price={productos.price}
            />
          );
        })}
      </div>
    );
  }
};

export default ItemListContainer;
