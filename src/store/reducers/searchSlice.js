import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { searchResults } from "../../Api/api";


export const fetchSearchResults = createAsyncThunk(
  "search/fetchResults",
  async (searchQuery) => {
    const response = await searchResults(searchQuery);
    return response.allProducts; 
  }
);

const searchSlice = createSlice({
    name: "search",
    initialState: {
      results: [],
      loading: false,
      error: null,
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSearchResults.pending, (state) => {
          state.loading = true;
          state.results = [];
          state.error = null;
        })
        .addCase(fetchSearchResults.fulfilled, (state, action) => {
          state.loading = false;
          state.results = action.payload;
          state.error = null;
        })
        .addCase(fetchSearchResults.rejected, (state, action) => {
          state.loading = false;
          state.results = [];
          state.error = action.error.message;
        });
    },
  });
  
  export default searchSlice.reducer;