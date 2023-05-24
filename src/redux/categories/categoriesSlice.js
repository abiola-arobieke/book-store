import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  status: 'Under Construction',
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
});

export default categoriesSlice.reducer;
