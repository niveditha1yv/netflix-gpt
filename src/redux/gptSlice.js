import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchPage: false,
    lang: "en",
  },
  reducers: {
    toggleGptSearch: (state) => {
      state.showGptSearchPage = !state.showGptSearchPage;
    },
    selectLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { toggleGptSearch, selectLang } = gptSlice.actions;

export default gptSlice.reducer;
