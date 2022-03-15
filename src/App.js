import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Main
        mensaje="Bienvenido a la tienda!"
        parrafo="Aqui encontraras los mejores productos"
      />

      <Footer />
    </BrowserRouter>
  );
}
export default App;
