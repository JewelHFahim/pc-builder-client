import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
    try {
      const cartData = localStorage.getItem("cart");
      if (cartData) {
        return JSON.parse(cartData);
      }
    } catch (error) {
      console.error("Error loading cart from local storage:", error);
    }
    return {
      products: [],
      total: 0,
    };
  };
  
  const saveCartToLocalStorage = (cart) => {
    try {
      localStorage.setItem("cart", JSON.stringify(cart));
    } catch (error) {
      console.error("Error saving cart to local storage:", error);
    }
  };
  
  const initialState = loadCartFromLocalStorage();


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, actions) => {
      const existing = state.products.find(
        (product) => product._id === actions.payload._id
      );
      if (existing) {
        existing.quantity = existing.quantity + 1;
      } else {
        state.products.push({ ...actions.payload, quantity: 1 });
      }
      
      // state.total += actions.payload.price;
      state.total = Number(state.total) + Number(actions.payload.price);
      saveCartToLocalStorage(state);

    },

    removeSingle: (state, actions) => {
      const existing = state.products.find(
        (product) => product._id === actions.payload._id
      );
      if (existing && existing.quantity > 1) {
        existing.quantity = existing.quantity - 1;
      } else {
        state.products = state.products.filter(
          (product) => product._id !== actions.payload._id
        );
      }

      state.total = Number(state.total) - Number(actions.payload.price);
      saveCartToLocalStorage(state);

      // state.total -= actions.payload.price;
    },

    removeFromCart: (state, actions) => {
      state.products = state.products.filter(
        (product) => product._id !== actions.payload._id
      );

      state.total = Number(state.total) - Number(actions.payload.price) * Number(actions.payload.quantity);
      saveCartToLocalStorage(state);
      // state.total -= actions.payload.price * actions.payload.quantity;
    },
  },
});

export const { addToCart, removeFromCart, removeSingle } = cartSlice.actions;
export default cartSlice.reducer;
