import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axiosInstance from "Configs/axiosInstance";
import { toast } from "react-hot-toast";

const initialState = {
  shelfList: [
    {
      _id: "640f2d8f4ecc33392931f0ab",
      userId: "640f2d8f4ecc33392931f0a6",
      name: "read",
      books: [
        {
          _id: "640a0280d6280c9ca58aef41",
          title: "The Silent Forest",
          author: "Jane Doe",
          pages: 320,
        },
      ],
    },
    {
      _id: "640f2d8f4ecc33392931f0ac",
      userId: "640f2d8f4ecc33392931f0a6",
      name: "currently_reading",
      books: [],
    },
    {
      _id: "640f2d8f4ecc33392931f0ad",
      userId: "640f2d8f4ecc33392931f0a6",
      name: "want_to_read",
      books: [],
    },
  ],
  selectedShelfBooks: [
     {
        _id: "640a0280d6280c9ca58aef41",
        title: "The Silent Forest",
        author: "Jane Doe",
        pages: 320,
        imageUrl: "https://example.com/images/silent-forest.jpg",
      },
  ],
  status: "succeeded",
  error: null,
};

export const getAllBookShelves = createAsyncThunk(
  "course/getAllBookShelves",
  async () => {
    try {
      const response = axiosInstance.get("bookshelves", {
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      toast.promise(response, {
        loading: "loading bookshelves data",
        success: "Successfully loaded all the bookshelves",
        error: "Something went wrong",
      });
      return await response;
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong, cannot download bookshelves");
    }
  }
);

export const addBookToShelf = createAsyncThunk(
  "course/addBookToShelf",
  async (data) => {
    try {
      const response = axiosInstance.patch(
        `/bookshelves/${data.shelfName}/add/${data.bookId}`,
        {},
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      toast.promise(response, {
        loading: "adding book to shelf data",
        success: "Successfully added book to shelf",
        error: "Something went wrong",
      });

      return await response;
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong, cannot download bookshelves");
    }
  }
);

export const createShelf = createAsyncThunk(
  "course/createShelf",
  async (data) => {
    try {
      const response = axiosInstance.post(
        `/bookshelves`,
        { name: data.shelfName },
        {
          headers: {
            "x-access-token": localStorage.getItem("token"),
          },
        }
      );
      toast.promise(response, {
        loading: "adding new shelf data",
        success: "Successfully added new shelf",
        error: "Something went wrong",
      });

      return await response;
    } catch (error) {
      console.log(error);

      toast.error("Something went wrong, cannot download bookshelves");
    }
  }
);

const shelfSlice = createSlice({
  name: "shelf",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllBookShelves.fulfilled, (state, action) => {
      if (action?.payload?.data?.data) {
        state.shelfList = action?.payload?.data?.data;
      }
    });
  },
});

export default shelfSlice.reducer;
