import { configureStore } from "@reduxjs/toolkit";
import Users from "./Store/Users";
import courses from "./Store/courses";
import articles from "./Store/articles";

export default configureStore({
  reducer: {
    Users,
    courses,
    articles,
  },
});
