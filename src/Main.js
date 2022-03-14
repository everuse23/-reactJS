import { useState, useEffect } from "react";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
const Main = (props) => {
  useState();
  const miOnAdd = () => {
    console.log("Comprando productos...");
  };

  return (
    <main className="container">
      <h1 className="titulito">{props.mensaje}</h1>
      <p className="parrafito">{props.parrafo}</p>
      <ItemListContainer />

      <ItemCount onAdd={miOnAdd} initial={1} />
      <ItemDetailContainer />
    </main>
  );
};

export default Main;
