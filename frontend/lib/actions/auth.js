"use client";
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const authAxios = axios.create({
  baseURL: "http://localhost:5000/auth",
  withCredentials: true,
  //headers: { 'Content-Type': 'application/json' }
});

let isRefreshing = false;
let failedQueue = [];

const processQueue = (error, token = null) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error);
    } else {
      prom.resolve(token);
    }
  });
  failedQueue = [];
};

authAxios.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (originalRequest.url === "/refresh-token") {
        processQueue(error);
        return Promise.reject(error);
      }

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then(() => authAxios(originalRequest))
          .catch((err) => Promise.reject(err));
      }

      originalRequest._retry = true;
      isRefreshing = true;

      try {
        await authAxios.post("/refresh-token");
        const retryResponse = await authAxios(originalRequest);
        processQueue(null);
        return retryResponse;
      } catch (refreshError) {
        processQueue(refreshError);
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }
    return Promise.reject(error);
  }
);

// Enhanced async thunks with error handling
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await authAxios.post("/login", credentials);
      return response.data.user;
    } catch (error) {
      if (error.response?.data?.isInvalid) {
        const errorData = error.response?.data || {}
        const err = new Error(JSON.stringify(errorData.details, null, 2));
        err.details = errorData.details;
        err.name = "Validation failed"
        //console.log("error in auth action", JSON.stringify(err, null, 2));
        throw err;
      } else {
        const err = new Error( "Internal Server Error");
        err.name = "Server Error";
        throw err;
      }
    }
  }
);

export const checkAuth = createAsyncThunk(
  "auth/checkAuth",
  async (_, { rejectWithValue }) => {
    try {
      const response = await authAxios.post("/check-token");
      return response.data.user;
    } catch (error) {
      return rejectWithValue({
        status: error.response?.status,
        message: error.response?.data?.message || "Authentication check failed",
      });
    }
  }
);

export const logoutUser = createAsyncThunk(
  "auth/logout",
  async (_, { rejectWithValue }) => {
    try {
      await authAxios.post("/logout");
      console.log("Logged Out Successfully");
      return { message: "Logged Out Successfully" };
    } catch (error) {
       console.log("error in ")
      if (error.response?.data?.isInvalid) {
        const errorData = error.response?.data || {};
        const err = new Error(error.message);
        err.details = errorData.details;
        err.name = "Validation failed"
        throw err;
      } else {
        const err = new Error( "Internal Server Error");
        err.name = "Server Error";
        throw err;
      }
    }
  }
);

export async function signup(formData) {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/signup",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { success: true, message: response.data.message };
  } catch (error) {
    if (error.response?.data?.isInvalid) {
      const errorData = error.response?.data || {};
      const err = new Error(error.message);
      err.details = errorData.details;
      err.name = "Validation failed"
      throw err;
    } else {
      const err = new Error( "Internal Server Error");
      err.name = "Server Error";
      throw err;
    }
  }
}

export async function forgotPassword(formData) {
  try {
    const response = await axios.post(
      "http://localhost:5000/auth/forgot-password",
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { success: true, message: response.data.message };
  } catch (error) {
    if (error.response?.data?.isInvalid) {
      const errorData = error.response?.data || {};
      const err = new Error(error.message);
      err.details = errorData.details;
      err.name = "Validation failed"
      throw err;
    } else {
      const err = new Error( "Internal Server Error");
      err.name = "Server Error";
      throw err;
    }
  }
}

export async function resetPassword(formData, resetToken) {
  try {
    const response = await axios.post(
      `http://localhost:5000/auth/reset-password/${resetToken}`,
      formData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return { success: true, message: response.data.message };
  } catch (error) {
    if (error.response?.data?.isInvalid) {
      const errorData = error.response?.data || {};
      const err = new Error(error.message);
      err.details = errorData.details;
      err.name = "Validation failed"
      throw err;
    } else {
      const err = new Error( "Internal Server Error");
      err.name = "Server Error";
      throw err;
    }
  }
}

