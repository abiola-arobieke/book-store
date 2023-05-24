import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  booksItem: [],
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksItem = state.booksItem.filter((book) => book.id !== bookId);
    },
    addBook: (state, payload) => {
      state.booksItem = [...state.booksItem, payload];
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
