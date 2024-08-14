// src/redux/slices/blogsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const blogsSlice = createSlice({
  name: 'blogs',
  initialState: {
    blogs: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchBlogsStart: (state) => {
      state.loading = true;
    },
    fetchBlogsSuccess: (state, action) => {
      state.blogs = action.payload;
      state.loading = false;
    },
    fetchBlogsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchBlogsStart, fetchBlogsSuccess, fetchBlogsFailure } = blogsSlice.actions;

export const fetchBlogs = () => async (dispatch) => {
  dispatch(fetchBlogsStart());
  try {
    const response = await axios.get('/api/blogs');
    dispatch(fetchBlogsSuccess(response.data));
  } catch (error) {
    dispatch(fetchBlogsFailure('Failed to fetch blogs'));
  }
};

export default blogsSlice.reducer;
