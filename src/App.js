import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  const miOnAdd = () => {
    console.log("Comprando productos...");
  };

  return (
    <>
      <NavBar />
      <ItemListContainer
        mensaje="Bienvenido a la tienda!"
        parrafo="Aqui encontraras los mejores productos"
        onAdd={miOnAdd}
        initial={1}
        stock={5}
      />
      <Footer />
    </>
  );
}
export default App;
