import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  category: [],
  isLoading: true,
  error: '',
};

export const fetchCategories = createAsyncThunk(
  'categories/fetchCategories',
  async (url, { rejectWithValue }) => {
    try {
      const response = await fetch(url);
      const category = await response.json();
      // console.log(category);
      return category;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCategories.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCategories.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        category: action.payload,
      }))
      .addCase(fetchCategories.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default categoriesSlice.reducer;
