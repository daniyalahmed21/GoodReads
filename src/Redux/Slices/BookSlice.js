import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
  bookList: [],
};

export const getAllBooks = createAsyncThunk("course/getAllBooks", async () => {
  try {
    const response = axiosInstance.get("books");
    console.log("getallbooks");
    toast.promise(response, {
      loading: "Submitting form...",
      success: "Successfully loaded all books!!",
      error: "Something went wrong!!",
    });
    return await response;
  } catch (error) {
    console.log(error);
    toast.error("Cannot fetch books, something went wrong");
  }
});

const bookSlice = createSlice({
  name: "book",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.bookList = action.payload.data.data;
      console.log(state.bookList);
    });
  },
});

export default bookSlice.reducer;
