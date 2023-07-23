import {createSelector} from '@reduxjs/toolkit';

export const selectSelf = store => store.person;

export const selectSearchedPerson = createSelector(
  selectSelf,
  state => state.searchedPerson,
);
