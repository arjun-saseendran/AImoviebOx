import { createSlice } from "@reduxjs/toolkit";

const langSlice = createSlice({
  name: "language",
  initialState: {
    languageOption: "en",
  },
  reducers: {
    changeLanguage: (state, action) => {
      state.languageOption = action.payload;
    },
  },
});

export default langSlice.reducer;
export const { changeLanguage } = langSlice.actions;
