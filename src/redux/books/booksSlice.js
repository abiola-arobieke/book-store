import { createSlice } from '@reduxjs/toolkit';
import booksItem from '../../booksItem';

const initialState = {
  booksItem,
};

const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    removeBook: (state, action) => {
      const bookId = action.payload;
      state.booksItem = state.booksItem.filter(
        (book) => book.item_id !== bookId,
      );
    },
    addBook: (state, action) => {
      const newBook = action.payload;
      state.booksItem = [...state.booksItem, newBook];
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
