import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
export const getAllArticles = createAsyncThunk(
  "articles/getAll",
  async (url) => {
    try {
      const data = await axios.get(url);
      if (data.status !== 200) throw new Error("something went wrong");
      return data.data;
    } catch (error) {
      console.log(error);
    }
  }
);
const articleSlice = createSlice({
  name: "articles",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      getAllArticles.fulfilled,
      (state, action) => action.payload
    );
  },
});
export default articleSlice.reducer;
