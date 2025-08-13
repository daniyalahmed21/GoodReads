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
    console.log("hello")
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

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

// export const { increment, decrement, incrementByAmount } = counterSlice.actions;

export default authSlice.reducer;
