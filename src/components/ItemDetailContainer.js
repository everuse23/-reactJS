import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import { getDoc, doc } from "firebase/firestore";
import { db } from "./Firebase";

const ItemDetailContainer = () => {
  const { id } = useParams();
  const [Item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const docRef = doc(db, "productos", id);
    getDoc(docRef)
      .then((respuesta) => setItem(respuesta.data()))
      .catch((error) => console.log("error"))
      .finally(() => {
        setLoading(false);
      });
  }, [id]);

  return <div>{loading ? <Loading /> : <ItemDetail Item={Item} />}</div>;
};

export default ItemDetailContainer;
