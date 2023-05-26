import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const apiUrl = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/XKLrcF8yEfNG679PvMbv/books';
const initialState = {
  booksItem: [],
  isLoading: false,
};

export const getBooksItem = createAsyncThunk(
  'books/getAllBooks',
  async (name, thunkAPI) => {
    try {
      const res = await axios.get(apiUrl);
      const booksData = Object.entries(res.data).map((item) => ({
        ...item[1][0],
        item_id: item[0],
      }));
      return booksData;
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to get data');
    }
  },
);

export const createBook = createAsyncThunk(
  'books/create',
  async (newBook, thunkAPI) => {
    try {
      const res = await axios.post(`${apiUrl}`, newBook);
      thunkAPI.dispatch(getBooksItem());
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('Unable to create new book');
    }
  },
);

export const deleteBook = createAsyncThunk('book/delete', async (id, thunkAPI) => {
  const url = `${apiUrl}/${id}`;
  try {
    const res = await axios.delete(url);
    thunkAPI.dispatch(getBooksItem());
    return res.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('Something went wrong');
  }
});

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
  extraReducers: {
    [getBooksItem.pending]: (state) => {
      state.isLoading = true;
    },
    [getBooksItem.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksItem = action.payload;
    },
    [getBooksItem.rejected]: (state) => {
      state.isLoading = false;
    },
    [createBook.pending]: (state) => {
      state.isLoading = true;
    },
    [createBook.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.booksItem = [...state.booksItem, action.payload];
    },
    [createBook.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

export const { removeBook, addBook } = booksSlice.actions;

export default booksSlice.reducer;
