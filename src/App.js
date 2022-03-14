import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";

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
