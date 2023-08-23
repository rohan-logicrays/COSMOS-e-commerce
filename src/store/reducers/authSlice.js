import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  user: null,
  token: null,
  isLoading: false,
  error: null,
};

// Sign-up async thunk
export const signUpAsync = createAsyncThunk("auth/signUp", async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/resisterUser",
      userData
    );
    return response.data;
  } catch (error) {
    throw error;
  }
});

// Login async thunk
export const loginAsync = createAsyncThunk("auth/login", async (userData) => {
  try {
    const response = await axios.post(
      "http://localhost:3000/loginJwt",
      userData
    );
    const { token } = response.data;
    if (token) {
      try {
        const getProfile = await axios.get("http://localhost:3000/profileJwt", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        return getProfile.data
        
      } catch (error) {
        throw error;
      }
    }
   
  } catch (error) {
    throw error;
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearError: (state) => {
      state.error = null;
    },
    logOut:(state)=>{
      state.user = null;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(signUpAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signUpAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload;
      })
      .addCase(signUpAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      })
      .addCase(loginAsync.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user; 
        state.error = false
        
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.error.message;
      });
  },
});

export const selectUser = (state) => state.auth.user;
export const selectIsLoading = (state) => state.auth.isLoading;
export const selectError = (state) => state.auth.error;

export const { clearError,logOut } = authSlice.actions;

export default authSlice.reducer;
