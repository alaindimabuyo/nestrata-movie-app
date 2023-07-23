import {createSlice} from '@reduxjs/toolkit';

const initialState = {
  searchedPerson: null,
};

export const STORE_NAME = 'person';

const series = createSlice({
  name: STORE_NAME,
  initialState,
  reducers: {
    setSearchPerson: (state, action) => {
      state.searchedPerson = action.payload;
    },
  },
});

export const {reducer, name, actions} = series;
