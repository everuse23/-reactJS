import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
