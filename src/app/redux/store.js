// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import blogsReducer from './slices/blogsSlice';
import projectsReducer from './slices/projectsSlice';

const store = configureStore({
  reducer: {
    blogs: blogsReducer,
    projects: projectsReducer,
  },
});

export default store;
