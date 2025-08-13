import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";
const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || "",
  username: localStorage.getItem("username") || "",
  token: localStorage.getItem("token") || "",
};

export const signup = createAsyncThunk("auth/signup", async (data) => {
  try {
    const response = axiosInstance.post("signup", data);
    console.log("hello");
    toast.promise(response, {
      loading: "Submitting form...",
      success: "Successfully Signed up!!",
      error: "Something went wrong!!",
    });
    return await response;
  } catch (error) {
    console.log(error);
    toast.error("Cannot Signup, something went wrong");
  }
});

export const signin = createAsyncThunk("auth/signin", async (data) => {
  try {
    const response = axiosInstance.post("signin", data);
    toast.promise(response, {
      loading: "Submitting form...",
      success: "Successfully Signed in!!",
      // error: "Something went wrong!!",
    });
    return await response;
  } catch (error) {
    if (error.response.data.err) {
      toast.error(error.response.data.err);
    } else {
      toast.error("Cannot Signin, something went wrong");
    }
  }
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logOut: (state) => {
      (state.isLoggedIn = ""), (state.token = ""), (state.username = "");
    },
  },
  extraReducers: (builder) => {
    builder.addCase(signin.fulfilled, (state, action) => {
      if (action.payload.data) {
        state.isLoggedIn = action.payload.data.data !== undefined;
        state.token = action.payload.data.data.token;
        state.username = action.payload.data.data.username;
        localStorage.setItem(
          "isLoggedIn",
          action.payload.data.data !== undefined
        );
        localStorage.setItem("token", action.payload.data.data.token);
        localStorage.setItem("username", action.payload.data.data.username);
      }
    });
  },
});

export const { logOut } = authSlice.actions;

export default authSlice.reducer;
