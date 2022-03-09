import { useState, useEffect } from "react";
import ItemCount from "./components/ItemCount";
import ItemList from "./components/ItemList";
const Main = (props) => {
  useState();
  const miOnAdd = () => {
    console.log("Comprando productos...");
  };

  return (
    <main className="container">
      <h1 className="titulito">{props.mensaje}</h1>
      <p className="parrafito">{props.parrafo}</p>
      <ItemList />
      <ItemCount onAdd={miOnAdd} initial={1} />
    </main>
  );
};

export default Main;
