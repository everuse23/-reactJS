import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import ItemCount from "./components/ItemCount";
import ItemListContainer from "./components/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer";
import Carrito from "./components/Carrito";

const Main = (props) => {
  useState();
  const miOnAdd = () => {
    console.log("Comprando productos...");
  };

  return (
    <main className="contenedor">
      <Routes>
        <Route path="main" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/categoria/:id" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/carrito" element={<Carrito />} />
      </Routes>
    </main>
  );
};

export default Main;
