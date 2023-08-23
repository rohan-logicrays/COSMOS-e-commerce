// productSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchProductById, fetchProductsFromApi } from "../../Api/api"; // Import your API function here

export const fetchProducts = createAsyncThunk("", async () => {
  const response = await fetchProductsFromApi();
  return response.allProducts;
});

export const fetchSingleProduct = createAsyncThunk(
  "products/fetchSingleProduct",
  async (productId) => {
    const response = await fetchProductById(productId);
    return response;
  }
);

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    status: "idle",
    error: null,
    singleProduct: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.products = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      })
      .addCase(fetchSingleProduct.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.singleProduct = action.payload;
      });
  },
});

export default productSlice.reducer;
