import NavBar from "./NavBar";
import Footer from "./Footer";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <>
      <NavBar />
      <ItemListContainer mensaje="Bienvenido a la tienda!" />
      <Footer />
    </>
  );
}
export default App;
