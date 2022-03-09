import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import ItemList from "./components/ItemList";
import ItemCount from "./components/ItemCount";

function App() {
  return (
    <>
      <NavBar />
      <Main
        mensaje="Bienvenido a la tienda!"
        parrafo="Aqui encontraras los mejores productos"
      />

      <Footer />
    </>
  );
}
export default App;
