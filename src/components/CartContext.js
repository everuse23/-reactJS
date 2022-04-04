import { useState, React, createContext, useContext } from "react";

const CartContext = createContext([]);

export const Contexto = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const [CartList, SetCartList] = useState([]);

  const isInCart = (id) => {
    const found = CartList.find((item) => item.id === id);
    return found;
  };

  const totalPrice = () => {
    return CartList.reduce(
      (total, item) => total + item.price * item.Quantity,
      0
    );
  };

  const AddItem = (Item, Quantity) => {
    isInCart(Item.id)
      ? SetCartList(
          CartList.map((prod) => {
            if (prod.id === Item.id) {
              prod.Quantity += parseInt(Item.Quantity);
            }
            return prod;
          })
        )
      : SetCartList([...CartList, Item]);
  };
  const removeItem = (id) => {
    SetCartList(CartList.filter((item) => item.id !== id));
  };

  const Clear = () => {
    SetCartList([]);
  };

  return (
    <CartContext.Provider
      value={{
        CartList,
        AddItem,
        removeItem,
        Clear,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
