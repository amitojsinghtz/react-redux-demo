import * as actionTypes from "./shopping-types";

const INITIAL_STATE = {
  products: [
    {
      id: 1,
      title: "Cube",
      description:
        "Playing Cube",
      price: 150,
      image:
      "https://tse3.mm.bing.net/th?id=OIP.wNYG0Zh3-ZtRqSoq-znedAHaHa&pid=Api&P=0&w=300&h=300"  
      },
    {
      id: 2,
      title: "Cup",
      description:
        "Coffee Cup",
      price: 150,
      image:
        "https://tse1.mm.bing.net/th?id=OIP.B_9ppWb-gTvYvS5NNZw7JgHaFx&pid=Api&P=0&w=192&h=151",
    },
    {
      id: 3,
      title: "Mobile",
      description:
        "Vivo",
      price: 12000,
      image:
        "https://tse4.mm.bing.net/th?id=OIP.yhX_zdYEeCQS_9AEZp69kQHaHa&pid=Api&P=0&w=300&h=300",
    },
  ],
  cart: [],
  currentItem: null,
};

const shopReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART:
      const item = state.products.find(
        (product) => product.id === action.payload.id
      );
      const inCart = state.cart.find((item) =>
        item.id === action.payload.id ? true : false
      );

      return {
        ...state,
        cart: inCart
          ? state.cart.map((item) =>
              item.id === action.payload.id
                ? { ...item, qty: item.qty + 1 }
                : item
            )
          : [...state.cart, { ...item, qty: 1 }],
      };
    case actionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    case actionTypes.ADJUST_ITEM_QTY:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, qty: +action.payload.qty }
            : item
        ),
      };
    default:
      return {
        ...state
      }
  }
};

export default shopReducer;
