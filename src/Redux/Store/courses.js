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
export const removeCourse = createAsyncThunk("courses/remove", async (id) => {
  const data = await fetch(
    `https://redux-cms.iran.liara.run/api/courses/${id}`,
    {
      method: "DELETE",
      headers: { "content-type": "application/json" },
    }
  );
  const res = await data.json();
  return res;
});
const CourseSlice = createSlice({
  name: "courses",
  initialState: [],
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourses.fulfilled, (state, action) => action.payload);
    builder.addCase(removeCourse.fulfilled, (state, action) => {
      const newCourseData = state.filter(
        (item) => item?._id !== action.payload.id
      );
      return newCourseData;
    });
  },
});
export default CourseSlice.reducer;
