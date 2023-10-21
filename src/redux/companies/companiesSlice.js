import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  companies: [],
  isLoading: false,
  error: '',
};

export const fetchCompanies = createAsyncThunk(
  'companies/fetchCompanies',
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch('https://financialmodelingprep.com/api/v3/search?query=AA&apikey=7ec5443c9e2544b7fc49d61999878c6b');
      const companies = await response.json();

      const filteredCompanies = companies.slice(0, 700).map((company) => ({
        name: company.name,
        exchangeShortName: company.exchangeShortName,
      }));

      return filteredCompanies;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
);

const companiesSlice = createSlice({
  name: 'companies',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchCompanies.pending, (state) => ({
        ...state,
        isLoading: true,
      }))
      .addCase(fetchCompanies.fulfilled, (state, action) => ({
        ...state,
        isLoading: false,
        companies: action.payload,
      }))
      .addCase(fetchCompanies.rejected, (state, action) => ({
        ...state,
        isLoading: false,
        error: action.payload,
      }));
  },
});

export default companiesSlice.reducer;
