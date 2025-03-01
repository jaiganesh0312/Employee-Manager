// features/searchPaginationSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  keyword: '',
  currentPage: 1,
};

const filterSearchSlice = createSlice({
  name: 'filterSearch',
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
      // Reset to first page when search changes
      state.currentPage = 1; 
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetSearch: (state) => {
      state.keyword = '';
      state.currentPage = 1;
    }
  },
});

export const { setKeyword, setCurrentPage, resetSearch } = filterSearchSlice.actions;
export default filterSearchSlice.reducer;