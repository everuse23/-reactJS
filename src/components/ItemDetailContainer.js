import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
let productosIniciales = [
  {
    id: 1,
    name: "Miel de Eucaliptus",
    price: 1000,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    descripcion:
      "Presenta un sabor y aroma característico intenso, presenta un color más oscuro que la miel tradicional",
    temporada: "Extraida durante los meses de febrero y marzo",
    region: "Proviene de la región del litoral argentino",
  },
  {
    id: 2,
    name: "Miel de Naranja",
    price: 900,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    descripcion:
      "se caracteriza por su perfume a azahar, sabor intenso y color claro",
    temporada: "Cosechada durante agosto/septiembre",
    region: "Proviene del norte de la Provincia de Buenos Aires",
  },
  {
    id: 3,
    name: "Miel de Limón",
    price: 800,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    descripcion:
      "Una miel clara con un sabor muy suave y aroma a azahares característico",
    temporada: "Cosechada durante agosto/septiembre",
    region: "Provincia de Tucumán",
  },
  {
    id: 4,
    name: "Miel de Mistol",
    price: 1200,
    img: "https://roca.toque.com.ar/sistema/uploads/1275/articulos/616157210352.jpg",
    stock: 5,
    descripcion:
      "Miel de color claro (amarillas) de cristalización lenta. Presentan un sabor fuerte y aroma intenso",
    temporada: "Extraída en los meses de octubre/noviembre",
    region: "Monte",
  },
  {
    id: 5,
    name: "Jalea Real",
    price: 2500,
    img: "https://i.blogs.es/3c4173/jalea-real_bote/840_560.jpg",
    stock: 5,
    descripcion:
      "La jalea real es un producto segregado por las abejas obreras para alimentar a la reina durante toda su vida y a las larvas durante los primeros días de vida. En la jalea real encontramos sobre todo las vitaminas B1, B2, B5 y B6. También está presente la vitamina B8 en menor proporción y el ácido fólico.",

    temporada:
      "Se extrae durante toda la época de cosecha. Desde julio a marzo",
    region: "Se produce en todas las regiones",
  },
];

const ItemDetailContainer = () => {
  const [loading, setLoading] = useState(true);
  const [producto, setProducto] = useState();
  const { id } = useParams();
  useState();

  useEffect(() => {
    const promesa = new Promise((res, rej) => {
      setTimeout(() => {
        res(productosIniciales);
      }, 1500);
    });

    promesa
      .then((respuestaDeLaApi) => {
        setProducto(respuestaDeLaApi.find((product) => product.id === +id));
      })
      .catch((errorDeLaApi) => {
        console.log(errorDeLaApi);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  if (loading) {
    return <Loading />;
  } else {
    return (
      <div>
        {loading ? (
          <p>"Cargando el producto elegido..."</p>
        ) : (
          <ItemDetail
            name={producto.name}
            img={producto.img}
            stock={producto.stock}
            price={producto.price}
            descripcion={producto.descripcion}
            temporada={producto.temporada}
            region={producto.region}
          />
        )}
      </div>
    );
  }
};

export default ItemDetailContainer;
