import React, { createContext, useReducer } from "react";
const CART_DATA_CACHE_KEY = "cart_data_cache_key";
const USER_DATA_CACHE_KEY = "user_data_cache_key";
// localStorage.setItem(CART_DATA_CACHE_KEY, null);

const tryParse = (any) => {
  try {
    return JSON.parse(any);
  } catch (error) {
    return null;
  }
};

let cartLocalData = tryParse(localStorage.getItem(CART_DATA_CACHE_KEY)) ?? [];
let userLocalData = tryParse(localStorage.getItem(USER_DATA_CACHE_KEY));

const initialState = {
  user: userLocalData,
  carts: cartLocalData,
  cartAmount: cartLocalData.reduce((prev, e) => prev + e.amount, 0),
};

export const store = createContext(initialState);

const { Provider } = store;

export const ACTION_TYPE = {
  ADD_ITEM_TO_CART: "ADD_ITEM_TO_CART",
  REMOVE_ITEM_TO_CART: "REMOVE_ITEM_TO_CART",
  FETCH_LOCAL_CART: "FETCH_LOCAL_CART",
  RESET_CART: "RESET_CART",
  SET_USER: "SET_USER",
  REMOVE_USER: "REMOVE_USER",
};

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    const currentState = { ...state };
    let carts = JSON.parse(JSON.stringify(currentState.carts));
    let cartAmount = currentState.cartAmount;
    let payload = action.payload;
    switch (action.type) {
      case ACTION_TYPE.ADD_ITEM_TO_CART:
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
        let index2 = carts.findIndex(
          (e) => e.product_id === payload.product_id
        );
        if (index2 !== -1) {
          if (payload.amount > 1) {
            carts[index2].amount = payload.amount - 1;
          } else {
            carts.splice(index2, 1);
          }
          localStorage.setItem(CART_DATA_CACHE_KEY, JSON.stringify(carts));
        }
        return {
          ...currentState,
          carts,
          cartAmount: carts.reduce((prev, e) => prev + e.amount, 0),
        };
      case ACTION_TYPE.RESET_CART:
        return {
          ...currentState,
          carts: [],
          cartAmount: 0,
        };
      case ACTION_TYPE.SET_USER:
        localStorage.setItem(USER_DATA_CACHE_KEY, JSON.stringify(payload));
        localStorage.setItem("token", payload.token);
        return {
          ...currentState,
          user: payload,
        };
      case ACTION_TYPE.REMOVE_USER:
        localStorage.setItem(USER_DATA_CACHE_KEY, null);
        return {
          ...currentState,
          user: null,
        };
      default:
        return currentState;
    }
  }, initialState);

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export default StateProvider;
