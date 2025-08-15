import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import toast from "react-hot-toast";

import image from "Assets/600x400.svg";

const initialState = {
  bookList: [
    {
      _id: "640a0280d6280c9ca58aef41",
      title: "The Silent Forest",
      description: "A detective story in a quiet town.",
      author: "Jane Doe",
      genres: [{ _id: "6409fe4709fc38c7d4f77d7c", name: "Mystery" }],
      pages: 320,
      publishDate: "2019-01-20",
      imageUrl: image,
    },
    {
      _id: "640a0280d6280c9ca58aef42",
      title: "Echoes of the Stars",
      description: "An epic science-fiction adventure.",
      author: "John Smith",
      genres: [{ _id: "640a0120da282a962a095b0d", name: "Sci-Fi" }],
      pages: 450,
      publishDate: "2021-05-15",
      imageUrl: image,

    },
  ],
  status: "succeeded", // Set status to succeeded to render content
  error: null,
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
