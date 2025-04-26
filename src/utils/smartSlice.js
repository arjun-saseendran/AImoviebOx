import { createSlice } from "@reduxjs/toolkit";

const smartSlice = createSlice({
  name: "smartSearch",
  initialState: {
    showSmartSearch: false,
    movieResult: null,
    movieNames: null,
  },
  reducers: {
    toggleSmartSearch: (state) => {
      state.showSmartSearch = !state.showSmartSearch;
    },
    addSmartSearchResult: (state, action) => {
      const { movieResult, movieNames } = action.payload;
      state.movieResult = movieResult;
      state.movieNames = movieNames;
    },
  },
});

export default smartSlice.reducer;
export const { toggleSmartSearch, addSmartSearchResult } = smartSlice.actions;
