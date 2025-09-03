import { createSlice } from '@reduxjs/toolkit'

// Load from localStorage or fallback to []
const savedItems = JSON.parse(localStorage.getItem("cartItems")) || []

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    
    items: savedItems,  // ✅ initialize with saved items
    total: 0,
  },
  reducers: {
    addcart: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);

      if (!exist) {
        state.items.push({ ...item, qty: 1 });
      }
      // ✅ save to localStorage
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    buy: (state, action) => {
      const item = action.payload;
      const exist = state.items.find(i => i.id === item.id);

      if (!exist) {
        state.items.push({ ...item, qty: 1 });
        return
      } 
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    remove: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);

      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    increase: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item) {
        item.qty += 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    decrease: (state, action) => {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.qty > 1) {
        item.qty -= 1;
      }
      localStorage.setItem("cartItems", JSON.stringify(state.items));
    },

    clear: (state) => {
      state.items = [];
      localStorage.removeItem("cartItems"); // ✅ clear localStorage
    },
  },
});

// Action creators
export const { addcart, remove, increase, decrease, buy, clear } = counterSlice.actions;

export default counterSlice.reducer;
