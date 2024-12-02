import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { useState } from "react";
import { useEffect } from "react";
import { jwtDecode } from "jwt-decode";

export const loginUser = createAsyncThunk('auth/loginUser', async (userData, { rejectWithValue }) => {
  try {
      const response = await axios.post('http://localhost:3000/v1/api/auth/login', userData, {
          withCredentials: true,
      });
      return response.data; 
  } catch (error) {
      return rejectWithValue(error.response?.data?.message || "Đăng nhập không thành công");
  }
});

export const getUser = createAsyncThunk('auth/getUser', async (_, { rejectWithValue }) => {
  try {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      return rejectWithValue("No token found");
    }

    const decodedToken = jwtDecode(token);
      
    if (decodedToken.exp * 1000 < Date.now()) {
      return rejectWithValue("Token has expired");
    }

    return decodedToken;
  } catch (error) {
    return rejectWithValue("Failed to decode token");
  }
});



const authSlice = createSlice({
    name: "auth",
    initialState: {
        username: null,
        id: null,
        email: null,
        role: null,
        accessToken: null,
        refreshToken: null,
        loading: false,
        error: null,
    },
    reducers: {
        logout(state) {
            state.username = null;
            state.id = null;
            state.role = null;
            state.email = null;
            state.accessToken = null;
            state.refreshToken = null;
        },
        setTokens(state, action) {
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
        },
        setUser(state, action) {
          state.username = action.payload.username;
          state.email = action.payload.email;
          state.role = action.payload.role;
          state.id = action.payload.id; 
      },
    },
    extraReducers: (builder) => {
      builder
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.username = action.payload.username;
          state.id = action.payload.id;
          state.accessToken = action.payload.accessToken;
          state.refreshToken = action.payload.refreshToken;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        })
        .addCase(getUser.fulfilled, (state, action) => {
          state.username = action.payload.username;
          state.id = action.payload.id;
          state.role = action.payload.role;
          state.email = action.payload.email;
        })
        .addCase(getUser.rejected, (state, action) => {
          state.error = action.payload;
        });
    }
    
})

export const { logout, setTokens, setUser } = authSlice.actions;
export default authSlice.reducer;