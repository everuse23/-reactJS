import { useState, useEffect } from "react";
import ItemDetail from "./ItemDetail";

let mielEuc = [
  {
    id: 5,
    name: "Miel de Eucaliptus",
    price: 1000,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    descripcion:
      "Presenta un sabor y aroma característico intenso, presenta un color más oscuro que la miel tradicional",
    temporada: "Extraida durante los meses de febrero y marzo",
    region: "Proviene de la región del litoral argentino",
  },
];

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  useState();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(mielEuc);
      }, 3000);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProducto(respuestaDeLaApi);
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  const [producto, setProducto] = useState();
  return (
    <div>
      <p>{loading ? "Cargando el producto elegido..." : ""}</p>
      {producto &&
        producto.map((producto) => {
          return (
            <div key={producto.id}>
              <ItemDetail
                name={producto.name}
                img={producto.img}
                stock={producto.stock}
                price={producto.price}
                descripcion={producto.descripcion}
                temporada={producto.temporada}
                region={producto.region}
              />
            </div>
          );
        })}
    </div>
  );
};

export default ItemDetailContainer;
