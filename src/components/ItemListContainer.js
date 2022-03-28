import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import ItemList from "./ItemList";
import { getDocs, query, collection, where } from "firebase/firestore";
import { db } from "./Firebase";

const ItemListContainer = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  useState();

  useEffect(() => {
    if (id) {
      const q = query(
        collection(db, "productos"),
        where("categoria", "==", id)
      );
      getDocs(q)
        .then((respuesta) =>
          setProductos(
            respuesta.docs.map((p) => ({ productos: p.data(), id: p.id }))
          )
        )
        .catch((error) => "ERROR")
        .finally(() => {
          setLoading(false);
        });
    } else {
      getDocs(collection(db, "productos"))
        .then((respuesta) =>
          setProductos(
            respuesta.docs.map((p) => ({ productos: p.data(), id: p.id }))
          )
        )
        .finally(() => {
          setLoading(false);
        });
    }
  }, [id]);

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <p>{loading ? "Cargando..." : ""}</p>
        <ItemList productos={productos} />
      </>
    );
  }
};

export default ItemListContainer;
