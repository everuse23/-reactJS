import NavBar from "./NavBar";
import Footer from "./Footer";
import Main from "./Main";
import { BrowserRouter } from "react-router-dom";
import CartContextProvider from "./components/CartContext";
import { ToastContainer } from "react-toastify";
function App() {
  return (
    <CartContextProvider>
      <BrowserRouter>
        <NavBar />
        <Main />
        <Footer />
        <ToastContainer theme="dark" />
      </BrowserRouter>
    </CartContextProvider>
  );
}
export default App;
