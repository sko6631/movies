import { useReducer } from "react";
import { basketSchema } from "../schemas/basket";
import { z } from "zod";

type Basket = z.infer<typeof basketSchema>;

type BasketReducerActions =
  | {
      type: "CLEAR";
    }
  | {
      type: "ADD";
      payload: string;
    }
  | {
      type: "REMOVE";
      payload: string;
    }
  | {
      type: "INCREMENT";
      payload: string;
    }
  | {
      type: "DECREMENT";
      payload: string;
    };

const basketReducer = (state: Basket, action: BasketReducerActions): Basket => {
  let result: Basket = state;

  switch (action.type) {
    case "CLEAR":
      result = [];
      break;
    case "ADD":
      result = [...state, { id: action.payload, quantity: 1 }];
      break;
    case "REMOVE":
      result = state.filter((item) => item.id !== action.payload);
      break;
    case "INCREMENT":
      result = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity + 1 };
        }

        return item;
      });
      break;
    case "DECREMENT":
      result = state.map((item) => {
        if (item.id === action.payload) {
          return { ...item, quantity: item.quantity - 1 };
        }

        return item;
      });
      break;
  }

  return result;
};

const createBasketInitialState = () => {
  try {
    const basket = JSON.parse(localStorage.getItem("basket") ?? "[]");

    return basketSchema.parse(basket);
  } catch {
    return [];
  }
};

export const useBasket = () => {
  const [state, dispatch] = useReducer(
    basketReducer,
    createBasketInitialState()
  );

  const clearBasket = () => {
    dispatch({ type: "CLEAR" });
  };

  const addItem = (id: string) => {
    dispatch({ type: "ADD", payload: id });
  };

  const removeItem = (id: string) => {
    dispatch({ type: "REMOVE", payload: id });
  };

  const incrementItem = (id: string) => {
    dispatch({ type: "INCREMENT", payload: id });
  };

  const decrementItem = (id: string) => {
    dispatch({ type: "DECREMENT", payload: id });
  };

  return {
    basket: state,
    clearBasket,
    addItem,
    removeItem,
    incrementItem,
    decrementItem,
  };
};
