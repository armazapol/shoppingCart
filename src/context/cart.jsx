import { useReducer, createContext, useState } from "react";
import { cartReducer, cartInitialState, historyInitialState } from "./../reducers/cart";

export const CartContext = createContext();

function useCartReducer() {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [historyCart, setHistoryCard] = useState(historyInitialState);

  const addToCart = (product) =>
    dispatch({
      type: "ADD_TO_CART",
      payload: product,
    });

  const decreaseToCart = (product) =>
    dispatch({
      type: "DECREASE_TO_CART",
      payload: product,
    });

  const removeFromCart = (product) =>
    dispatch({
      type: "REMOVE_FROM_CART",
      payload: product,
    });

  // const saveCart = (product) =>
  //   dispatch({
  //     type: "SAVE_CART",
  //     payload: product,
  //   });
  const saveCart = () => {
    const fechaActual = new Date();
    let arrState = {
      products: [...state],
      date: `${fechaActual.getDate()}/${fechaActual.getMonth()}/${fechaActual.getFullYear()}`, //
    };
    historyCart.push(arrState);
    window.localStorage.setItem("history-card", JSON.stringify(historyCart));
    setHistoryCard(historyCart)
    clearCart();
  }

  const getTotalMoneyCart = () => {
      const totalMoneyCart = state.reduce(
        (accumulator, currentValue) =>
          accumulator + currentValue.price * currentValue.quantity,
        0
      );
    return totalMoneyCart;
  };

  const getHistoryProducts= () => {
    return historyCart
  }

  const clearCart = () => dispatch({ type: "CLEAR_CART" });

  return {
    state,
    addToCart,
    decreaseToCart,
    removeFromCart,
    clearCart,
    getTotalMoneyCart,
    saveCart,
    getHistoryProducts
  };
}

// la dependencia de usar React Context
// es MÍNIMA
export function CartProvider({ children }) {
  const {
    state,
    addToCart,
    decreaseToCart,
    removeFromCart,
    clearCart,
    getTotalMoneyCart,
    saveCart,
    getHistoryProducts
  } = useCartReducer();

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addToCart,
        decreaseToCart,
        removeFromCart,
        clearCart,
        getTotalMoneyCart,
        saveCart,
        getHistoryProducts
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
