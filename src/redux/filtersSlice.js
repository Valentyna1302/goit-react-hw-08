import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filter: "",
};

const slice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
  },
});

export const filtersReducer = slice.reducer;
export const { setFilter } = slice.actions;

export const selectStatusFilter = (state) => state.filter.filter;
