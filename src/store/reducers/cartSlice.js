// cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addItem: (state, action) => {
      const newItem = { ...action.payload };
      state.push(newItem);
  
    },
    updateQuantity: (state, action) => {
        const { _id, quantity, type } = action.payload;
        const item = state.find((item) => item._id === _id);
        
        if (item) {
          if (type === "increase") {
            item.quantity = quantity + 1;
          } else if (type === "decrease") {
            if (item.quantity === 1) {
              // Remove the item from the cart if quantity becomes 0
              return state.filter((cartItem) => cartItem._id !== _id);
            } else if (item.quantity > 0) {
              item.quantity = quantity - 1;
            }
          }
        }
      },
      resetCart: (state) => {
        return []
      },
      
  },
});

export const { addItem, updateQuantity,resetCart } = cartSlice.actions;
export default cartSlice.reducer;
