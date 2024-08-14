// src/redux/slices/projectsSlice.js
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const projectsSlice = createSlice({
  name: 'projects',
  initialState: {
    projects: [],
    loading: false,
    error: null,
  },
  reducers: {
    fetchProjectsStart: (state) => {
      state.loading = true;
    },
    fetchProjectsSuccess: (state, action) => {
      state.projects = action.payload;
      state.loading = false;
    },
    fetchProjectsFailure: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { fetchProjectsStart, fetchProjectsSuccess, fetchProjectsFailure } = projectsSlice.actions;

export const fetchProjects = () => async (dispatch) => {
  dispatch(fetchProjectsStart());
  try {
    const response = await axios.get('/api/projects');
    dispatch(fetchProjectsSuccess(response.data));
  } catch (error) {
    dispatch(fetchProjectsFailure('Failed to fetch projects'));
  }
};

export default projectsSlice.reducer;
