import { createSlice } from "@reduxjs/toolkit";

const smartSlice = createSlice({
  name: "smartSearch",
  initialState: {
    showSmartSearch: false,
  },
  reducers: {
    toggleSmartSearch: (state) => {
      state.showSmartSearch = !state.showSmartSearch;
    },
  },
});

export default smartSlice.reducer;
export const { toggleSmartSearch } = smartSlice.actions;
