import React, { createContext, useReducer } from "react";
const CART_DATA_CACHE_KEY = "cart_data_cache_key";
localStorage.setItem(CART_DATA_CACHE_KEY, null);

let cartLocalData = JSON.parse(localStorage.getItem(CART_DATA_CACHE_KEY)) ?? [];
const initialState = {
  user: null,
  carts: cartLocalData,
  cartAmount: cartLocalData.reduce(
    (prev, curr) => prev.amount + curr.amount,
    0
  ),
};

export const store = createContext(initialState);

const { Provider } = store;

export const ACTION_TYPE = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_TO_CART: "REMOVE_ITEM_TO_CART",
  FETCH_LOCAL_CART: "FETCH_LOCAL_CART",
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const currentState = { ...state };
    switch (action.type) {
      case ACTION_TYPE.ADD_ITEM_TO_CART:
        let carts = [...currentState.carts];
        let cartAmount = currentState.cartAmount;

        let newItem = {
          ...action.payload,
          amount: 1,
        };

        let index = carts.findIndex((e) => e.product_id === newItem.product_id);
        if (index !== -1) {
          let oldCart = carts[index];
          carts.splice(index, 1, {
            ...newItem,
            amount: oldCart.amount + 1,
          });
        } else {
          carts.push(newItem);
        }
        localStorage.setItem(CART_DATA_CACHE_KEY, JSON.stringify(carts));
        return { ...currentState, carts, cartAmount: cartAmount + 1 };
      case ACTION_TYPE.REMOVE_ITEM_TO_CART:
        let index2 = currentState.carts.indexOf(action.payload);
        if (index2 !== -1) {
          currentState.carts.splice(index2, 1);
          localStorage.setItem(
            CART_DATA_CACHE_KEY,
            JSON.stringify(currentState.carts)
          );
        }
        return currentState;
      default:
        return currentState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default StateProvider;
