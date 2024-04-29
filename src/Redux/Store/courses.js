import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const getAllCourses = createAsyncThunk("courses/getAll", async (url) => {
  try {
    const data = await axios.get(url);
    if (data.status !== 200) throw new Error("unknown error");
    return data.data;
  } catch (error) {
    console.log(error);
  }
});

const CourseSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => action.payload);
  },
});
export default CourseSlice.reducer;
