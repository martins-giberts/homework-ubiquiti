import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";

export type SearchState = {
  searchQueryInput: string;
};

const initialState: SearchState = {
  searchQueryInput: "",
};

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    searchQuery: (state, action) => {
      state.searchQueryInput = action.payload;
    },
    clearQueryInput: (state) => {
      state.searchQueryInput = "";
    },
  },
});

export const selectSearchQueryInput = (state: RootState) =>
  state.search.searchQueryInput;

export const { searchQuery, clearQueryInput } = searchSlice.actions;
