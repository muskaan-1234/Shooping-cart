import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem(state, action) {
      state.items.push(action.payload);
    },
    deleteItem(state, action) {
    state.items.splice(action.payload,1);
      
    },
    clearAll(state) {
      state.items = [];
    },
  },
});

export const { addItem, deleteItem, clearAll } = cartSlice.actions;
export default cartSlice.reducer;
//.reducer because specifically exporting reducers