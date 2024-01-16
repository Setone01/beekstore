import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productData: [],
  userInfo: null,
};

export const beekstoreSlice = createSlice({
  name: "beekstore",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const item = state.productData.find(
        (item) => item.id === action.payload.id
      );
      if (item) {
        item.quantity += action.payload.quantity;
      } else state.productData.push(action.payload);
    },
    quantityIncrement: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload);
      if (item) {
        item.quantity++;
      }
    },
    quantityDecrement: (state, action) => {
      const item = state.productData.find((item) => item.id === action.payload);
      if (item.quantity === 1) {
        item.quantity = 1;
      } else {
        item.quantity--;
      }
    },
    deleteItem: (state, action) => {
      state.productData = state.productData.filter(
        (item) => item.id !== action.payload
      );
    },
    resetCart: (state) => {
      state.productData = [];
    },
  },
});

export const {
  addToCart,
  quantityIncrement,
  quantityDecrement,
  deleteItem,
  resetCart,
} = beekstoreSlice.actions;
export default beekstoreSlice.reducer;
